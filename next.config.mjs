/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatar.iran.liara.run',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
