import { cookies } from 'next/headers';

export default function Cookies() {
	const cookiesList = cookies();

	const hasCookie = cookiesList.has('appgate7');
	return hasCookie;
}
