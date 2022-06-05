import React, {useState, useEffect} from 'react';
import { Button, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import axios from 'axios';

function ProductScreen() {
    const {id} = useParams();

    const [product, setProduct] = useState([])
  useEffect(() => 
  {
    async function fetchProduct()
    {
      const {data} = await axios.get(`/api/v1/products/${Number(id)}`);
      setProduct(data)
    }

    fetchProduct();
  },[]);

    
  return (
    <div>
        <Link to="/" className="btn btn-light my-3"> Go Back </Link>
        <Row>
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
                    <ListGroupItem>
                        <Button type="button" className='btn-block' disabled={product.countInStock===0}>Add to Card</Button>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <strong>Description: </strong> {product.description}
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen
