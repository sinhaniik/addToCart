import Button from '../button/button.component';
import './cart-item.styles.css';

const CartItem = ({ name, price, imageUrl }) => {
	return (
		<div className='cart-item-container'>
			<img src={imageUrl} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button className='button' />
		</div>
	);
};

export default CartItem;
