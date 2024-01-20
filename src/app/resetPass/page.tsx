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
import Wrapper from '../components/Wrapper'

export default function Reset() {

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
        <>
            <Wrapper>
                <Headings
                    heading='Reset'
                    des='Enter New Password'
                />
                <div className='flex justify-center pt-20'>
                    <form onSubmit={handleSubmit} className=' flex flex-col lg:w-[60%] items-center gap-4 justify-center'>

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

                        <Button name='Reset' />
                    </form>
                </div>
            </Wrapper>
        </>
    )
}
