import  getimagegallery  from '../service/fetch';


const fetchImages = () => async dispatch => {
		const res = await getimagegallery();
    return dispatch({
        type:'GET_IMAGES',
        payload:res
    })
}

export default fetchImages;