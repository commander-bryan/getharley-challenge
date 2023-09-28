import { lighten, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const NavBarContainer = styled(Box)`
    padding-bottom: 1rem;
`;

const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
`;

const StyledCheckoutButton = styled(Button)`
    background-color: #1d81e5;
    margin-left: auto;
    
    &:hover {
        background-color: ${lighten('#1d81e5', 0.1)};
    }
`;

export {
    NavBarContainer,
    StyledCheckoutButton,
    StyledToolbar,
}