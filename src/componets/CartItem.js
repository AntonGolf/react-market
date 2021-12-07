import { useDispatch } from "react-redux"


export const CartItem = ({title,id,cost}) => {
    const dispatch = useDispatch()
    function onRemove(key){
        dispatch({
            type: "CART_REMOVE",
            payload: key
        })
        
    }
    return(
        <div key={id} className="header__basket-item">
            <span>{title}</span>
            <div className="header__basket-item_att">
                <b> {cost}</b>
                 <button onClick={() => onRemove(id)}>&times;</button>
            </div>
            
        </div>
                        
    )
}