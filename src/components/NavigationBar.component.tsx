'use client';

import { lowerCase, map } from 'lodash';
import { Fragment, useContext } from 'react';

import NavButton from '@/components/NavButton.component';
import PlanetsContext from '@/context/PlanetsContext.context';

const NavigationBar = () => {
	const planets = useContext(PlanetsContext);

	return (
		<nav className='hidden shrink-0 gap-4 self-stretch md:flex'>
			{map(planets, (planet) => {
				const { id, name } = planet;

				return (
					<NavButton key={id} href={`/${lowerCase(name)}`}>
						<Fragment>{name}</Fragment>
					</NavButton>
				);
			})}
		</nav>
	);
};

export default NavigationBar;
