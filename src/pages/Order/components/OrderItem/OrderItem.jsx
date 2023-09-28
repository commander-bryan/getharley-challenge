import { Typography } from '@mui/material';
import { useOrder } from '../../../../providers/OrderProvider';

import {
    StyledOrderItem,
    StyledOrderItemDescription,
} from './styles';

const OrderItem = ({ product }) => {
    const { order }= useOrder();
    const { id, description, name} = product;
    const count = order[id]?.count || 0;

    return (
        <StyledOrderItem variant="outlined">
            <Typography>
                {name}
            </Typography>
            <StyledOrderItemDescription color="text.secondary">
                {description}
            </StyledOrderItemDescription>
            <Typography >
                Quantity: {count}
            </Typography>
        </StyledOrderItem>
    )
};

export { OrderItem };
