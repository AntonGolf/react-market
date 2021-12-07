import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { calkTotalPrice } from "../utilits"





function PageOrder(){

    const dispatch = useDispatch()
    function onRemove(key){
        dispatch({
            type: "CART_REMOVE",
            payload: key
        })
        
    }
    
    const orders = useSelector((state) => state.cart.basket)

    const totalP = calkTotalPrice(orders)

 

    return(
        <div className="orders">
           <div className="orders__left">
               {
                   orders.map(order => 
                    <div className="orders__item">
                        <div className="orders__item_bl">
                            <div
                                className="orders__item-img"
                                style={{ backgroundImage: `url(${order.image})`}}
                            />
                            <h3>{order.title}</h3>
                        </div>
                        <div className="orders__item_bls">
                            <b>{order.price}</b>
                            <button onClick={() => onRemove(order.id)}>&times;</button>
                        </div>
                        

                    </div>
                   )
               }
                

               
           </div>
           <div className="orders__right">
               {orders.length} товара на сумму {totalP} Руб.
           </div>
        </div>
        
    )

}

export default PageOrder