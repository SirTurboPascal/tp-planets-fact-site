'use client';

import { FC, ReactNode, useEffect, useState } from 'react';

import PlanetsContext from '@/context/PlanetsContext.context';

import { IPlanet } from '@/model/interfaces/IPlanet.interface';

interface IPlanetsContextProviderProps {
	children: ReactNode;
}

const PlanetsContextProvider: FC<IPlanetsContextProviderProps> = ({ children }) => {
	const [planets, setPlanets] = useState<IPlanet[]>([]);

	useEffect(() => {
		fetch('/data/data.json').then((response) => {
			response.json().then((json) => {
				setPlanets(json);
			});
		});
	}, []);

	return <PlanetsContext.Provider value={planets}>{children}</PlanetsContext.Provider>;
};

export default PlanetsContextProvider;
