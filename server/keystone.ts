import { config } from '@keystone-6/core';
import cors from 'cors';

import { lists } from './schema';
import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    lists,
    session,
    server: {
      cors: {
        origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
        credentials: true,
      },
      extendExpressApp: (app, commonContext) => {
        app.use(
          cors({
            origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
            credentials: true,
          })
        );

        app.use((req, res, next) => {
          res.setHeader(
            'Content-Security-Policy',
            "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
          );
          next();
        });

        app.get('/api/posts', async (req, res) => {
          const context = await commonContext.withRequest(req, res);
          const posts = await context.db.Post.findMany();
          res.json(posts);
        });
      },
    },
  })
);
