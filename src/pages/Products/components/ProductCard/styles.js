import { styled } from '@mui/material/styles';
import { Card, CardActions, Typography } from '@mui/material';

const StyledProductCard = styled(Card)(
    ({ theme }) => `
        min-width: 240px;
        width: 30%;
        height: 200px;
        display: flex;
        flex-direction: column;
        margin: ${theme.spacing(1)};
  `,
);

const StyledProductCardActions = styled(CardActions)`
    margin-top:auto;
    justify-content: end;
`;

const StyledProductDescription = styled(Typography)`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 90%;
    margin: auto;

`;




export {
    StyledProductCard,
    StyledProductCardActions,
    StyledProductDescription,
}