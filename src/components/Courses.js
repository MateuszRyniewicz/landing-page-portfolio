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
					<img src={girlBooks} />

					<div className='box-img-small  box-img-small-check'>
						<img src={check} />
					</div>
					<div className='box-img-square'>
						<img src={image6} />
					</div>
					<div className='box-img-small box-img-small-smile'>
						<img src={smile} />
					</div>
					<div className='box-img'>
						<img src={image5} />
					</div>
				</div>

				<div className='box-text mr-50 gap-35'>
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
				<div className='box-text mr-50 gap-35'>
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
				<div className='box-text mr-50 gap-10'>
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
