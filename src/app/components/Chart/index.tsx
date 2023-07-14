'use client'
import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'
import { string } from 'yup';
import { useEffect, useState } from 'react';

interface Product {
	id: number;
	produto: string;
	quantidade: number;
}

export default function Chart() {
	const [data, setData] = useState<Product[]>([
		{
			id: 1,
      produto: 'Produto 1',
			quantidade: 1,
		},
		{
			id: 2,
      produto: 'Produto 2',
			quantidade: 1,
		},
		{
			id: 3,
      produto: 'Produto 3',
			quantidade: 2,
		},
		{
			id: 4,
      produto: 'Produto 4',
			quantidade: 1,
		},
	]);

	useEffect(() => {
		// Carrega os dados do banco de dados
		fetch('http://localhost:3000/products')
			.then((response) => response.json())
			.then((products) => setData(products));
	}, []);

	return (
		<div className={styles.chartContainer}>
			<table>
				<thead>
					<tr>
						<th colSpan={2}>Produtos no carrinho</th>
					</tr>
					<tr>
						<th>Produto</th>
						<th>Quantidade</th>
					</tr>
				</thead>
				<tbody>
					{data.map((product) => (
						<tr key={product.id}>
							<td>{product.produto}</td>
							<td className={styles.quantTable}>{product.quantidade}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}