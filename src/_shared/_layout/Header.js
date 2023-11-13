import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../image/hero-bg.png';
const menuItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Product', path: '/shop' },
	{ name: 'Pricing', path: '/collection' },
	{ name: 'Contact', path: '/journal' },
];

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='hero-box'>
					<img src={heroImage} alt='asd' class='hero-image' />
				</div>
				<div className='hero-box-text'>
					<p className='hero-top-text mb-30'>For Better Future</p>
					<h1 className='hero-heading mb-30'>
						Best Learning <br /> Opportunities
					</h1>
					<p className='hero-bottom-text mb-30'>
						Our goal is to make online <br /> education work for everyone
					</p>
					<button>Join Us</button>
				</div>
			</div>
			<nav className='nav'>
				<div className='nav-menu'>
					<p className='nav-logo'>
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
						<Link className='nav-item ml-200 mr-30'>Login</Link>
					</p>
					<button>JOIN US</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
