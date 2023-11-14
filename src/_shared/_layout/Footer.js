import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const Footer = () => {
	return (
		<footer>
			<div className='footer-boxes'>
				<div className='footer-box'>
					<h4 className='footer-text-heading mb-10'>Company Info</h4>
					<p className='footer-text'>About Us</p>
					<p className='footer-text'>Carrier</p>
					<p className='footer-text'>We are hiring</p>
					<p className='footer-text'>Blog</p>
				</div>
				<div className='footer-box'>
					<h4 className='footer-text-heading mb-10'>Legal</h4>
					<p className='footer-text'>About Us</p>
					<p className='footer-text'>Carrier</p>
					<p className='footer-text'>We are hiring</p>
					<p className='footer-text'>Blog</p>
				</div>
				<div className='footer-box'>
					<h4 className='footer-text-heading mb-10'>Features</h4>
					<p className='footer-text'>Business Marketing</p>
					<p className='footer-text'>User Analytic</p>
					<p className='footer-text'>Live Chat</p>
					<p className='footer-text'>Unlimited Support</p>
				</div>
				<div className='footer-box'>
					<h4 className='footer-text-heading mb-10'>Resources</h4>
					<p className='footer-text'>IOS & Android</p>
					<p className='footer-text'>Watch a Demo</p>
					<p className='footer-text'>Customers</p>
					<p className='footer-text'>API</p>
				</div>
				<div className='footer-box'>
					<h4 className='footer-text-heading mb-20'>Get In Touch</h4>
					<p className='footer-text'>(480) 555-0103</p>
					<p className='footer-text'>
						4517 Washington Ave. Manchester,
						<br /> Kentucky 39495
					</p>
					<p className='footer-text'>debra.holt@example.com</p>
				</div>
			</div>
			<div className='footer-box-below'>
				<p className='footer-box-below-text'>
					Made With Love By Figmaland All Right Reserved
				</p>

				<div className='card-person-box-icons'>
					<FaFacebook className='card-peron-icon' />
					<FaInstagram className='card-peron-icon' />
					<FaTwitter className='card-peron-icon' />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
