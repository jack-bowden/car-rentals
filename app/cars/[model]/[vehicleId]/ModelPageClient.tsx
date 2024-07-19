'use client';

import React, { useState } from 'react';
import { carsForRent } from '@/data';
import Image from 'next/image';
import { useFormatPrice } from '@/lib/useFormatPrice';
import StarRating from '@/components/StarRatings';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { SignInButton } from '@clerk/nextjs';
import { Matcher } from 'react-day-picker';

interface ModelPageClientProps {
	model: string;
	clerkUserId: string | '';
	bookedDateRanges: { startDate: string; endDate: string }[] | [];
}

const ModelPageClient = ({
	model,
	clerkUserId,
	bookedDateRanges,
}: ModelPageClientProps) => {
	const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
		null,
		null,
	]);
	const [startDate, endDate] = dateRange;
	const router = useRouter();

	const handleDateChange = (update: [Date | null, Date | null]) => {
		setDateRange(update);
	};

	const formatDateRange = () => {
		if (startDate && endDate) {
			return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
		} else if (startDate) {
			return startDate.toLocaleDateString();
		} else {
			return 'Check Availability';
		}
	};

	const car = carsForRent.find(
		car =>
			car.make.toLowerCase() +
				'-' +
				car.model.toLowerCase().replaceAll(' ', '-') ===
			model
	);

	const calculateTotalPrice = () => {
		if (startDate && endDate && car) {
			const totalDays = Math.ceil(
				(endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
			);
			const price = useFormatPrice(totalDays * car.price);
			return `- ${price}{' '}`;
		}
	};

	const calculateNumberOfDays = () => {
		if (startDate && endDate) {
			const totalDays = Math.ceil(
				(endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
			);
			return `for ${totalDays} days`;
		}

		return null;
	};

	const functionMatcher: Matcher = (date: Date) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		if (date < today) return true;

		return bookedDateRanges.some(range => {
			const startDate = new Date(
				range.startDate.split('-').reverse().join('-')
			);
			const endDate = new Date(range.endDate.split('-').reverse().join('-'));

			startDate.setHours(0, 0, 0, 0);
			endDate.setHours(0, 0, 0, 0);

			return date >= startDate && date <= endDate;
		});
	};

	return (
		<main className='w-full min-h-[88vh] px-4 sm:px-12 justify-center flex flex-col'>
			<div className='flex flex-col items-center w-full h-full justify-center'>
				{car && (
					<Image
						src={`/${car.image}`}
						alt={car.model}
						width={550}
						height={550}
					/>
				)}
				<div className='w-full flex items-center justify-center'>
					<h1 className='text-xl sm:text-2xl'>
						{car?.make} {car?.model}
					</h1>
					<div className='flex truncate ml-10'>
						<StarRating rating={car?.rating} />
						<p className='ml-2 pt-1 font-semibold'>{car?.rating}</p>
					</div>
				</div>
				<div className='grid grid-cols-2 h-full w-full sm:w-4/5 space-y-1 mt-4 truncate gap-x-2'>
					<p className='text-left font-semibold'>
						Price<span className='text-red-500 font-bold'>:</span>{' '}
						<span className='text-secondary-foreground'>
							{useFormatPrice(Number(car?.price))} / Day
						</span>
					</p>
					<p className='text-right font-semibold'>
						Doors<span className='text-red-500 font-bold'>:</span>{' '}
						<span className='text-secondary-foreground'>{car?.doors}</span>
					</p>
					<p className='text-left font-semibold'>
						Transmission
						<span className='text-red-500 font-bold'>:</span>{' '}
						<span className='text-secondary-foreground'>
							{car?.transmission}
						</span>
					</p>
					<p className='text-right font-semibold'>
						Fuel Type
						<span className='text-red-500 font-bold'>:</span>{' '}
						<span className='text-secondary-foreground'>{car?.fuelType}</span>
					</p>
					<p className='text-left font-semibold'>
						Power
						<span className='text-red-500 font-bold'>:</span>{' '}
						<span className='text-secondary-foreground'>{car?.power}</span>
					</p>
					<p className='text-right font-semibold'>
						MPG
						<span className='text-red-500 font-bold'>:</span>{' '}
						<span className='text-secondary-foreground'>{car?.mpg}</span>
					</p>
				</div>
			</div>
			<div className='w-full flex items-center justify-center'>
				<div className='mt-12 w-full sm:w-1/2'>
					<div className='mb-6 flex w-full justify-center'>
						<Popover>
							<PopoverTrigger>
								<span className='w-full truncate'>{formatDateRange()}</span>
							</PopoverTrigger>

							<PopoverContent className='w-auto p-0'>
								<Calendar
									mode='range' // @ts-ignore
									selected={{ from: startDate, to: endDate }}
									onSelect={range => {
										handleDateChange([range?.from || null, range?.to || null]);
									}}
									initialFocus
									disabled={functionMatcher}
								/>
							</PopoverContent>
						</Popover>
					</div>
					{startDate && endDate && clerkUserId && (
						<Link
							href={{
								pathname: '/checkout',
								query: {
									vehicleId: car?.vehicleId!.toString(),
									startDate: `${startDate.toISOString()}`,
									endDate: `${endDate.toISOString()}`,
								},
							}}
							className='mt-6'
						>
							<Button className='w-full'>
								Rent Vehicle {calculateTotalPrice()}
								{calculateNumberOfDays()}
							</Button>
						</Link>
					)}

					{!clerkUserId && (
						<SignInButton>
							<Button className='w-full'>
								Rent Vehicle {calculateTotalPrice()}
								{calculateNumberOfDays()}
							</Button>
						</SignInButton>
					)}
				</div>
			</div>
		</main>
	);
};

export default ModelPageClient;
