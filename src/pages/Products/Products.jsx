import { Alert, CircularProgress, Container, Typography } from '@mui/material';
import ProductCard from './components/ProductCard/ProductCard';
import { useGet } from '../../hooks';
import { useOrder } from '../../providers/OrderProvider';

import { ProductsContainer } from './styles';

const Products = () => {
    const { data, loading, error } = useGet('https://gh-fe-exercise-api-4f80a724b506.herokuapp.com/api/products');
    const { order, update }= useOrder();

    return (
        <Container>
            <Typography variant="h4" component={'h1'}>
                    All Products
            </Typography>
            {loading && <CircularProgress />}
            {error && <Alert severity="error">Sorry, there has been error loading the products. Please try again.</Alert>}
            {data && (
                <ProductsContainer>
                    {data.length === 0 && <Typography>Sorry, there are no available products</Typography>}
                    {data.map(d => 
                        <ProductCard
                            key={d.id}
                            product={d}
                            count={order[d.id]?.count || 0}
                            updateOrder={update}
                        />
                    )}
                </ProductsContainer>
            )}
        </Container>
    );
}

export { Products };