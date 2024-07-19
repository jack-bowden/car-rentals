'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import IndividualTestimonial from './_components/IndividualTestimonial';

const Testimonials = () => {
	return (
		<main className='w-full h-full flex flex-col mt-6 items-center'>
			<div className='w-3/4 flex flex-col items-center'>
				<h1 className='text-2xl sm:text-3xl md:truncate'>
					Unmatched prices, better service and peace of mind
					<span className='text-red-500'>.</span>
				</h1>
				<p className='mt-3 sm:mt-6 text-secondary-foreground text-sm lg:w-3/4'>
					We pride ourselves on offering competitive prices along with a quality
					service where we make you feel like you're in the driving seat.
				</p>
				<Image
					className='mt-6 rounded-md opacity-90 fade-edge min-h-[280px] sm:max-h-[295px] md:max-h-[310px]'
					src='/behind-wheel.jpg'
					alt='testimonials'
					width={500}
					height={500}
				/>
				<div className='flex flex-col items-center'>
					<p className='mt-6'>Check out what our customers have to say</p>
					<ArrowDown className='mt-2' />
				</div>
				<div className='w-full flex flex-col justify-center'>
					<IndividualTestimonial
						name='Jack Smith'
						carRented='BMW 3 Series'
						testimonial='Amazing service, will certainly use again, everything was so quick
						and easy.'
						image='https://avatar.iran.liara.run/public/48'
					/>
					<IndividualTestimonial
						name='Ben Goodall'
						carRented='Vauxhall Corsa'
						testimonial='Amazing service, will certainly use again, everything was so quick
						and easy.'
						image='https://avatar.iran.liara.run/public/32'
					/>
					<IndividualTestimonial
						name='Amy Leedham'
						carRented='Audi A3'
						testimonial='Amazing service, will certainly use again, everything was so quick
						and easy.'
						image='https://avatar.iran.liara.run/public/71'
					/>
				</div>
			</div>
		</main>
	);
};

export default Testimonials;
