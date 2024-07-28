import prisma from '@/lib/prismadb';
import { Bookings } from '@/types';

export const getBookings = async (): Promise<Bookings[]> => {
	const bookings = await prisma.bookings.findMany();

	return bookings;
};
