import React from 'react';

import './Content.css';
import Form from '../Form/Form.react';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';


const Content = () => {

    return (
        <div className='content_wrapper'>
            {/* <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                     <img
                       alt=""
                       src="/logo2.svg"
                       width="30"
                       height="30"
                       className="d-inline-block align-top"
                       marginLeft= "50%"
                     />
                     {' RepoFinder'}
                 </Navbar.Brand>
                </Navbar> */}
                <h1 className="justify-content-center bg-dark">
    <Badge variant="secondary">RepoFinder</Badge>
  </h1>
  <h2 className="justify-content-center bg-dark">
    Search it. Find it. Clone it.
  </h2>
                <Form></Form>
            


        </div>
    );

}

export default Content;