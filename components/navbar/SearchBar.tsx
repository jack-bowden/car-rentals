// 'use client';

// import React, { useState } from 'react';
// import { Button } from '../ui/button';
// import { ChevronUp, ChevronDown, CalendarIcon } from 'lucide-react';
// import SearchBarItem from './_components/SearchBarItem';
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger,
// } from '../ui/dropdown-menu';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Calendar } from '../ui/calendar';
// import { locations } from '@/data';

// const SearchBar = () => {
// 	const [isExpanded, setIsExpanded] = useState(true);
// 	const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
// 		null,
// 		null,
// 	]);
// 	const [startDate, endDate] = dateRange;
// 	const [location, setLocation] = useState<string>('');

// 	const toggleExpanded = () => {
// 		setIsExpanded(!isExpanded);
// 	};

// 	const handleDateChange = (update: [Date | null, Date | null]) => {
// 		setDateRange(update);
// 	};

// 	const handleLocationChange = value => {
// 		setLocation(value);
// 	};

// 	const formatDateRange = () => {
// 		if (startDate && endDate) {
// 			return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
// 		} else if (startDate) {
// 			return startDate.toLocaleDateString();
// 		} else {
// 			return 'When do you want it?';
// 		}
// 	};

// 	const formatLocation = () => {
// 		if (location) {
// 			return location;
// 		} else {
// 			return 'Where do you want it?';
// 		}
// 	};

// 	return (
// 		<div
// 			className={`w-full hidden md:block ${
// 				isExpanded ? 'shadow-md mt-2' : ''
// 			} rounded-md px-2`}
// 		>
// 			<div
// 				className={`transition-all ${
// 					isExpanded ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'
// 				}`}
// 			>
// 				<div className='grid grid-cols-3 p-2'>
// 					<Popover>
// 						<PopoverTrigger>
// 							<SearchBarItem
// 								title='Select Date'
// 								subtitle={formatDateRange()}
// 							/>
// 						</PopoverTrigger>

// 						<PopoverContent className='w-auto p-0'>
// 							<Calendar
// 								mode='range'
// 								selected={{ from: startDate, to: endDate }}
// 								onSelect={range => {
// 									handleDateChange([range?.from || null, range?.to || null]);
// 								}}
// 								initialFocus
// 							/>
// 						</PopoverContent>
// 					</Popover>
// 					<DropdownMenu>
// 						<DropdownMenuTrigger className='focus:outline-none focus:bg-transparent'>
// 							<SearchBarItem
// 								title='Select Location'
// 								subtitle={formatLocation()}
// 							/>
// 						</DropdownMenuTrigger>

// 						<DropdownMenuContent>
// 							{locations.map(location => (
// 								<DropdownMenuItem
// 									key={location}
// 									onSelect={() => handleLocationChange(location)}
// 								>
// 									{location}
// 								</DropdownMenuItem>
// 							))}
// 						</DropdownMenuContent>
// 					</DropdownMenu>
// 					<div className='flex justify-end items-center border-l'>
// 						<Button className='w-1/2'>Search</Button>
// 						{isExpanded && (
// 							<Button
// 								onClick={toggleExpanded}
// 								variant='ghost'
// 								size='sm'
// 								className='ml-2 h-6'
// 							>
// 								<ChevronUp className='h-4 w-4' />
// 							</Button>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 			{!isExpanded && (
// 				<div className='flex justify-end pr-2'>
// 					<Button
// 						onClick={toggleExpanded}
// 						variant='ghost'
// 						size='sm'
// 						className='h-6'
// 					>
// 						<ChevronDown className='h-4 w-4' />
// 					</Button>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default SearchBar;
