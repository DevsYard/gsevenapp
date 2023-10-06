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

export interface IChartItem {
	produto: Product;
	unidades: number;
	valorUnitario: number;
	valorTotal: number;
}
