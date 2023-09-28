import { useState } from 'react';
import { Alert, Button, Container, Typography } from '@mui/material';

import { OrderItem } from './components/OrderItem';
import { useOrder } from '../../providers/OrderProvider';
import { usePost } from '../../hooks';

import { StyledContainer } from './styles';

const orderToArray = order => Object.keys(order)
    .map(id => ({ 
        id, 
        name: order[id].name, 
        description: order[id].description, 
        count: order[id].count
    }))
    .filter(item => item.count > 0);

const Order = () => {
    const { error: checkoutError, posting, dispatchPost } = usePost();
    const { order } = useOrder();
    const [orderSuccess, setOrderSuccess] = useState({ success: false, id: null});
    const orderArray = orderToArray(order);

    const post = () => dispatchPost(
        'https://gh-fe-exercise-api-4f80a724b506.herokuapp.com/api/orders', 
        { 
            products: orderArray.map(item => ({ id: Number(item.id), quantity: item.count})),
        },
        // TODO: Clear order and navigate to a success page displaying order ID
        (r) => setOrderSuccess({ success: true, id: r.data.id }),
    );

    const checkoutDisabled = orderArray.length < 1 || posting; 

    return (
        <Container>
            <Typography variant="h4" component={'h1'}>
                Your order
            </Typography>
            <StyledContainer>
                {orderArray.length < 1 && 
                    <Typography>
                        Your order is empty
                    </Typography>
                }
                {orderArray.map(d => 
                    <OrderItem key={d.id} product={d} />
                )}
            </StyledContainer>
            <StyledContainer>
                {checkoutError && <Alert severity="error">There was an error completing your purchase. Please try again.</Alert>}
                {orderSuccess.success && <Alert severity="success">Your order has been created! Order ID: {orderSuccess.id}</Alert>}
                <Button disabled={checkoutDisabled} onClick={post}>Checkout</Button>
            </StyledContainer>

        </Container>
    );
}

export { Order };