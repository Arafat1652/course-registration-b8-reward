import { useEffect } from "react"
import { useState } from "react"
import Cart from "../Cart/Cart";


const Carts = () => {
    const [carts, setCart] = useState([])
   
    useEffect(()=>{
        fetch('/public/course.json')
        .then(res => res.json())
        .then(data => setCart(data))
    },[])

    return (
      
        <div  className="grid grid-cols-3 w-full">
           {
            carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
           }
        </div>
    );
};

export default Carts;
