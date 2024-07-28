import ModelPageClient from './ModelPageClient';
import { auth } from '@clerk/nextjs/server';
import { getBookings } from '@/hooks/getBookings';

const ModelPage = async ({
	params,
}: {
	params: { model: string; vehicleId: string };
}) => {
	const { userId: clerkUserId } = auth();
	const model = params.model;
	const vehicleId = params.vehicleId;
	const bookings = await getBookings();
	const getBookedDateRanges = () => {
		const vehicleBookings = bookings.filter(
			booking => booking.vehicleId === Number(vehicleId)
		);

		if (vehicleBookings.length > 0) {
			return vehicleBookings.map(booking => ({
				startDate: booking.startDate,
				endDate: booking.endDate,
			}));
		}

		return [];
	};

	const bookedDateRanges = getBookedDateRanges();

	return (
		<ModelPageClient
			model={model}
			clerkUserId={clerkUserId || ''}
			bookedDateRanges={bookedDateRanges || []}
		/>
	);
};

export default ModelPage;
