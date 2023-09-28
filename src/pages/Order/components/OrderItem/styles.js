import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

const StyledOrderItem = styled(Card)(
    ({ theme }) => `
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: ${theme.spacing(1)};
        margin-bottom: ${theme.spacing(1)};
  `,
);

const StyledOrderItemDescription = styled(Typography)`
    flex-basis: 75%;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export {
    StyledOrderItem,
    StyledOrderItemDescription,
}
