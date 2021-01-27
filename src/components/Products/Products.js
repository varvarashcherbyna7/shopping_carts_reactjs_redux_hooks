import React from 'react';
import "./Products.sass";
import Product from "./Product";
import { connect } from 'react-redux';

const Products = ({products}) => {
    return (
        <div className="containerProducts">
            {products.map((prod) => {
                return (
                    <Product key={prod.id} productData={prod}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Products);
