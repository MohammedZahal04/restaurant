import React, { useState,useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Restaurant from './Restaurant';

function Home() {
    const[hotels,setHotels] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            await fetch('./restaurants.json')
            .then((res) => res.json())
            .then((data) => setHotels(data.restaurants))
        }
        fetchData();
    },[]);
    console.log(hotels);
    return (
       <>
       {hotels ?(
           <Row>
               {hotels.map(item => ( 
               <Col  sm={12} md={8} lg={6} xl={3}>
                   <Restaurant item={item}/>
                   </Col>
                   ))}
           </Row>
       ):null}
       </>
    )
}

export default Home
