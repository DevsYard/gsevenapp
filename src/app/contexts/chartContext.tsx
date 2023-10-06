import { createContext } from 'react';
import { IChartItem } from '@/types/logged';

const chart: IChartItem[] = [
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

const ChartContext = createContext<IChartItem[]>(chart);

export default ChartContext;
