import { memo } from 'react';
import { Button, CardContent, Typography } from '@mui/material';

import { StyledProductCard, StyledProductCardActions, StyledProductDescription } from './styles';

// TODO: Change button +/- text to
// TODO: Display product image, description, price
const ProductCard = ({ count, product, updateOrder }) => {
    const { description, image, name} = product;

    return (
        <StyledProductCard variant="outlined">
            <CardContent>
                <Typography noWrap>
                    {name}
                </Typography>
                <StyledProductDescription sx={{ fontSize: 14 }} color="text.secondary">
                    {description}
                </StyledProductDescription>
            </CardContent>
            <StyledProductCardActions>
                {count > 0 &&
                    <>
                        <Button onClick={() => updateOrder({ type: 'remove', item: product })} size="small">-</Button>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {count}
                        </Typography>
                    </>

                }
                <Button onClick={() => updateOrder({ type: 'add', item: product })} size="small">{count < 1 ? 'Add' : '+'}</Button>
            </StyledProductCardActions>
        </StyledProductCard>
    )
};

export default memo(ProductCard);
