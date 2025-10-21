import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // 🧠 State to track which products are added to cart
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                }
            ]
        }
    ];

const handleAddToCart = (plant) => {
  dispatch(addItem(plant));
  setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
};
const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    return (
        <div className="product-grid">
  {plantsArray.map((categoryObj) =>
    categoryObj.plants.map((plant) => (
      <div key={plant.name} className="product-card">
        <img src={plant.image} alt={plant.name} />
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <p>Cost: {plant.cost}</p>
        <button
          disabled={addedToCart[plant.name]}
          onClick={() => handleAddToCart(plant)}
        >
          {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    ))
  )}
</div>
    );
}

export default ProductList;