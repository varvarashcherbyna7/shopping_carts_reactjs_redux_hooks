import * as actionTypes from "./shopping-types";
import img1 from "../../img/image1.png";
import img2 from "../../img/image2.png";
import img3 from "../../img/image3.png";

const initialState = {
    products: [
        {
            id: 1,
            img: img1,
            title: 'Шампунь',
            description: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                ' Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            colorDefault: 'Цвет',
            colors: ['Желтый', 'Красный', 'Зеленый'],
            price: 200.0,
            capacities: [100, 200, 300],
        },
        {
            id: 2,
            img: img2,
            title: 'Шампунь',
            description: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                ' Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            colorDefault: 'Цвет',
            colors: ['Желтый', 'Красный', 'Зеленый'],
            price: 200.0,
            capacities: [100, 200, 300],
        },
        {
            id: 3,
            img: img3,
            title: 'Шампунь',
            description: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                ' Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            colorDefault: 'Цвет',
            colors: ['Желтый', 'Красный', 'Зеленый'],
            price: 200.0,
            capacities: [100, 200, 300],
        }
    ], //{id, title, descr, price, img}
    carts: [], //{id, title, descr, price, img, qty}
    currentItem: null,
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //Get the items data from the products array
            const item = state.products.find(prod => prod.id === action.payload.id)
            //Check if item is in cart already
            const inCart = state.carts.find((item) => item.id === action.payload.id ? true : false)
            return {
                ...state,
                carts: inCart
                    ? state.carts.map((item) => {
                        return item.id === action.payload.id
                            ? {...item, qty: item.qty + 1}
                            : item
                    })
                    : [...state.carts, {...item, qty: 1}],
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                carts: state.carts.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                carts: state.carts.map(item => item.id === action.payload.id
                    ? {...item, qty: +action.payload.qty}
                    : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state;
    }
}

export default shopReducer;
