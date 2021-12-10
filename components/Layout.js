import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Contact({ children }) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				{children}
			</main>
		</div>
	)
}
