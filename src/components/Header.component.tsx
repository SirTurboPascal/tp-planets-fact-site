'use client';

import { Fragment, useState } from 'react';

import Drawer from '@/components/Drawer.component';
import IconButton from '@/components/IconButton.component';
import Logo from '@/components/Logo.component';
import NavigationBar from '@/components/NavigationBar.component';

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<Fragment>
			<header className='flex h-[68px] items-center justify-between border-b-[1px] border-white/20 px-[32px] md:h-auto md:flex-col md:pt-[16px] lg:flex-row lg:pt-0'>
				<Logo />
				<NavigationBar />

				<IconButton className='flex md:hidden' iconName='hamburger' onClick={() => setDrawerOpen(true)} />
			</header>

			<Drawer onClose={() => setDrawerOpen(false)} open={drawerOpen} />
		</Fragment>
	);
};

export default Header;
