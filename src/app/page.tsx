'use client'
import Image from 'next/image'
import img from "@/assets/vector.png"
import { useFormik } from 'formik'
import { usernameValidation } from '@/helper/FromValidation'
import toast, { Toaster } from 'react-hot-toast'
import Inputfield from '../components/Inputfield'
import Button from '../components/Button'
import Headings from '../components/Headings'
import Wrapper from '../components/Wrapper'
import Link from 'next/link'
import { userNameFunction } from '@/services/Api'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { rootState } from '@/Redux/store'
import { setUser } from '@/Redux/userSlice'

export default function Username() {

  const router = useRouter();
  const dispatch = useDispatch()
  // const { } = useSelector((state: rootState) => state.user)

  const { errors, values, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: usernameValidation,
    onSubmit: async (values) => {
      try {
        const data = await userNameFunction(values.username);
        if (data.success) {
          console.log(data)
          toast.success(data.message)
        } else {
          console.log(data)
          toast.error('User not Found')
        }

      } catch (error) {
        console.error('Unexpected error:', error);
        toast.error('An unexpected error occurred');
      }
    }
  })

  return (
    <>
      <Wrapper>
        <Toaster />
        <Headings
          heading='Hello Again!'
          des='Explore more by connecting with us.'
        />

        <div className='flex justify-center py-6'>
          <Image src={img} alt='profile' className='h-36 w-36' />
        </div>

        <div className='flex justify-center'>
          <form onSubmit={handleSubmit} className=' flex lg:w-[60%] flex-col items-center gap-4 justify-center'>

            <Inputfield
              value={values.username}
              onChange={handleChange}
              type='text'
              placeholder='Username'
              name='username'
              errors={errors.username}
            />

            <Button name='Let&apos;s Go' />

            <h1 className='text-blue-900 text-sm'>Not a Member? <Link href='/register' className='text-red-500'>Register Now</Link></h1>
          </form>
        </div>
      </Wrapper>
    </>
  )
}
