import axios from 'axios';

export default function requests() {
	return axios.create({
		baseURL: 'http://localhost:3001',
		withCredentials: false,
	});
}
