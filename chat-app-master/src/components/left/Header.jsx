import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import userImg from "../../ishikaPic.jpg";
import NewConversation from '../left/NewConversation';
import AddConversation from './AddConversation';

const Header = () => {
  const [showConver,setShowConver] = useState(false);

  const handleClick = ()=>{
       setShowConver(true);
  }
  return (
    // this is left header in which we have user info and calling to newConversation component 
        <Row className='p-4' style={{backgroundColor:"#FF4B91"}}>
            <Col sm={2}> 
            <Image src={userImg} roundedCircle width="55px" height="55px"/>
            </Col>
            <Col sm={3}>
                <h2>Ishika</h2>
            </Col>
            <NewConversation handleClick={handleClick}/>
            {showConver && <AddConversation setShowConver={setShowConver}/>}
        </Row>
  )
}

export default Header
