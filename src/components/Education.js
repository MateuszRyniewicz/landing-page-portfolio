import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
const Education = () => {
	return (
		<section className='client text-center gap-10'>
			<div style={{ border: '1px solid red' }}>
				<p className='text-learn-more mb-10'>Newsletter</p>
				<h3 className='text-heading mb-10'>Get Quality Education</h3>
				<p className='text-small mb-40'>
					Problems trying to resolve the conflict between <br /> the two major
					realms of Classical physics: Newtonian mechanics
				</p>
				<div className='box-input'>
					<input className='input' placeholder='Your Email' />
					<button className='button-input'>Subscribe</button>
				</div>
			</div>
		</section>
	);
};

export default Education;