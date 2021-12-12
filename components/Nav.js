import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className={navStyles.nav}>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	)
}
