import axios from 'axios'

const new_api_host = "Headstarter-chatbot-env.eba-fttkmm4z.us-east-1.elasticbeanstalk.com "

const axiosInstance = axios.create({
    baseURL: new_api_host,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
    // headers: {
    //     'Authorization': localStorage.getItem('access_token'),
    //     'Content-Type': 'application/json',
    //     'accept': 'application/json',
    // }
})

const getResponse = async () => {
    let data:any
    let new_user_api_url = `/chat`

    // let response = await axiosInstance.post(new_user_api_url, {phone, email, token_username})
    let response = await axiosInstance.get(new_user_api_url)
    // let response = require('../data/culinary_schools');
    // console.log('response', response)
    if (response){
        data = (response.data && response.data.body) ? response.data.body : response.data
        return data
    }
    
    return null
}

export {getResponse}