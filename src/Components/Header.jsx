import React from 'react'
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header({handleShow,count}) {
  return (
    <>
        <div className ='d-flex justify-content-between header' style={{flexWrap:'wrap'}} > 
            <div className='py-3 py-3 mx-5'>
              <Link to='/Product'><h1 onClick={()=>handleShow(false)} style={{cursor:'pointer',color:'white'}}>Shopping Cart</h1></Link>
            </div>

            <div className='py-3 px-4 mx-5 pb-3'>
              <span className='py-3 py-4 mx-3 fs-3 ms-3'>
             <Link to='/Login' className='text-white'>Login</Link>  
            </span>

            <span className='py-3 py-4  fs-3 ms-2'>
             <Link to='/SignUp' className='text-white'>Sign Up</Link>  
            </span>
            
            <span className=' py-4 px-4 ' style={{fontSize:'30px',cursor:'pointer'}} onClick={()=>handleShow(true)}>
              <Link to='/cardlisting' className='text-white ms-2'>Cart <AddShoppingCartIcon/></Link>   
                <sup className='ms-2 text-white'>{ count }</sup>
            </span>

          </div>
        </div>
    </>
  )
}
export default Header;