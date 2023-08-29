'use client'
import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'
import { string } from 'yup';
import { useEffect, useState } from 'react';
import requests from '../../validations/axios.module';

interface Product {
	id: number;
	produto: string;
	quantidade: number;
	valor: number;
	total: number;
}

export default function Chart() {
	const [data, setData] = useState<Product[]>([]);

	const [total, setTotal] = useState(0);

	useEffect(() => {
		// Carrega os dados do banco de dados
		const request = requests();
		request.get('/products').then((response) => setData(response.data));

		const dados = data;
		for (let i = 0; i < dados.length; i++) {
			setTotal(total + dados[i].total);
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
						<tr key={product.id}>
							<td>{product.produto}</td>
							<td className={styles.quantTable}>{product.quantidade}</td>
							<td>
								{product.total !== undefined
									? `R$${product.total.toFixed(2).replace('.', ',')}`
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