'use client'
import Image from 'next/image'
import img from "@/assets/vector.png"
import { useFormik } from 'formik'
import { confirmPassValidation } from '@/helper/FromValidation'
import { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import Inputfield from '../components/Inputfield'
import Button from '../components/Button'
import Headings from '../components/Headings'

export default function Password() {

    const { errors, values, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: {
            password: '',
            confirmPass: '',
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: confirmPassValidation,
        onSubmit: async (values) => {
            console.log(values)
            resetForm()
        }
    })

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='md:w-[35%] h-[75%] glass p-2' >

                {/* <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-4xl font-bold font-poppins' >Reset</h1>
                    <p className='w-48 text-center text-sm text-gray-500 font-medium font-roboto'>Enter New Password</p>
                </div> */}

                <Headings
                    heading='Reset'
                    des='Enter New Password'
                />

                <div className='flex justify-center pt-20'>
                    <form onSubmit={handleSubmit} className=' flex flex-col items-center gap-4 justify-center'>

                        <Inputfield
                            value={values.password}
                            onChange={handleChange}
                            type='password'
                            name='password'
                            placeholder='New Password'
                            errors={errors.password}
                        />
                        <Inputfield
                            value={values.confirmPass}
                            onChange={handleChange}
                            type='password'
                            name='confirmPass'
                            placeholder='Repeat Password'
                            errors={errors.confirmPass}
                        />

                        {/* <div className='relative'>
                            <input value={values.password} onChange={handleChange} type="password" placeholder='New Password' className='px-3 h-12 w-80 border-b-2 border-gray-200 rounded-2xl outline-none' name="password" id="" />
                            {
                                errors.password && <p className='text-red-500 text-sm -bottom-3 left-3 absolute'>{errors.password}</p>
                            }
                        </div>
                        <div className='relative'>
                            <input value={values.confirmPass} onChange={handleChange} type="password" placeholder='Repeat Password' className='px-3 h-12 w-80 border-b-2 border-gray-200 rounded-2xl outline-none' name="confirmPass" id="" />
                            {
                                errors.confirmPass && <p className='text-red-500 text-sm -bottom-3 left-3 absolute'>{errors.confirmPass}</p>
                            }
                        </div> */}
                        {/* <button type='submit' className='bg-blue-500 rounded-lg text-white w-60 py-3' >Reset</button> */}
                        <Button name='Reset' />
                    </form>
                </div>

            </div>
        </div>
    )
}
