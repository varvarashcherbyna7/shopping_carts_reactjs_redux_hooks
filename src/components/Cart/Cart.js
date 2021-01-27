import React, {useState} from 'react';
import "./Cart.sass";
import {connect} from 'react-redux';
import {removeFromCart, adjustQty} from '../../redux/Shopping/shopping-actions';

const Cart = ({cartsData, removeFromCart, adjustQty}) => {

    const [value, setValue] = useState(cartsData.qty);

    const onClickHandlerMinus = () => {
        let newQty = value - 1
        if (newQty > 0) {
            setValue(newQty)
            adjustQty(cartsData.id, newQty)
        } else {
            setValue(value)
            adjustQty(cartsData.id, value)
        }
    }

    const onClickHandlerPlus = () => {
        let newQty = value + 1
            setValue(newQty)
            adjustQty(cartsData.id, newQty)
    }

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        adjustQty(cartsData.id, e.target.value)
    }

    return (
        <div className="cart">

            <div className="product">
                <img src={cartsData.img} alt={`image product${cartsData.id}`}/>
            </div>

            <div className="cartDescription">
                <div className="descriptionContainer">
                    <h2>{cartsData.title}</h2>
                    <p>{cartsData.description}</p>
                </div>

                <div className="priceColorContainer">
                    <div className="colorContainer">
                        <div className="colorArrowContainer">
                            <h5>color</h5>
                            <ul className="color">
                                {cartsData.colors.map(((color, index) => {
                                    return (
                                        <li key={index}>
                                            <div>{color}</div>
                                        </li>
                                    )
                                }))}
                            </ul>
                        </div>
                        <div className="arrowContainer">
                            <div className="arrowDown"/>
                        </div>
                    </div>
                    <div className="price">{cartsData.price} грн</div>
                </div>

                <div className="capacityContainer">
                    {cartsData.capacities.map((capacity, index) => {
                        return (
                            <div className="checkboxContainer" key={index}>
                                <input type="checkbox"
                                       id={`checkbox${cartsData.id}-${index}`}
                                       name={`checkbox${cartsData.id}-${index}`}
                                />
                                <label htmlFor={`checkbox${cartsData.id}-${index}`} className="checkbox">
                                    <span>{capacity} мл</span>
                                </label>
                            </div>
                        )
                    })}
                </div>

                <div className="countContainer">
                    <div className="countProduct">
                        <div onClick={onClickHandlerMinus}>-</div>
                        <div onChange={onChangeHandler}>{value}</div>
                        <div onClick={onClickHandlerPlus}>+</div>
                    </div>
                    <div className="btnBuy" onClick={() => removeFromCart(cartsData.id)}>удалить</div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    }
}

export default connect(null, mapDispatchToProps)(Cart);
