import Image from 'next/image';

import { FC } from 'react';

import chevronIcon from '@/assets/images/chevron.svg';
import hamburgerIcon from '@/assets/images/hamburger.svg';
import sourceIcon from '@/assets/images/source.svg';

import { IconName } from '@/model/types/IconName.type';

const icons: Record<IconName, any> = {
	chevron: chevronIcon,
	hamburger: hamburgerIcon,
	source: sourceIcon,
};

interface IIconProps {
	iconName: IconName;
}

const Icon: FC<IIconProps> = ({ iconName }) => {
	return (
		<div className='relative size-[16px] shrink-0'>
			<Image alt={`${iconName} icon`} src={icons[iconName]} fill />
		</div>
	);
};

export default Icon;
