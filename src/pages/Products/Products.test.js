import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { Products } from './Products';
import { OrderProvider } from '../../providers/OrderProvider';

const mockProductsResponse = [
    {
        id: 1,
        name: "Product 1",
        description: "1st test product",
        image: "fake url",
        price: 10,
        category: { "name": "cat1", "order": 500 }
    },
    {
        id: 2,
        name: "Product 2",
        description: "2nd test product",
        image: "fake url",
        price: 15,
        category: { "name": "cat2", "order": 200 }
    },
    {
        id: 3,
        name: "Product 3",
        description: "3rd test product",
        image: "fake url",
        price: 20,
        category: { "name": "cat1", "order": 500 }
    },
]

const server = setupServer(
    rest.get("https://gh-fe-exercise-api-4f80a724b506.herokuapp.com/api/products", (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockProductsResponse))
    }),
);

describe('Products list test', () => {
    beforeAll(() => server.listen());

    afterEach(() => server.resetHandlers());

    afterAll(() => server.close());

    it('renders a the product cards', async () => {
        render(
            <Router>
                <OrderProvider>
                    <Products />
                </OrderProvider>
            </Router>
        );

        await waitFor(() => {
            expect(screen.getByText('Product 1'));
            expect(screen.getByText('Product 2'));
            expect(screen.getByText('Product 3'));
        });
    })
});