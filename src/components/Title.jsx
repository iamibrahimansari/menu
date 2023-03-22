import {useState} from 'react';

const Title = ({categories, onClick}) =>{
    const [isShow, setIsShow] = useState(false);
    const handleIsShow = () =>{
        setIsShow(!isShow);
    }
    return(
        <>
            <div className="header__title">
                <h1 className="header__h1">Our Menu</h1>
                <div className="header__line"></div>
            </div>
            <div className="header__menu-sign" onClick={handleIsShow}>
                {
                    isShow ?
                    <div className="header__cross">
                        <span></span>
                        <span></span>
                    </div> :
                    <div class="header__normal">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }

            </div>
            <div className="header__categories">
                {   
                    isShow ?
                    null :
                    categories.map(category => {
                        return(
                            <button 
                                onClick={() => onClick(category)} 
                                type="button" 
                                className="header__category" 
                                key={category}>
                                    {category}
                            </button>
                        )
                    }) 
                }
            </div>
        </>
    )
}

export default Title;