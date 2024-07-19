// 'use client';

// import React, { useState } from 'react';
// import { Button } from '../ui/button';
// import { ChevronUp, ChevronDown, CalendarIcon } from 'lucide-react';
// import SearchBarItem from './_components/SearchBarItem';
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuTrigger,
// } from '../ui/dropdown-menu';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Calendar } from '../ui/calendar';
// import { cn } from '@/lib/utils';
// import { format } from 'date-fns';

// const SearchBar = () => {
// 	const [isExpanded, setIsExpanded] = useState(true);
// 	const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
// 		null,
// 		null,
// 	]);
// 	const [startDate, endDate] = dateRange;

// 	const toggleExpanded = () => {
// 		setIsExpanded(!isExpanded);
// 	};

// 	const handleDateChange = (selectedDate: Date | null) => {
// 		const [start, end] = dateRange;
// 		if (start && !end && selectedDate && selectedDate > start) {
// 			setDateRange([start, selectedDate]);
// 		} else {
// 			setDateRange([selectedDate, null]);
// 		}
// 	};

// 	const formatDateRange = () => {
// 		if (startDate && endDate) {
// 			return `${format(startDate, 'PPP')} - ${format(endDate, 'PPP')}`;
// 		} else if (startDate) {
// 			return format(startDate, 'PPP');
// 		} else {
// 			return 'When do you want it?';
// 		}
// 	};

// 	return (
// 		<div className='search-bar'>
// 			<div className='search-bar-content'>
// 				<Popover>
// 					<PopoverTrigger asChild>
// 						<Button
// 							variant='outline'
// 							className={cn(
// 								'w-[280px] justify-start text-left font-normal',
// 								!startDate && 'text-muted-foreground'
// 							)}
// 						>
// 							<CalendarIcon className='mr-2 h-4 w-4' />
// 							{formatDateRange()}
// 						</Button>
// 					</PopoverTrigger>
// 					<PopoverContent className='w-auto p-0'>
// 						<Calendar
// 							mode='range'
// 							selected={{
// 								from: startDate,
// 								to: endDate,
// 							}}
// 							onSelect={range => {
// 								if (range?.from) handleDateChange(range.from);
// 								if (range?.to) handleDateChange(range.to);
// 							}}
// 							initialFocus
// 						/>
// 					</PopoverContent>
// 				</Popover>
// 				<Button onClick={toggleExpanded}>
// 					Search
// 					{isExpanded ? (
// 						<ChevronUp className='ml-2 h-4 w-4' />
// 					) : (
// 						<ChevronDown className='ml-2 h-4 w-4' />
// 					)}
// 				</Button>
// 			</div>
// 			{!isExpanded && (
// 				<div className='expanded-content'>
// 					<SearchBarItem
// 						title='Location'
// 						subtitle='Where are you going?'
// 					/>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default SearchBar;
