import React, {useState, useEffect} from 'react';
import "./Cart.sass";
import Cart from "./Cart";
import { connect } from 'react-redux';

const Carts = ({carts}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        let price = 0;
        let items = 0;

        carts.forEach(item => {
            items += item.qty;
            price += item.qty * item.price;
        });
        setTotalPrice(price);
        setTotalItems(items)
    },[carts, totalPrice, setTotalPrice, totalItems, setTotalItems])
    return (
        <div className="containerCarts">
            <div className="carts">
                {carts.map((cart) => {
                    return (
                        <Cart key={cart.id} cartsData={cart}/>
                    )
                })}
            </div>

            <div className="totalCart">
                <div className="totalCounts">Общее количество: {totalItems}</div>
                <div className="totalPrice">Общая сумма: {totalPrice} грн</div>
                <div className="buyBtn">Оформить заказ</div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        carts: state.shop.carts
    }
}

export default connect(mapStateToProps)(Carts);
