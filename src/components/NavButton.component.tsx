'use client';

import clsx from 'clsx';
import Link from 'next/link';

import { eq } from 'lodash';
import { usePathname } from 'next/navigation';

import { FC, Fragment, ReactNode } from 'react';

interface INavButtonProps {
	href: string;

	children: ReactNode;
}

const NavButton: FC<INavButtonProps> = ({ children, href }) => {
	const pathname = usePathname();

	const className = clsx('font-spartan px-[8px] lg:h-[84px] flex shrink-0 md:h-[48px] md:grow items-center justify-center font-bold text-white uppercase hover:underline', {
		'bg-white/20': eq(href, pathname),
	});

	return (
		<Link className={className} href={href}>
			<Fragment>{children}</Fragment>
		</Link>
	);
};

export default NavButton;
