import { useContext } from 'react';
import { ProductContext } from '../../context/shop_data/shop_data.context';

import CartItem from '../cart-item/cart-item.component';
import './cart-items.styles.css';

const CartItems = () => {
	const { products } = useContext(ProductContext);
	return (
		<div className='cart-items-container'>
			{products.map((item) => {
				return (
					<CartItem
						key={item.id}
						name={item.name}
						imageUrl={item.imageUrl}
						price={item.price}
					/>
				);
			})}
		</div>
	);
};

export default CartItems;
