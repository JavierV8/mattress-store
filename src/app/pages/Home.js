import React, { useReducer, useEffect } from 'react';
import useHttp from '../hooks/http';
import Carrousel from '../components/Carrousel';

const productsReducer = (currentProducts, action) => {
    switch (action.type) {
        case 'SET':
            return action.products;
        default:
            throw new Error('new errorrr!');
    }
};

const Home = () => {
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
            'http://localhost:3000/api/products/featuredProducts',
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

    return (
        <div className="Home-container">
            <h1>Week offer</h1>
            <Carrousel products={userProducts} />
        </div>
    );
};

export default Home;
