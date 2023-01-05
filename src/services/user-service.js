import { myAxios } from "./helper";

const signUp = (user) => {
   return myAxios.post('/api/user/register', user).then((response) => response.data())

}
export default signUp;