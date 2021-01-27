import React from 'react';
import "./Products.sass";
import libraIcon from "../../img/Vector.png";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {addToCart} from "../../redux/Shopping/shopping-actions";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";

const Product = ({productData, addToCart}) => {

    return (
        <div className="containerProduct">
            <div className="product">
                <div className="btnNew">
                    <div>new</div>
                </div>
                <div className="imgContainer">

                        <TransformWrapper
                            defaultScale={1}
                            defaultPositionX={100}
                            defaultPositionY={200}
                        >
                            <TransformComponent>
                                <img src={productData.img}
                                     alt={`image product${productData.id}`}
                                     style={{width: "100%"}}
                                />
                            </TransformComponent>
                        </TransformWrapper>

                </div>
                <div className="btnIcon">
                    <div>
                        <NavLink to="/"><img src={libraIcon} alt="libraIcon"/></NavLink>
                    </div>
                </div>
            </div>
            <div className="descriptionContainer">
                <h2>{productData.title}</h2>
                <p>{productData.description}</p>
            </div>

            <div className="priceColorContainer">

                <div className="colorContainer"

                >
                    <div className="colorArrowContainer">
                        <h5>{productData.colorDefault}</h5>
                        <ul className="color">
                            {productData.colors.map(((color, index) => {
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
                <div className="price">{productData.price} грн</div>
            </div>

            <div className="capacityContainer" >
                {productData.capacities.map((capacity, index) => {
                    return (
                        <div className="checkboxContainer" key={index}>
                            <input type="checkbox"
                                   id={`checkbox${productData.id}-${index}`}
                                   name={`checkbox${productData.id}-${index}`}
                            />
                            <label htmlFor={`checkbox${productData.id}-${index}`} className="checkbox">
                                <span>{capacity} мл</span>
                            </label>
                        </div>
                    )
                })}
            </div>

            <div className="countContainer">
                {/*<div className="countProduct">*/}
                {/*    <div onClick={onClickHandlerMinus}>-</div>*/}
                {/*    <div onChange={onChangeHandler}>{qty}</div>*/}
                {/*    <div onClick={ onClickHandlerPlus }>+</div>*/}
                {/*</div>*/}
                <div className="btnBuy" onClick={() => {
                    addToCart(productData.id)
                }}>купить</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(null, mapDispatchToProps)(Product);
