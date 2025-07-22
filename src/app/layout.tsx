import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

import Header from '@/components/Header.component';
import PlanetsContextProvider from '@/components/PlanetsContextProvider.component';

import '@/styles/globals.css';

const metadata: Metadata = {
	title: 'Planets Fact Site',
};

interface ILayoutProps {
	children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<html className='bg-darkblue overflow-hidden'>
			<body className='h-dvh bg-[url(/images/background-stars.svg)] bg-center'>
				<PlanetsContextProvider>
					<Header />

					<main>{children}</main>
				</PlanetsContextProvider>
			</body>
		</html>
	);
};

export default Layout;
export { metadata };
