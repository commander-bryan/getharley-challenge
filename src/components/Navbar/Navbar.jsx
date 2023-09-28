import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link, Outlet } from "react-router-dom";

import { PATH as PRODUCTS_PATH } from '../../pages/Products';
import { PATH as ORDER_PATH } from '../../pages/Order';

import { useOrder } from '../../providers/OrderProvider';

import { NavBarContainer, StyledCheckoutButton, StyledToolbar } from './styles';

const Navbar = () => {
    const { order } = useOrder();

    // TODO: Should this count be a count of all items, or of unique items?
    const numberOfItems = Object.keys(order).reduce((count, next) => count + order[next].count, 0);

    return (
        <>
            <NavBarContainer>
                <AppBar position="static">
                    <StyledToolbar>
                        <Link to={PRODUCTS_PATH}>Products</Link>
                        <StyledCheckoutButton component={Link} to={ORDER_PATH}>
                            Checkout ({numberOfItems})
                        </StyledCheckoutButton>
                    </StyledToolbar>
                </AppBar>
            </NavBarContainer>
            <Outlet/>
        </>
    );
}

export { Navbar };
