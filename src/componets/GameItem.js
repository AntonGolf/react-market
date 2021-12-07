import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


export const GameItem = ({game}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.cart.basket)
    const gamers = useSelector(state => state.visible.visible)
    const navigate = useNavigate()
    
    function onAdd(){
        
        dispatch({
            type: "ADD_CART",
            payload: game
        })
        
        console.log(state)
    }
    function onPush(){
        navigate(`/app/${game.title}`)
        dispatch({
            type: "VISIBLE",
            payload: game
        })
  
    }
    return(
        <div className="game__item " >
           <div onClick={() => onPush()}
                className="game__item-cover"
                style={{ backgroundImage: `url(${game.image})` }}
            />
            <div  className="game__item-block">
                <span className="game__item-title" onClick={() => onPush()} >{game.title}</span>
                <div className="game__item-genre">
                    {game.genres.map(it => 
                        <div className="game__item-genre_it">
                            {it}
                        </div>
                    )}
                    
                </div>
            </div>
            <div className="game__item-buy">
                <div className="game__item-buy_cost">
                    
                    {game.price} Руб.
                </div>
                
                <div className="game__item-buy_buttons">
                
                    <button className="game__item-buy_button" onClick={() => onAdd()}>В корзину</button>
                </div>
            </div>
           
        </div>
    )
}