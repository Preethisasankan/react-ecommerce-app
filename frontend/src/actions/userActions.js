import Axios from 'axios';
import Cookie from 'js-cookie';
import { USER_UPDATE_FAIL,USER_UPDATE_SUCCESS, USER_REQUEST, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL} from "../constants/userConstants";
const signin = (email, password) => async (dispatch) => {
    try {
        
        dispatch({ type: USER_REQUEST, payload: {email, password} });
        const instance = Axios.create({ baseURL: 'http://127.0.0.1:5000' });
        const { data } = await instance.post('/api/users/signin');
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
        
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
    }



}
const register = (name, email, password) => async (dispatch) => {
  try {
      
      dispatch({ type: USER_REGISTER_REQUEST, payload: {email, password} });
      const instance = Axios.create({ baseURL: 'http://127.0.0.1:5000' });
      const { data } = await instance.post('/api/users/register',{name, email,password});
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      
      Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
      dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }



}
export { signin , register};