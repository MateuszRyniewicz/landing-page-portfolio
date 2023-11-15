import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../image/bg/hero-bg.png';
const menuItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Product', path: '/shop' },
	{ name: 'Pricing', path: '/collection' },
	{ name: 'Contact', path: '/journal' },
];

const Header = () => {
	return (
		<header className='header'>
			<img src={heroImage} alt='asd' class='hero-image' />
			<nav className='nav'>
				<p className='nav-logo'>BrandName</p>
				<ul className='nav-list'>
					{menuItems.map((item, i) => (
						<li className='nav-item' key={i}>
							<Link to={item.path}>{item.name}</Link>
						</li>
					))}
				</ul>
				<div className='nav-box-login'>
					<p className='nav-login'>Login</p>
					<button>JOIN US</button>
				</div>
			</nav>
			<nav className='nav-mobile'>
				<p className='nav-logo'>BrandName</p>
				<ul className='nav-list'>
					{menuItems.map((item, i) => (
						<li className='nav-item' key={i}>
							<Link to={item.path}>{item.name}</Link>
						</li>
					))}
				</ul>
				<p className='nav-login'>Login</p>
				<button>JOIN US</button>
			</nav>
		</header>
	);
};

export default Header;

/* <nav className='nav nav-mobile'>
	<div className='nav-menu'>
		<p className='nav-logo mr-60'>
			<Link>BrandName</Link>
		</p>
		{menuItems.map((item, index) => (
			<li key={index}>
				<Link className='nav-item' to={item.path}>
					{item.name}
				</Link>
			</li>
		))}
		<p>
			<Link className='nav-item'>Login</Link>
		</p>
		<button>JOIN US</button>
	</div>
</nav>; */
