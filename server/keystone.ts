import 'dotenv/config'
import { config } from '@keystone-6/core';
import cors from 'cors';

import { lists } from './schema';
import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      provider: 'mysql',
      url: process.env.DATABASE_URL as string,
    },
    lists,
    session,
    server: {
      cors: {
        origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://client-production-744c.up.railway.app', 'https://www.dollarpersale.com', /\.up\.railway\.app$/],
        credentials: true,
      },
      port: Number(process.env.PORT || 8080),
      extendExpressApp: (app, commonContext) => {
        app.use(
          cors({
            origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://client-production-744c.up.railway.app', 'https://www.dollarpersale.com', /\.up\.railway\.app$/],
            credentials: true,
          })
        );

        // app.use((req, res, next) => {
        //   res.setHeader(
        //     'Content-Security-Policy',
        //     "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
        //   );
        //   next();
        // });

        app.get('/api/posts', async (req, res) => {
          const context = await commonContext.withRequest(req, res);
          const posts = await context.db.Post.findMany();
          res.json(posts);
        });

        app.get('/api/projects', async (req, res) => {
          const context = await commonContext.withRequest(req, res);
          const projects = await context.db.Project.findMany();
          res.json(projects);
        });
      },
    },
  })
);
