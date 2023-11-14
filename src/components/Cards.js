import React from 'react';
import bgCard from '../image/bg/bg-card.png';
import bgCard2 from '../image/bg/bg-card-2.png';
import bgCard3 from '../image/bg/bg-card-3.png';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdEye } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
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
			<section className='cards mt-40'>
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
		</>
	);
};

export default Cards;
