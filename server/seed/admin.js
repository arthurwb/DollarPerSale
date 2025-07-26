const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your DB user
    password: 'root_password', // replace with your DB password
    database: 'dps_database', // replace with your DB name
  });

  console.log('Connected to the database.');

  // Drop the User table if it exists
  await connection.execute('DROP TABLE IF EXISTS `User`');
  console.log('Dropped existing User table.');

  // Recreate the User table
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

  // Recreate unique index on email
  await connection.execute(`
    CREATE UNIQUE INDEX \`User_email_key\` ON \`User\`(\`email\`)
  `);

  // Hash the password
  const hashedPassword = await bcrypt.hash('password', 10);

  // Insert the user
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
