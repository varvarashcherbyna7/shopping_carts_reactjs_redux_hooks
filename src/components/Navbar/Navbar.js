import React, {useState, useEffect} from "react";
import "./Navbar.sass";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

const Navbar = ({carts}) => {
    const [cartCount, setCardCount] = useState(0)

    useEffect(() => {
        let count = 0;
        carts.forEach(item => {
            count += item.qty
        })
        setCardCount(count);
    }, [carts, cartCount])

    return (
        <nav className="nav">
            <div className="navItem">
                <div className="item">
                    <NavLink to="/">Shopping Cart</NavLink>
                </div>
                <div className="item">
                    <div><NavLink to="/cart">Basket</NavLink></div>
                    <div><i className="fas fa-shopping-basket"/></div>
                    <div>{cartCount}</div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        carts: state.shop.carts
    }
}
export default connect(mapStateToProps)(Navbar);
