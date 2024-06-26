import { Hono } from 'hono';
import usersApp from './api/users';
import authenticateUser from './api/authenticate';
import getCategories from './api/categories';
import foods from './api/foods';
import quantityUnits from './api/quantity_units';
import { Env } from './types/env';
import { cors } from 'hono/cors';

const app = new Hono<{ Bindings: Env }>();

// CORSミドルウェアを適用
app.use(
  cors({
    origin: '*', // 許可するオリジンを指定（'*'は全てのオリジンを許可）
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // 許可するHTTPメソッドを指定
    allowHeaders: ['Content-Type', 'Authorization'], // 許可するリクエストヘッダーを指定
  })
);

app.route('/api/users', usersApp);
app.route('/api/authenticate', authenticateUser);
app.route('/api/categories', getCategories);
app.route('/api/foods', foods);
app.route('/api/quantity_units', quantityUnits);

export default app;
