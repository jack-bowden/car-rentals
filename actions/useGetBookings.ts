'use server';

import { getBookings } from '@/hooks/getBookings';

export const useGetBookings = async () => {
	return await getBookings();
};
