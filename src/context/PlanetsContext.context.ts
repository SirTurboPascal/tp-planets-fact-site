import { createContext } from 'react';

import { IPlanet } from '@/model/interfaces/IPlanet.interface';

const PlanetsContext = createContext<IPlanet[]>([]);

export default PlanetsContext;
