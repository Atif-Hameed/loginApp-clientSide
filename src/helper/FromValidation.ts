import * as Yup from 'yup'

export const usernameValidation = Yup.object({
    username: Yup.string().required('Username Required')
})

export const passwordValidation = Yup.object({
    password: Yup.string().min(4).required('Password Required').matches(
        /.*[!@#$%^&*(),.?":{}|<>].*/,
        'Password must contain at least one special character'
    ),
})

export const confirmPassValidation = Yup.object({
    password: Yup.string().min(4).required('Password Required').matches(
        /.*[!@#$%^&*(),.?":{}|<>].*/,
        'Password must contain at least one special character'
    ),
    confirmPass: Yup.string().oneOf([Yup.ref('password')], 'Password must match').required('Please repeat password')
})

export const registerValidation = Yup.object({
    username: Yup.string().required('Username Required'),
    email: Yup.string().email().required("Please Enter Email adress"),
    password: Yup.string().min(4).required('Password Required').matches(
        /.*[!@#$%^&*(),.?":{}|<>].*/,
        'Password must contain at least one special character'
    ),
})
