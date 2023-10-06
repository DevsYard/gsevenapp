'use client'
import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'
import { string } from 'yup';
import { useEffect, useState } from 'react';
import requests from '../../validations/axios.module';
import { IChartItem } from '@/types/products';

export default function Chart() {
	const [data, setData] = useState<IChartItem[]>([]);

	const [total, setTotal] = useState(0);

	useEffect(() => {
		const request = requests();
		request.get('/chart/:id').then((response) => setData(response.data));

		const dados = data;
		for (let i = 0; i < dados.length; i++) {
			setTotal(total + dados[i].valorTotal);
		}
	}, [data, total]);

	return (
		<div className={styles.chartContainer}>
			<table>
				<thead>
					<tr>
						<th colSpan={3}>Produtos no carrinho</th>
					</tr>
					<tr>
						<th>Produto</th>
						<th>Quantidade</th>
						<th>Valor</th>
					</tr>
				</thead>
				<tbody>
					{data.map((product) => (
						<tr key={product.produto.id}>
							<td>{product.produto.productName}</td>
							<td className={styles.quantTable}>{product.unidades}</td>
							<td>
								{product.valorTotal !== undefined
									? `R$${product.valorTotal.toFixed(2).replace('.', ',')}`
									: '--	'}
							</td>
						</tr>
					))}
					<tr>
						<td colSpan={2}>Total:</td>
						<td>
							{total !== undefined
								? `R$${total.toFixed(2).replace('.', ',')}`
								: 'N/A'}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}