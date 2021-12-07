import { useSelector } from "react-redux"





function PageItem(){
    
    const gamers = useSelector(state => state.visible.visible)

    return(
        
        <div className="game-page">
            <h1 className="game-page__title">{gamers.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe width="100%" height="400px" 
                        src={gamers.video}
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    </iframe>
                </div>
                <div className="game-page__right">
                    <div className="game-cover" style={{ backgroundImage : `url(${gamers.image})`}}/>
                    <p>{gamers.description}</p>
                    <p className="secondary-text">Популярные метки для этого продукта:</p>
                        {gamers.genres.map(item => 
                            <span className="game-genre">{item}</span> 
                        )}
                        <div className="game-page__buy-game">
                            <div className="game-buy">
                                <span className="game-buy__price">{gamers.price}</span>
                                <button className="btn btn--primary btn--small">В Корзину</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>  

    ) 
}

export default PageItem