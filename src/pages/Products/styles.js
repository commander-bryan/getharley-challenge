import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const ProductsContainer = styled(Container)(
    () => `
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    `,
);

export {
    ProductsContainer,
}