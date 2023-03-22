const MenuCard = ({img: {url, width, height}, name, price, detail}) =>{
    return(
        <div className="card">
            <div className="card__img-container">
                <img className="card__img" src={url} alt={name} width={width} height={height} />
            </div>
            <div className="card__detail">
                <div>
                    <h2 className="card__name">{name}</h2>
                    <p className="price">{price}</p>
                </div>
                <p className="card__desc">{detail}</p>
            </div>
        </div>
    )
}

export default MenuCard;