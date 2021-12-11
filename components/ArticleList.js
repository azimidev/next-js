import articleStyles from '../styles/article.module.css';
import ArticleItem from './ArticleItem';

export default function ArticleList({ articles }) {
	return (
		<div className={articleStyles.grid}>
			{articles.map(article => (
				<ArticleItem key={article.id} article={article} />
			))}
		</div>
	)
}
