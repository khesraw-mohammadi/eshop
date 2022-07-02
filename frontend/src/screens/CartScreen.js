import React, {useEffect} from 'react'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Col, FormControl, Image, ListGroup, Row } from 'react-bootstrap'
import Message from '../components/Message'
import { Link } from 'react-router-dom'


function CartScreen() {
  const {id} = useParams()
  const qty = location.search ? Number(location.search.split("=")[1]) : 1
  const dispatch = useDispatch()
  
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const history = useNavigate();
 
  useEffect(() => {
    if(Number(id))
    {
      dispatch(addToCart(Number(id), qty))
    }
  },[dispatch, Number(id), qty])

  const checkoutHandler = () =>
  {
    history(`/login?redirect=shipping`);
  }

  const removeFromCartHandler = (id)=>
  {
    dispatch(removeFromCart(id))
  }

  return (
    <Row>
        <Col md={8}>
          <h1>SHOPPING CART</h1>
            {cartItems.length === 0 ? (
                <Message variant='info' text="Your cart is empty!" />
            ):(

              <ListGroup>
                  {cartItems.map(item => (
                    <ListGroup.Item key={item.product}>
                        <Row>
                          <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded/>
                          </Col>
                          <Col md={3}>
                              <Link to={`/product/${item.product}`}>{item.name}</Link>
                          </Col>
                          <Col md={2}>
                            ${item.price}
                          </Col>
                          <Col>
                              <FormControl 
                              as="select" 
                              value={item.qty} 
                               onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                    {
                                        [...Array(item.countInStock).keys()].map((x)=>
                                        (
                                            <option key={x+1} value={x+1}>{x+1}</option>        
                                        ))
                                    }
                                    
                              </FormControl>
                          </Col>
                          <Col className=''>
                                    <Button type='button'
                                     variant='light'
                                     onClick={() => removeFromCartHandler(item.product)}
                                     >
                                      <i className='fas fa-trash text-danger'></i>
                                    </Button>
                          </Col>
                        </Row>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            )}
        </Col>
        <Col md={4}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <h2>Subtotal ({cartItems.reduce(
                    (acc, item) => acc + Number(item.qty),0
                  )}) Items</h2>
                   ${cartItems.reduce(
                    (acc, item) => acc + Number(item.qty) * Number(item.price),0
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button type='button'
                   className='btn-block'
                   disabled={cartItems.length === 0}
                   onClick={checkoutHandler}
                   >Proceed To Checkout</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
        </Col>
    </Row>
  )
}

export default CartScreen
