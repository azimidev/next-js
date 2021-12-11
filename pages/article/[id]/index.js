import { useRouter } from 'next/router'
import Link from 'next/link'

const article = ({ article }) => {
	// const router = useRouter();
	// const { id } = router.query;
	return (
		<>
			<div>
				<h1>{article.title}</h1>
				<p>{article.body}</p>
			</div>
			<Link href="/">Go Back</Link>
		</>
	)
}

export const getServerSideProps = async context => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
	const article = await response.json();

	return {
		props: { article }
	}
}

export default article;
