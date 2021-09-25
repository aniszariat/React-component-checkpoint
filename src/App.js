import React from 'react';
import './App.css';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
    
    return (
        <div className="view">
           <Container>
              <Row>
                   <Col> 
                      <ProfilePhoto />
                   </Col>
                   <div>
                      <FullName />
                      <Address />
                   </div>
                </Row>
            </Container>
        </div>
    );
}

export default App;





