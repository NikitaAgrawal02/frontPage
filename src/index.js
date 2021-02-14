import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Profile from './Profile';

ReactDOM.render(
  <>
    <Header /> <br/>
    <Form /> <Profile /> <br/>
    <Footer />
  </>,
  document.getElementById('root')
);
