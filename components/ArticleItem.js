import articleStyles from '../styles/article.module.css';
import Link from 'next/link';

export default function ArticleList({ article }) {
	return (
		<Link href="/article/[id]" as={`/article/${article.id}`}>
			<a className={articleStyles.card}>
				<h3>{article.title.toUpperCase()} &rarr;</h3>
				{/* <p>{article.body}</p> */}
			</a>
		</Link>
	)
}
