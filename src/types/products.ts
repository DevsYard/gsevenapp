export type ExtendedProduct = Product & ProductKey;

type ProductKey = {
	key: string;
};

export interface Product {
	id: string;
	productName: string;
	description?: string;
	productPrice: number;
	promo: boolean;
	promoPrice: number;
	condition: number;
	img: string;
}

export interface ICartItem {
	produto: Product;
	unidades: number;
	valorUnitario: number;
	valorTotal: number;
}
