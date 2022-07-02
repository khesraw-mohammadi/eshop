import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <main>
        <Container className='py-3'>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart/" element={<CartScreen />} />
          </Routes>
        </Container>
        </main>
        <Footer/>
      </Router>
    );
  }
}

export default App;
