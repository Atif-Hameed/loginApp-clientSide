'use client'
import Image from 'next/image'
import img from "@/assets/vector.png"
import { useFormik } from 'formik'
import { registerValidation, usernameValidation } from '@/helper/FromValidation'
import { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import Inputfield from '../components/Inputfield'
import Button from '../components/Button'
import Headings from '../components/Headings'

export default function Username() {

    const { errors, values, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: '',
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: registerValidation,
        onSubmit: async (values) => {
            console.log(values)
            resetForm()
        }
    })

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='md:w-[35%] h-[75%] glass p-2' >

                <Headings
                    heading='Register'
                    des='Happy to join you!'
                />

                <div className='flex justify-center py-4'>
                    <Image src={img} alt='profile' className='h-28 w-28' />
                </div>

                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit} className=' flex flex-col items-center gap-2 justify-center'>

                        <Inputfield
                            value={values.email}
                            onChange={handleChange}
                            type='email'
                            placeholder='Email'
                            name='email'
                            errors={errors.email}
                        />

                        <Inputfield
                            value={values.password}
                            onChange={handleChange}
                            type='password'
                            placeholder='Password'
                            name='password'
                            errors={errors.password}
                        />

                        <Inputfield
                            value={values.username}
                            onChange={handleChange}
                            type='text'
                            placeholder='Username'
                            name='username'
                            errors={errors.username}
                        />

                        <Button name='Register' />

                        <h1 className='text-blue-900 text-sm'>Already Register <Link href={''} className='text-red-500'>Login Now</Link></h1>
                    </form>
                </div>

            </div>
        </div>
    )
}
