import prisma from '@/lib/prismadb';

export const getUsersBookings = async (clerkUserId: string) => {
	try {
		const user = await prisma.user.findMany({
			where: {
				clerkUserId,
			},
		});

		if (!user) {
			return null;
		}

		const booking = await prisma.bookings.findMany({
			where: {
				// @ts-ignore
				userId: user?.id,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});

		return booking;
	} catch (error) {
		console.log(error);
		throw Error;
	}
};
