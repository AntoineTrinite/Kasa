import React from 'react';
import Message404 from '../components/message404';
import Header from '../components/header';
import Footer from '../components/footer.js';
import '../styles/error404.css'

const Error404 = () => {
  return (
    <>
     <Header />
     <Message404 />
     <Footer />
    </>
  );
};

export default Error404;