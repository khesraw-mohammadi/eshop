import React, {useState, useEffect} from 'react';
import { Button, Col, FormControl, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetail } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';


function ProductScreen() {
    const [qty,setQty] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails)
    const {error, loading, product} = productDetails
    const history = useNavigate();
     
  useEffect(() => 
  {
    dispatch(fetchProductDetail(id));
  },[dispatch, useParams]);
  
  const addToCartHandler = () =>
  {
    history(`/cart/${id}?qty=${qty}`);
  }
    
  return (
    <div>
        <Link to="/" className="btn btn-light my-3"> Go Back </Link>
        {loading ? <Loader />
        :
          error ? <Message variant='dnager'  text={error}/>
        :( <Row>
            <Col sm={12} md={6} lg={6} xl={6}>
                <Image src={product.image} alt={product.name} />
                
            </Col>

            <Col sm={12} md={3} lg={3} xl={3}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h5>{product.name}</h5>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"}/>
                    </ListGroupItem>
                </ListGroup>
            </Col>

            <Col sm={12} md={3} lg={3} xl={3}>
            <ListGroup variant='flush'>
                    <ListGroupItem>
                       <Row>
                           <Col>
                                Price:
                           </Col>
                           <Col>
                                ${product.price}
                           </Col>
                       </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                        <Row>
                            <Col>
                                Qty:
                            </Col>
                            <Col>
                                <FormControl as="select" value={qty} custom onChange={(e) => setQty(e.target.value)}>
                                    {
                                        [...Array(product.countInStock).keys()].map((x)=>
                                        (
                                            <option key={x+1} value={x+1}>{x+1}</option>        
                                        ))
                                    }
                                    
                                </FormControl>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    )}
                    
                    <ListGroupItem>
                        <Button onClick={addToCartHandler} type="button" className='btn-block' disabled={product.countInStock===0}>Add to Card</Button>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>)
  }

       
        <Row>
            <Col>
                <strong>Description: </strong> {product.description}
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen
