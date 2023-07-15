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
  valor: number;
  total: number;
}

export default function Chart() {
	const [data, setData] = useState<Product[]>([
		{
			id: 1,
      produto: 'Produto 1',
			quantidade: 1,
      valor: 30.9,
      total: 30.9
		},
		{
			id: 2,
      produto: 'Produto 2',
			quantidade: 1,
      valor: 30.9,
      total: 30.9
		},
		{
			id: 3,
      produto: 'Produto 3',
			quantidade: 2,
      valor: 30.9,
      total: 61.8
		},
		{
			id: 4,
      produto: 'Produto 4',
			quantidade: 1,
      valor: 30.9,
      total: 30.9
		},
	]);

  const [total, setTotal] = useState(0)

	
  useEffect(() => {
		// Carrega os dados do banco de dados
		fetch('http://localhost:3000/products')
			.then((response) => response.json())
			.then((products) => setData(products));

    
    const dados = data
    for (let i = 0; i < dados.length; i++) {
      setTotal(total + dados[i].total)
    }
  
  }, []);

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
							<td>{`R$${product.total
								.toFixed(2)
								.replace('.', ',')}`}</td>
						</tr>
					))}
					<tr>
						<td colSpan={2}>Total:</td>
						<td>{`R$${total.toFixed(2).replace('.', ',')}`}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}