import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import girlBooks from '../image/technology1.png';
import check from '../image/check.png';
import image5 from '../image/image5.png';
import image6 from '../image/image6.png';
import smile from '../image/smile.png';
import videoCard from '../image/videoCard.png';

const Courses = () => {
	return (
		<>
			<section className='courses'>
				<div className='boxs-image'>
					<img src={girlBooks} alt='girl' />

					<div className='box-img-small  box-img-small-check'>
						<img src={check} alt='check' />
					</div>
					<div className='box-img-square'>
						<img src={image6} alt='square' />
					</div>
					<div className='box-img-small box-img-small-smile'>
						<img src={smile} alt='smile' />
					</div>
					<div className='box-img'>
						<img src={image5} alt='box' />
					</div>
				</div>

				<div className='box-text'>
					<div className='line'></div>
					<h3 className='text-heading'>Most Popular Courses</h3>
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
			</section>
			<section className='courses'>
				<div className='box-text'>
					<div className='line'></div>
					<h3 className='text-heading'>Watch our Courses</h3>
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
				<div className='box-image'>
					<img src={videoCard} alt='asdasd' />
				</div>
			</section>
			<section className='courses'>
				<div className='box-text'>
					<p className='text-learn-more'>Welcone</p>
					<h3 className='text-heading'>Approdable Packages</h3>
					<p className='text-small'>
						Problems trying to resolve the conflict between
						<br />
						the two major realms of Classical physics: Newtonian mechanics
					</p>
				</div>
				<div className='box-blank'></div>
			</section>
		</>
	);
};

export default Courses;
