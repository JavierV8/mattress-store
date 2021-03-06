import React, { useReducer, useEffect } from 'react';
import useHttp from '../hooks/http';

import Product from '../components/Product';

const productsReducer = (currentProducts, action) => {
    switch (action.type) {
        case 'SET':
            return action.products;
        default:
            throw new Error('new errorrr!');
    }
};

const Colchones = () => {
    const [userProducts, dispatch] = useReducer(productsReducer, []);
    const {
        isLoading,
        error,
        responseData,
        sendRequest,
        values,
        reqIdentifer,
    } = useHttp();

    useEffect(() => {
        sendRequest(
            'http://localhost:3000/api/products/mattress',
            'GET',
            null,
            null,
            'GET_ALL_PRODUCTS'
        );
    }, []);

    useEffect(() => {
        const loadedProducts = [];
        for (const key in responseData) {
            if (Object.prototype.hasOwnProperty.call(responseData, key)) {
                loadedProducts.push({
                    key: responseData[key]._id,
                    id: responseData[key]._id,
                    name: responseData[key].name,
                    title: responseData[key].title,
                    description: responseData[key].description,
                    firmness: responseData[key].firmness,
                    breathability: responseData[key].breathability,
                    adaptability: responseData[key].adaptability,
                    price: responseData[key].price,
                    image: responseData[key].image,
                    featuredProduct: responseData[key].featuredProduct,
                    assessment: responseData[key].assessment,
                });
                dispatch({ type: 'SET', products: loadedProducts });
            }
        }
    }, [responseData, values, reqIdentifer, isLoading, error]);

    const products = [];
    userProducts.map(element => {
        return products.push(
            <Product
                id={element.id}
                name={element.name}
                title={element.title}
                description={element.description}
                firmness={element.firmness}
                breathability={element.breathability}
                adaptability={element.adaptability}
                price={element.price}
                image={element.image}
                featuredProduct={element.featuredProduct}
                assessment={element.assessment}
            />
        );
    });

    return (
        <div className="Mattress-container">
            <h1>Mattress</h1>
            <div className="Mattress-order">
                <p>Order by</p>
                <select className="Mattress-order-selector">
                    <option value="volvo">Lowest to highest</option>
                    <option value="saab">highest to Lowest</option>
                </select>
            </div>
            {products}
        </div>
    );
};

export default Colchones;
