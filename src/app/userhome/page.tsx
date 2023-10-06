'use client'

import SessionContext from '@/app/contexts/sessionContext';
import ChartContext from '@/app/contexts/chartContext';
import { useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Favorites from '../components/Favorites';
import Principal from '../components/Principal';
import CreateProduct from './products/create/page';
import EditProduct from './products/edit/page';
import Profile from './profile/page';
import Settings from './settings/page';
import { isLoggedIn, IChartItem } from '@/types/logged';

export default function UserHome() {
	const session = useContext(SessionContext);
	const chart = useContext(ChartContext);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const renderMainContent = (session: isLoggedIn) => {
		const url = `${pathname}?${searchParams}`;

		if (url === 'userhome') {
			return <Principal />;
		} else if (url === `/favorites`) {
			return <Favorites />;
		} else if (url === `/products/create`) {
			return <CreateProduct />;
		} else if (url === `/products/edit`) {
			return <EditProduct />;
		} else if (url === `/profile`) {
			return <Profile />;
		} else if (url === `/settings`) {
			return <Settings />;
		} else {
			return <Principal />;
		}
	};

	return (
		<SessionContext.Provider value={session}>
			<ChartContext.Provider value={chart}>
				<div>{renderMainContent(session)}</div>
			</ChartContext.Provider>
		</SessionContext.Provider>
	);
}
