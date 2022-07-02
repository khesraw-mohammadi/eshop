import React, {useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message'


function HomeScreen() {
  const dispatch = useDispatch()
  const listProducts = useSelector(state => state.listProduct)
  const {error, loading, products} = listProducts
  useEffect(() => 
  {
    dispatch(fetchProducts())  
  },[]);
  
   


  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? <Loader />
        :
          error ? <Message variant='dnager'  text={error}/>
        :
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product}/>
                </Col>
            ))}
          
        </Row>
      }
      
    </div>
  )
}

export default HomeScreen
