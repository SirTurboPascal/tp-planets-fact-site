import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

import '@/styles/globals.css';

const metadata: Metadata = {
	title: 'Planets Fact Site',
};

interface ILayoutProps {
	children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<html className='bg-darkblue overfow-hidden'>
			<body className='h-dvh bg-[url(/images/background-stars.svg)] bg-center'>{children}</body>
		</html>
	);
};

export default Layout;
export { metadata };
