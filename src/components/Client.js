import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import icon1 from '../image/icons/icon1.png';
import icon2 from '../image/icons/icon2.png';
import icon3 from '../image/icons/icon3.png';

const Client = () => {
	return (
		<section className='client'>
			<div className='box-text mr-50'>
				<div className='line'></div>
				<h3 className='text-heading'>Every Client Matters</h3>
				<p className='text-small'>
					Problems trying to resolve the conflict between
					<br />
					the two major realms of Classical physics:
					<br />
					Newtonian mechanics
				</p>
				<div className='box-learn-more'>
					<p className='text-learn-more'>Learn More</p>
					<FiChevronRight className='icon' />
				</div>
			</div>
			<div className='container-cards'>
				<div className='card'>
					<div className='circle'>
						<div className='circle-box'>
							<img src={icon1} alt='ads' />
						</div>
					</div>
					<h3 className='card-heading'>Training Courses</h3>
					<div className='card-line'></div>
					<p className='card-text'>
						The gradual accumulation of information about
					</p>
				</div>
				<div className='card'>
					<div className='circle'>
						<div className='circle-box'>
							<img src={icon2} alt='ads' />
						</div>
					</div>
					<h3 className='card-heading'>Lifetime access</h3>
					<div className='card-line'></div>
					<p className='card-text'>
						The gradual accumulation of information about
					</p>
				</div>
			</div>
			<div className='container-cards'>
				<div className='card'>
					<div className='circle'>
						<div className='circle-box'>
							<img src={icon3} alt='ads' />
						</div>
					</div>
					<h3 className='card-heading'>Lifetime access</h3>
					<div className='card-line'></div>
					<p className='card-text'>
						The gradual accumulation of information about
					</p>
				</div>
			</div>
		</section>
	);
};

export default Client;
