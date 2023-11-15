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
			<img src={heroImage} alt='hero heading' class='hero-image' />
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
			<div className='box-hero-text'>
				<p>For Better Future</p>
				<h1>Best Learning Opportunities</h1>
				<p>Our goal is to make online education work for everyone</p>
				<button>Join Us</button>
			</div>
		</header>
	);
};

export default Header;
