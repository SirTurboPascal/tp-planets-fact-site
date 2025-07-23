'use client';

import clsx from 'clsx';

import { FC } from 'react';

import Icon from '@/components/Icon.component';

import { IconName } from '@/model/types/IconName.type';

interface IIconButtonProps {
	className?: string;

	iconName: IconName;

	onClick: () => void;
}

const IconButton: FC<IIconButtonProps> = ({ className, iconName, onClick }) => {
	return (
		<button className={clsx('cursor-pointer items-center justify-center p-[8px]', className)} onClick={onClick}>
			<Icon iconName={iconName} />
		</button>
	);
};

export default IconButton;
