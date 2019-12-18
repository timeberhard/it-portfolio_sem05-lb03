import orderRoutes from './api/order/order-routes';

//register endpoints
export function registerRoutes(app) {
    app.use('/api',orderRoutes);
}