'use client'
import Image from 'next/image'
import img from "@/assets/vector.png"
import { useFormik } from 'formik'
import { emailValidation, registerValidation, usernameValidation } from '@/helper/FromValidation'
import { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import Inputfield from '../components/Inputfield'
import Button from '../components/Button'
import Headings from '../components/Headings'
import Wrapper from '../components/Wrapper'

export default function Profile() {

    const { errors, values, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            adress: '',
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: emailValidation,
        onSubmit: async (values) => {
            console.log(values)
            resetForm()
        }
    })

    return (
        <>
            <Wrapper>
                <Headings
                    heading='Register'
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
