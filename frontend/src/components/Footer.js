import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return (
    <div>
      <Container>
        <Row className='text-center py-3'>
          <Col>
            Copyright &copy; E-Shop
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
