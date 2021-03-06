import React from 'react';
import PropTypes from 'prop-types';
import ProductCharacteristics from './ProductCharacteristics';

const ProductInfo = props => {
    const { productData } = props;
    const {
        name,
        image,
        firmness,
        breathability,
        adaptability,
        title,
        description,
        price,
    } = productData;

    return (
        <div className="productInfo-container">
            <h1 className="product-name">{name}</h1>
            <div className="product-stars">
                {' '}
                &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>

            <div className="productInfo-body">
                <div className="productInfo-left">
                    <div className="productInfo-image">
                        <img
                            src={require(`../static/images/${image}`)}
                            alt={name}
                        />
                    </div>
                    <div className="productInfo-description">
                        <h1>Description</h1>
                        <ProductCharacteristics
                            firmness={firmness}
                            breathability={breathability}
                            adaptability={adaptability}
                        />
                        <h4 className="product-title">{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="productInfo-right">
                    <p className="productInfo-right-price">{price} €</p>
                    <div>
                        <div className="productInfo-right-selectorBox">
                            <p className="productInfo-right-chosseTitle">
                                Chosse size:{' '}
                            </p>
                            <select className="productInfo-right-selector">
                                <option value="volvo">80X180</option>
                                <option value="saab">80X190</option>
                                <option value="opel">80X200</option>
                                <option value="audi">90X180</option>
                            </select>
                        </div>
                    </div>
                    <button
                        className="productInfo-purchaseBox-addButton"
                        type="button"
                    >
                        ADD PRODUCT
                    </button>
                </div>
            </div>
        </div>
    );
};

ProductInfo.propTypes = {
    productData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        firmness: PropTypes.number.isRequired,
        breathability: PropTypes.number.isRequired,
        adaptability: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductInfo;
