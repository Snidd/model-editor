export type Tab = {
	id: string;
	name: string;
	href: string;
};

export const root_tabs: Tab[] = [
	{
		id: '/entityTypes',
		name: 'Entity types',
		href: '/entityTypes'
	},
	{
		id: '/cvls',
		name: 'CVLs',
		href: '/cvls'
	}
];
