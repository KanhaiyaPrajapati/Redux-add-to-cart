import React, { useEffect, useState } from 'react'
const  Cardlisting = ({cart}) => {
    const [CART, setCART] = useState([])
    const [name, setname] = useState(JSON.parse(localStorage.getItem('obj')))

useEffect(() => {
        setCART(cart)
}, [cart])


useEffect(() => {
  setname(JSON.parse(localStorage.getItem('obj')))
},[])

// useEffect(() => {
//   const storedCart = JSON.parse(localStorage.getItem('cart'));
//   setCART(storedCart || cart);
// }, [cart]);

// useEffect(() => {
//   localStorage.setItem('cart', JSON.stringify(CART));
// }, [CART]);

// const cleardata = () =>{
//   localStorage.clear();

// }

  return (
    <>
      <h3>Welcome, {name?.fname} </h3>
        {
            CART?.map((x,i)=>{
            return <div className='mt-2 px-3 py-3' style={{border:'2px solid black'}} key={i}>
                <h3>{x.id}</h3>
                <img src={x.image} alt="" width={100} height={70} />
                <h4>{x.title}</h4>
                <button className='btn btn-warning'
                  onClick={()=>{
                    const _CART = CART.map((item, index) => {
                        return i === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                    })
                    setCART(_CART)
                  }}  
                > - </button>
                <span className='me-3 ms-3 fs-3'>{x.quantity}</span>
                <button className='btn btn-warning'
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                        return i === index ? { ...item, quantity: item.quantity + 1 } : item
                    })
                    setCART(_CART)
                }}
                
            > + </button>
                <h4 style={{color:'red',marginTop:'10px'}}> Price:-{x.price * x.quantity} $ </h4>
            </div>    
            })
        }

        <h1 className='fs-2 text-danger px-3 py-3'  style={{textAlign:'right',border:'1px solid black'}}> Total = 
            {
               CART?.map(x => x.price * x.quantity).reduce((total ,value) => total + value , 0).toFixed(2) 
            } $
        </h1>
    </>
  )
}

export default Cardlisting