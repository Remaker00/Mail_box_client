import React from 'react';
import ItemForm from './ItemForm';
import classes from './Item.module.css';
import { Link } from 'react-router-dom';

export const ITEMS_DATA = [
  {
    id: 'item1',
    imageSrc: require('../FrontItems/Product_Images/cam1.png'),
    name: 'NIKON Coolpix P960',
    description: [
      'High-resolution image sensor',
      'Zoom lens with optical image stabilization',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth for easy sharing',
    ],
    price: 199.99,
  },
  {
    id: 'item2',
    imageSrc: require('../FrontItems/Product_Images/game.png'),
    name: 'Game',
    description: [
      'High-resolution image sensor',
      'Zoom lens with optical image stabilization',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth for easy sharing',
    ],
    price: 299.99,
  },
  {
    id: 'item3',
    imageSrc: require('../FrontItems/Product_Images/tv2.png'),
    name: 'Television2',
    description: [
      'High-resolution image sensor',
      'Zoom lens with optical image stabilization',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth for easy sharing',
    ],
    price: 499.99,
  },
  {
    id: 'item4',
    imageSrc: require('../FrontItems/Product_Images/ref1.png'),
    name: 'Refrigertor',
    description: [
      'High-resolution image sensor',
      'Zoom lens with optical image stabilization',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth for easy sharing',
    ],
    price: 499.99,
  },
  {
    id: 'item5',
    imageSrc: require('../FrontItems/Product_Images/laptop.png'),
    name: 'Laptop',
    description: [
      'High-resolution image sensor',
      'Zoom lens with optical image stabilization',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth for easy sharing',
    ],
    price: 499.99,
  },
  {
    id: 'item6',
    imageSrc: require('../FrontItems/Product_Images/phone1.png'),
    name: 'Phone1',
    description: [
      'High-resolution image sensor',
      'Zoom lens with optical image stabilization',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth for easy sharing',
    ],
    price: 499.99,
  },
  {
    id: 'item7',
    imageSrc: require('../FrontItems/Product_Images/tv1.png'),
    name: 'Television1',
    description: [
      'High-resolution image sensor',
      'Zoom lens with optical image stabilization',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth for easy sharing',
    ],
    price: 499.99,
  },
  {
    id: 'item8',
    imageSrc: require('../FrontItems/Product_Images/watch1.png'),
    name: 'Watch',
    description: [
      'High-resolution image sensor',
      'Zoom lens with optical image stabilization',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth for easy sharing',
    ],
    price: 499.99,
  },
  {
    id: 'item9',
    imageSrc: require('../FrontItems/Product_Images/home1.png'),
    name: 'Home',
    description: [
      'High-resolution image sensor',
      'Zoom lens with optical image stabilization',
      '4K video recording',
      'Built-in Wi-Fi and Bluetooth for easy sharing',
    ],
    price: 499.99,
  },
];

const Items = ({ onAddToCart }) => {

  const itemsList = ITEMS_DATA.map((item) => (
    <div className={classes['itms']} key={item.id}>
      <Link to={`/ProductReview/${item.id}`}>Read Review</Link>

      <ItemForm
        imageSrc={item.imageSrc}
        name={item.name}
        description={item.description}
        price={`Price: $${item.price}`}
        onAddToCart={() => onAddToCart(item)}
      />

      
    </div>
  ))

  return (
    <div className={classes["items-container"]}>
      {itemsList}
    </div>
  );
};

export default Items;
