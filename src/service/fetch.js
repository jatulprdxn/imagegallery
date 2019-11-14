import axios from 'axios';

const getimagegallery = async () => {
    try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
			if(response.status === 200) return response.data
		} catch(error) {
			return false;
		}
}

export default getimagegallery;