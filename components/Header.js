import headerStyles from '../styles/Header.module.css';

export default function Header() {
	return (
		<div>
			<h1 className={`${headerStyles.title}`}>
				<span>Parsclick</span> <span className='news'>News</span>
			</h1>
			<p className={headerStyles.description}>
				Keep up with the latest news and events from the world of web technology.
			</p>

			<style jsx>
				{`
					.news {
						color: #2ecc71;
					}
				`}
			</style>
		</div>
	)
}
