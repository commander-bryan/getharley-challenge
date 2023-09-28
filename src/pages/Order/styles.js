import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const StyledContainer = styled(Container)(
    () => `
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 1rem auto;
    `,
);

export {
    StyledContainer,
}