'use client'
import Image from 'next/image'
import img from "@/assets/vector.png"
import { useFormik } from 'formik'
import { passwordValidation } from '@/helper/FromValidation'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import Inputfield from '../../components/Inputfield'
import Button from '../../components/Button'
import Headings from '../../components/Headings'
import Wrapper from '../../components/Wrapper'
import { useSelector } from 'react-redux'
import { rootState } from '@/Redux/store'
import { useState } from 'react'
import { loginFunction } from '@/services/Api'
import { useRouter } from 'next/navigation'

export default function Password() {

  const router = useRouter()
  const { user } = useSelector((state: rootState) => state.User)
  const { errors, values, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    initialValues: {
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    // validationSchema: passwordValidation,
    onSubmit: async (values) => {
      const username = user?.userName
      try {
        const data = await loginFunction(username!, values.password)
        console.log(data)
        toast.success(data.message)
        router.push('/profile')
      }
      catch (error: any) {
        if (error.response) {
          const status = error.response.status;
          if (status === 404) {
            console.log("USer not found : ", error.response.data)
            toast.error(error.response.data.message)
          }
          else if (status === 401) {
            console.log("Password Error : ", error.response.data)
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
      }
    }
  })

  return (
    <>
      <Wrapper>
        <Toaster />
        <Headings
          heading={`Hello ${user?.userName}`}
          des='Explore more by connecting with us.'
        />

        <div className='flex justify-center py-6'>
          <Image src={img} alt='profile' className='h-36 w-36' />
        </div>


        <div className='flex justify-center'>
          <form onSubmit={handleSubmit} className=' flex flex-col lg:w-[60%] items-center gap-4 justify-center'>

            <Inputfield
              value={values.password}
              onChange={handleChange}
              type='password'
              placeholder='Password'
              name='password'
              errors={errors.password}
            />

            <Button name='SignIn' />

            <h1 className='text-blue-900 text-sm'>Forgot Password? <Link href={'/recovery'} className='text-red-500'>Recover Now</Link></h1>
          </form>
        </div>
      </Wrapper>
    </>
  )
}
