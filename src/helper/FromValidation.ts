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
