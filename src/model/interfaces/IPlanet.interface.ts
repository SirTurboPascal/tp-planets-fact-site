import { IContent } from '@/model/interfaces/IContent.interface';

export interface IPlanet {
	accentColor: string;
	id: string;
	name: string;
	radius: string;
	revolution: string;
	rotation: string;
	temperature: string;

	geology: IContent;
	overview: IContent;
	structure: IContent;
}
