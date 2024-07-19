import prisma from '@/lib/prismadb';

export const getBookings = async () => {
	const bookings = await prisma.bookings.findMany();

	return bookings;
};
