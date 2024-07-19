import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Car Rentals',
	description: 'A site to handle booking of car rentals',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={font.className}>
					<ToastContainer />
					<main className='min-h-full py-4 mx-auto max-w-6xl'>
						<Navbar />
						{children}
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
