import React from 'react';
import { useParams } from 'react-router-dom';
import { ITEMS_DATA } from '../FrontItems/Items'
import './ProductReview.css'
import { Link } from 'react-router-dom';

const ProductReview = () => {
  const { itemId } = useParams();

  const selectedProduct = ITEMS_DATA.find(item => item.id === itemId);

  const randomReviews = [
    {
      id: 1,
      rating: 4.5,
      comment: 'Great product! I love it!',
      author: 'John Doe',
    },
    {
      id: 2,
      rating: 3.0,
      comment: 'Good product, but could be better.',
      author: 'Jane Smith',
    },
  ];

  return (
    <div>
      <div className="product-review-image">
        <img src={selectedProduct.imageSrc} alt={selectedProduct.name}/>
        <button><Link to="/productform">Back</Link></button>
      </div>
      <div className="product-review-container">
        {selectedProduct && (
          <>
            <h1 className="product-review-title">{selectedProduct.name} Review</h1>
            <p className="product-review-description">Description: {selectedProduct.description}</p>
            <p className="product-review-price">Price: ${selectedProduct.price}</p>
          </>
        )}

        <h2 className="customer-reviews-title">Customer Reviews</h2>
        <div>
          {randomReviews.map((review) => (
            <div key={review.id} className="customer-review">
              <p className="customer-review-rating">Rating: {review.rating}</p>
              <p className="customer-review-comment">Comment: {review.comment}</p>
              <p className="customer-review-author">Author: {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
