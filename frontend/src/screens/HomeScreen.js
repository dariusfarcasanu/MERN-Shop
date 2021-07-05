import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('All products');

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  const handleClick = category => setSelectedCategory(category);

  return (
    <>
      {!keyword && (
        <div className="text-center my-4">
          <ButtonGroup className="flex-wrap">
            <Button
              className="btn-color-primary"
              style={{ margin: '5px' }}
              onClick={() => handleClick('All products')}
            >
              All
            </Button>
            {products.map(product => (
              <Button
                key={product._id}
                className="btn-color-primary"
                style={{ margin: '5px' }}
                onClick={() => handleClick(product.category)}
              >
                {product.category}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      )}

      <h1>{selectedCategory}</h1>
      {!keyword && <ProductCarousel />}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products
            .filter(
              product =>
                selectedCategory === 'All products' ||
                product.category === selectedCategory
            )
            .map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
