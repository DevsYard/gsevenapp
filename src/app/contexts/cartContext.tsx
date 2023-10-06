import { createContext } from 'react';
import { ICartItem } from '@/types/products';

const cart: ICartItem[] = [
	{
		produto: {
			id: '',
			productName: '',
			description: '',
			productPrice: 0,
			promo: false,
			promoPrice: 0,
			condition: 0,
			img: '',
		},
		unidades: 0,
		valorUnitario: 0,
		valorTotal: 0,
	},
];

const CartContext = createContext<ICartItem[]>(cart);

export default CartContext;
