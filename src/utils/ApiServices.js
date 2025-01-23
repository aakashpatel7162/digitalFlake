import axios from 'axios'
const token=localStorage.getItem("token")
const commonHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ${token}`,

  };
  
export default async function ApiServices(method,url,para) {
  try{
    const response =await  axios({
        method: method,
        url:process.env.REACT_APP_BASE_URL+`/api${url}`,
        data: para,
        headers:commonHeaders,
    })
    return response.data;  


  }
  catch (error) {

    console.error('API request -->:', error);
    throw error;
  }

}