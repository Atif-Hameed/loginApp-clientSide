import { Axios } from "@/utils/axios"
import axios from "axios";


//userName
export const userNameFunction = async (userName: string) => {
    try {
        const response = await Axios.get(`/getUser/${userName}`);
        const data = response.data;
        return data
    } catch (error) {
        throw error
    }
};

//password
export const loginFunction = async (userName: string, password: string) => {
    try {
        const response = await Axios.post('/login', { userName, password })
        const data = response.data
        return data;

    } catch (error) {
        throw error;
    }
}

//register
export const registerFunction = async (email: string, password: string, userName: string, profile?: string, msg?:string) => {
    try {
        const response = await Axios.post('/register', { email, password, userName, profile })
        const mailResponse = await Axios.post('/registerMail', {msg})
        return response.data, mailResponse.data;
    } catch (error) {
        throw error; // Rethrow the error for custom handling in the component
    }
}





//authenticateUser
// export const authenticate = async (userName: string) => {
//     try {
//         return await Axios.post('/authenticate', { userName })
//     } catch (error) {
//         return {
//             success: false,
//             message: 'UserName not exist'
//         }
//     }
// }

// //getUSerData
// export const getUser = async (userName: string) => {
//     try {
//         const { data } = await Axios.post(`/getUser/:${userName}`)
//         return data
//     } catch (error) {
//         return {
//             success: false,
//             message: 'UserName does not match'
//         }
//     }
// }

// //registerUser
// export const registerUser = async (cridentials: { userName: string; email: string }) => {
//     try {
//         const { data: { message }, status } = await Axios.post('/register', cridentials)
//         let { userName, email } = cridentials
//         if (status == 200) {
//             await Axios.post('/registerMail', { userName: userName, email: email })
//         }
//     } catch (error) {
//         return {
//             success: false,
//             error
//         }
//     }
// }

// //login
// export const verifyPassword = async (cridentials: { userName: string, password: string }) => {
//     try {
//         const { userName, password } = cridentials
//         if (userName) {
//             const { data } = await Axios.post('/login', { userName, password })
//             return data
//         }
//     } catch (error) {
//         return {
//             success: false,
//             error
//         }
//     }
// }

// //update user profile
// export const updateUser = async (response: string) => {
//     try {
//         const token = await localStorage.getItem('token')
//         const data = await Axios.put('/updateUser', response, { headers: { token } })
//         return data
//     } catch (error) {
//         return {
//             success: false,
//             message: 'could not update the Profile!',
//             error
//         }
//     }
// }

// //generate OTP
// export const generateOTP = async (userName:string) => {
//     try {
//         const {data:{Code}, status} = await Axios.get('/generateOtp', {params : {userName}})
//         if(status === 200){
//             let {data : {email}} = await getUser(userName)
//             let msg = `OTP CODE : ${Code}`
//             await Axios.post('/registerMail', {userName, email, msg})
//         }
//         return await Code
//     } catch (error) {
//         return {
//             success: false,
//             error
//         }
//     }
// }