import React from 'react'
import products from './products.json'
import {useSelector,useDispatch} from 'react-redux'
const Home = () => {

     const state=useSelector((state)=>state)
     console.log(state);
     const dispatch=useDispatch()
    const handlecart=(prod)=>{
        console.log(prod);
        var temp=[]
        if (state.Cartidems?.length){
          temp=[...state.Cartidems,prod]
        }
        else{
          temp=[prod]
        }
        dispatch({
          type:"addToCart",
          payLoad:{Cartidems:temp}
        })
    }
  return (
    <div>
    {
        products.map((products,index)=>(
            <div key={index}><p>{products.name}</p>
            <button onClick={()=>handlecart(products)}>addcart</button>
            </div>
        ))
    }
    </div>
  )
}

export default Home