import React from 'react';
import bgCard from '../image/bg/bg-card.png';
import bgCard2 from '../image/bg/bg-card-2.png';
import bgCard3 from '../image/bg/bg-card-3.png';

import person1 from '../image/person/person1.png';
import person2 from '../image/person/person2.png';
import person3 from '../image/person/person3.png';

import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdEye } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';
import { BsDownload } from 'react-icons/bs';

const Cards = () => {
	return (
		<>
			<section className='cards'>
				<div className='card'>
					<div className='card-box-image'>
						<div className='box-image'>
							<img src={bgCard} />
						</div>

						<div className='card-box-sale'>
							<p className='card-sale-text'>Sale</p>
						</div>
						<div className='card-box-icons'>
							<div className='box-icon'>
								<FaRegHeart />
							</div>
							<div className='box-icon'>
								<FiShoppingCart />
							</div>
							<div className='box-icon'>
								<IoMdEye />
							</div>
						</div>
					</div>
					<div className='card-box-text'>
						<div className='card-box-top'>
							<p className='text-learn-more'>Welcome</p>
							<div className='box-star'>
								<FaStar className='star-icon' />
								<p className='text-star'>4.9</p>
							</div>
						</div>
						<p className='card-heading'>Expert instruction</p>
						<p className='card-text-below'>
							We focus on ergonomics and meeting you where you work. It's only a
							keystroke away.
						</p>
						<div className='card-box-download'>
							<BsDownload />
							<p className='card-dowload-text'>15 Sales</p>
						</div>
						<p className='card-text-price'>
							$16.48<span className='card-text-price-color'> $6.48</span>
						</p>
						<button className='card-button'>
							Learn More <SlArrowRight />
						</button>
					</div>
				</div>
				<div className='card'>
					<div className='card-box-image'>
						<div className='box-image'>
							<img src={bgCard2} />
						</div>

						<div className='card-box-sale'>
							<p className='card-sale-text'>Sale</p>
						</div>
						<div className='card-box-icons'>
							<div className='box-icon'>
								<FaRegHeart />
							</div>
							<div className='box-icon'>
								<FiShoppingCart />
							</div>
							<div className='box-icon'>
								<IoMdEye />
							</div>
						</div>
					</div>
					<div className='card-box-text'>
						<div className='card-box-top'>
							<p className='text-learn-more'>Welcome</p>
							<div className='box-star'>
								<FaStar className='star-icon' />
								<p className='text-star'>4.9</p>
							</div>
						</div>
						<p className='card-heading'>training Courses</p>
						<p className='card-text-below'>
							We focus on ergonomics and meeting you where you work. It's only a
							keystroke away.
						</p>
						<div className='card-box-download'>
							<BsDownload />
							<p className='card-dowload-text'>15 Sales</p>
						</div>
						<p className='card-text-price'>
							$16.48<span className='card-text-price-color'> $6.48</span>
						</p>
						<button className='card-button'>
							Learn More <SlArrowRight />
						</button>
					</div>
				</div>
				<div className='card'>
					<div className='card-box-image'>
						<div className='box-image'>
							<img src={bgCard3} />
						</div>

						<div className='card-box-sale'>
							<p className='card-sale-text'>Sale</p>
						</div>
						<div className='card-box-icons'>
							<div className='box-icon'>
								<FaRegHeart />
							</div>
							<div className='box-icon'>
								<FiShoppingCart />
							</div>
							<div className='box-icon'>
								<IoMdEye />
							</div>
						</div>
					</div>
					<div className='card-box-text'>
						<div className='card-box-top'>
							<p className='text-learn-more'>Welcome</p>
							<div className='box-star'>
								<FaStar className='star-icon' />
								<p className='text-star'>4.9</p>
							</div>
						</div>
						<p className='card-heading'>2,769 online courses</p>
						<p className='card-text-below'>
							We focus on ergonomics and meeting you where you work. It's only a
							keystroke away.
						</p>
						<div className='card-box-download'>
							<BsDownload />
							<p className='card-dowload-text'>15 Sales</p>
						</div>
						<p className='card-text-price'>
							$16.48<span className='card-text-price-color'> $6.48</span>
						</p>
						<button className='card-button'>
							Learn More <SlArrowRight />
						</button>
					</div>
				</div>
			</section>

			<section className='courses'>
				<div className='box-text mr-50 gap-10'>
					<p className='text-learn-more'>Join Us</p>
					<h3 className='text-heading'>Our Experts Teacher</h3>
					<p className='text-small'>
						Problems trying to resolve the conflict between
						<br />
						the two major realms of Classical physics: Newtonian mechanics
					</p>
				</div>
				<div className='box-blank'></div>
			</section>

			<section className='cards'>
				<div className='card-opinion'>
					<div className='card-box-star mt-20'>
						<FaStar className='card-star' />
						<FaStar className='card-star' />
						<FaStar className='card-star' />
						<FaStar className='card-star' />
						<FaRegStar className='card-star' />
					</div>
					<p className='card-text mb-20'>
						Slate helps you see
						<br /> how many more days <br /> you need to work to <br /> reach
						your financial <br /> goal for the month <br /> and year.
					</p>
					<div className='card-box-signature'>
						<div className='card-box-signature-image'>
							<img src={person1} />
						</div>
						<p className='card-signature'>
							Regina Miles <br />{' '}
							<span className='card-signature-black'>Designer</span>
						</p>
					</div>
				</div>
				<div className='card-opinion'>
					<div className='card-box-star mt-20'>
						<FaStar className='card-star' />
						<FaStar className='card-star' />
						<FaStar className='card-star' />
						<FaStar className='card-star' />
						<FaRegStar className='card-star' />
					</div>
					<p className='card-text mb-20'>
						Slate helps you see
						<br /> how many more days <br /> you need to work to <br /> reach
						your financial <br /> goal for the month <br /> and year.
					</p>
					<div className='card-box-signature'>
						<div className='card-box-signature-image'>
							<img src={person2} />
						</div>
						<p className='card-signature'>
							Regina Miles <br />{' '}
							<span className='card-signature-black'>Designer</span>
						</p>
					</div>
				</div>
				<div className='card-opinion'>
					<div className='card-box-star mt-20'>
						<FaStar className='card-star' />
						<FaStar className='card-star' />
						<FaStar className='card-star' />
						<FaStar className='card-star' />
						<FaRegStar className='card-star' />
					</div>
					<p className='card-text mb-20'>
						Slate helps you see
						<br /> how many more days <br /> you need to work to <br /> reach
						your financial <br /> goal for the month <br /> and year.
					</p>
					<div className='card-box-signature'>
						<div className='card-box-signature-image'>
							<img src={person3} />
						</div>
						<p className='card-signature'>
							Regina Miles <br />
							<span className='card-signature-black'>Designer</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cards;
