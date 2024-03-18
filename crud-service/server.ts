import { Router } from './routes/router';
import { errorHandler } from '../authorization-service/middleware/errorMiddleware';
import { notFoundHandler } from '../authorization-service/middleware/notFoundMiddleware';
import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import nocache from 'nocache';
import ViteExpress from 'vite-express';
dotenv.config();

const PORT = parseInt(process.env.VITE_CRUD_SERVICE_PORT as string, 10);
const CLIENT_ORIGIN_URL = process.env.VITE_CLIENT_ORIGIN_URL;

const app = express();
const apiRouter = express.Router();

app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Access-Control-Allow-Methods',
      'Access-Control-Request-Headers',
    ],
    credentials: true,
  })
);

app.use(express.json());
app.set('json spaces', 2);

app.use(
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        'default-src': ["'none'"],
        'frame-ancestors': ["'none'"],
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
    frameguard: {
      action: 'deny',
    },
  })
);

app.use((req, res, next) => {
  res.contentType('application/json; charset=utf-8');
  next();
});
app.use(nocache());

app.use('/api', apiRouter);
apiRouter.use('/userdata', Router);

app.use(errorHandler);
app.use(notFoundHandler);

ViteExpress.config({ mode: 'production' });

ViteExpress.listen(app, PORT, () => {
  console.log(`Crud-service listening on port ${PORT}`);
});
