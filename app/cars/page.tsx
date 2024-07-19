'use client';
import CarCard from '@/components/CarCard';
import CarLogoBanner from '@/components/CarLogoBanner';
import { carsForRent } from '@/data';
import React, { useCallback, useEffect, useState } from 'react';
// @ts-ignore
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Cars = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		loop: false,
		dragFree: true,
		slidesToScroll: 1,
		breakpoints: {
			'(min-width: 1024px)': { slidesToScroll: 3 },
			'(min-width: 768px)': { slidesToScroll: 2 },
		},
	});

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	);

	const onSelect = useCallback((api: EmblaCarouselType) => {
		setPrevBtnEnabled(api.canScrollPrev());
		setNextBtnEnabled(api.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect(emblaApi);
		emblaApi.on('select', () => onSelect(emblaApi));
		emblaApi.on('reInit', () => onSelect(emblaApi));

		const handleResize = () => {
			emblaApi.reInit();
			onSelect(emblaApi);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			emblaApi.off('select', () => onSelect(emblaApi));
			emblaApi.off('reInit', () => onSelect(emblaApi));
			window.removeEventListener('resize', handleResize);
		};
	}, [emblaApi, onSelect]);

	return (
		<main>
			<div className='mt-8 md:mt-10 lg:mt-12'>
				<CarLogoBanner />
			</div>
			<div className='grid sm:hidden grid-cols-1 gap-6 mt-6'>
				{carsForRent.map(car => (
					<CarCard
						key={car.vehicleId}
						image={car.image}
						make={car.make}
						model={car.model}
						doors={car.doors}
						price={car.price}
						rating={car.rating}
						fuelType={car.fuelType}
						transmission={car.transmission}
						mpg={car.mpg}
						power={car.power}
						vehicleId={car.vehicleId}
					/>
				))}
			</div>
			<div className='relative hidden sm:block mt-8 md:mt-10 lg:mt-12'>
				<div
					className='overflow-hidden'
					ref={emblaRef}
				>
					<div className='flex'>
						{carsForRent.map(car => (
							<div
								key={car.vehicleId}
								className='flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 pr-4'
							>
								<CarCard
									image={car.image}
									make={car.make}
									model={car.model}
									doors={car.doors}
									price={car.price}
									rating={car.rating}
									fuelType={car.fuelType}
									transmission={car.transmission}
									mpg={car.mpg}
									power={car.power}
									vehicleId={car.vehicleId}
								/>
							</div>
						))}
					</div>
				</div>
				<button
					className={`absolute top-1/2 -left-3 transform -translate-y-1/2 z-10 p-2 bg-white/50 rounded-full shadow-md ${
						!prevBtnEnabled ? 'opacity-30' : 'hover:bg-gray-100'
					}`}
					onClick={scrollPrev}
					disabled={!prevBtnEnabled}
				>
					<ChevronLeft size={24} />
				</button>
				<button
					className={`absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 p-2 bg-white/50 rounded-full shadow-md ${
						!nextBtnEnabled ? 'opacity-30' : 'hover:bg-gray-100'
					}`}
					onClick={scrollNext}
					disabled={!nextBtnEnabled}
				>
					<ChevronRight size={24} />
				</button>
			</div>
		</main>
	);
};

export default Cars;
