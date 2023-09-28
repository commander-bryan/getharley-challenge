import { Order } from './Order';

const PATH='/order';

const OrderRoute = {
    path: PATH,
    element: <Order />,
};

export { OrderRoute, PATH }