import axios from 'axios';
import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

function Product({arr , setarr, addtocart}) {

    useEffect(() => {
      getapi ()
    }, [])

    const getapi = () => {
        axios.get("https://fakestoreapi.com/products").then(async (res) => {
            console.log(res.data);
            setarr([...res.data]);
          }).catch((err) => {
            console.log(err);
          });
      };
  return(
    <>
        <div className='d-flex jusify-content-between px-5 py-5 mt-5 my-3 main-div' style={{flexWrap:'wrap'}} >
        {
                arr?.map((x,i)=>{
                    return<div className='pt-3 py-3 px-5' key={i} style={{width:'23%',margin:'9px'}}>
                <Card style={{ width: '22rem',height:'450px' }}>
                    <Card.Text><h4 className='ms-2'>{x.id}</h4></Card.Text>
                    <Card.Img variant="top" src={x.image} width={200} height={100} style={{objectFit:'contain'}} className='px-1 py-1 mt-3' />
                    <Card.Body>
                      <Card.Title>{x.title}</Card.Title>
                      <Card.Title>Category : {x.category}</Card.Title>
                      <Card.Text>Price :- {x.price} $</Card.Text>
                      <Card.Text>Desc :- Shopping Cart{x.desc}</Card.Text>
                      <Card.Text>Rating :-
                        <StarPurple500Icon className='text-warning'/>
                        <StarPurple500Icon className='text-warning'/>
                        <StarPurple500Icon className='text-warning'/>
                      </Card.Text>
                      <div className='text-center'>
                        <Button variant="dark" onClick={()=>addtocart(x)}>Add To Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                 </div>
                })
            }
        </div>
    </>
  )
}

export default Product;