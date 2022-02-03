import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Restaurant({item}) {
    console.log(item);
    return (
        <>
       {
       item ?(  
        <Link style={{textDecoration:'none'}} to={`restaurants/${item.id}`}>
     
        <Card  style= {{width :'18rem'}}>
        <Card.Img src= {item.photograph} className="p-3"varient="top"/>
        <Card.Body>
          <Card.Title as="div">
                <h4>{item.name}</h4> 

            </Card.Title> 
            <Card.Text as="div">
     <p><strong>Cuisine:</strong>{item.cuisine_type}</p>
     <Card.Text as="div">
         <p>{item.neighborhood}</p>
     </Card.Text>
            </Card.Text> 
        </Card.Body>

    </Card>
    </Link>
       ):null}
       
       
       </>
    )
}

export default Restaurant
