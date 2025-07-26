require('dotenv').config();
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { URL } = require('url');

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set in .env');
  }

  // Parse DATABASE_URL, expected format: mysql://user:password@host:port/dbname
  const dbUrl = new URL(process.env.DATABASE_URL);

  const connection = await mysql.createConnection({
    host: dbUrl.hostname,
    port: dbUrl.port || 3306,
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.replace(/^\//, ''), // remove leading slash
  });

  console.log('Connected to the database.');

  await connection.execute('DROP TABLE IF EXISTS `User`');
  console.log('Dropped existing User table.');

  await connection.execute(`
    CREATE TABLE \`User\` (
      \`id\` VARCHAR(36) NOT NULL PRIMARY KEY,
      \`name\` VARCHAR(255) NOT NULL DEFAULT '',
      \`email\` VARCHAR(255) NOT NULL DEFAULT '',
      \`password\` TEXT NOT NULL,
      \`createdAt\` DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('Created User table.');

  await connection.execute(`
    CREATE UNIQUE INDEX \`User_email_key\` ON \`User\`(\`email\`)
  `);

  const hashedPassword = await bcrypt.hash('password', 10);

  const id = crypto.randomUUID();
  await connection.execute(
    'INSERT INTO `User` (`id`, `name`, `email`, `password`) VALUES (?, ?, ?, ?)',
    [id, 'Admin', 'admin@admin.com', hashedPassword]
  );

  console.log('Inserted admin user.');
  await connection.end();
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
