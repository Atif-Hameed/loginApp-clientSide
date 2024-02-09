'use client'
import Image from 'next/image'
import img from "@/assets/vector.png"
import { useFormik } from 'formik'
import { emailValidation, registerValidation, usernameValidation } from '@/helper/FromValidation'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import Inputfield from '../../components/Inputfield'
import Button from '../../components/Button'
import Headings from '../../components/Headings'
import Wrapper from '../../components/Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { rootState } from '@/Redux/store'
import { updateUserFunction } from '@/services/Api'
import { setUser } from '@/Redux/userSlice'

export default function Profile() {

    const dispatch = useDispatch()
    const { user } = useSelector((state: rootState) => state.User)

    const { errors, values, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: user?.email,
            mobile: '',
            adress: '',
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: emailValidation,
        onSubmit: async (values) => {
            const loadingToastId = toast.loading('Loading...');  //set loading
            try {
                const data = await updateUserFunction('65b4049d4d62a3de35ffee0b', values.fname, values.lname, values.mobile, values.adress);
                // dispatch(setUser(data.user))
                console.log(data)
                toast.success(data.message, { id: loadingToastId })
                // router.push('/password')
                resetForm();
                if (data.success) {

                } else {
                    console.log(data)
                    toast.error('Could not Update the data')
                }

            } catch (error: any) {
                if (error.response) {
                    const status = error.response.status;
                    if (status === 404) {
                        console.log("User Error : ", error.response.data)
                        toast.error(error.response.data.message)
                    }
                    else if (status === 500) {
                        console.log("User Error : ", error.response.data)
                        toast.error(error.response.data.message)
                    }
                    else {
                        console.error('Unexpected error:', error.response.data.message);
                        toast.error(error.response.data.message)
                    }
                }
                else {
                    console.error('Network error or other:', error.message);
                    toast.error(error.message)
                }
                toast.dismiss(loadingToastId);
            }
        }
    })

    return (
        <>
            <Wrapper>
                <Toaster />
                <Headings
                    heading='Profile'
                    des='Happy to join you!'
                />

                <div className='flex justify-center py-2'>
                    <Image src={img} alt='profile' className='h-28 w-28' />
                </div>

                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit} className=' flex flex-col lg:w-[80%] items-center gap-4 justify-center'>
                        <div className='flex gap-3'>
                            <Inputfield
                                value={values.fname}
                                onChange={handleChange} type='text' placeholder='First Name' name='fname'
                            />
                            <Inputfield
                                value={values.lname}
                                onChange={handleChange} type='text' placeholder='Last Name' name='lname'
                            />
                        </div>
                        <div className='flex gap-3'>
                            <Inputfield
                                value={values.mobile}
                                onChange={handleChange} type='text' placeholder='Mobile No.' name='mobile'
                            />
                            <Inputfield
                                value={values.email}
                                onChange={handleChange} type='text' placeholder='Email' name='email'
                                errors={errors.email}
                            />
                        </div>
                        <Inputfield
                            value={values.adress}
                            onChange={handleChange} type='text' placeholder='Adress' name='adress'
                        />
                        <Button name='Update' />

                        <h1 className='text-blue-900 text-sm'>Come back later? <Link href={''} className='text-red-500'>Logout</Link></h1>
                    </form>
                </div>
            </Wrapper>
        </>
    )
}
