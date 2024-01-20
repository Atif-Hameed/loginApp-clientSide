'use client'
import Image from 'next/image'
import img from "@/assets/vector.png"
import { useFormik } from 'formik'
import { usernameValidation } from '@/helper/FromValidation'
import { Toaster } from 'react-hot-toast'
import Inputfield from './components/Inputfield'
import Button from './components/Button'
import Headings from './components/Headings'
import Wrapper from './components/Wrapper'

export default function Username() {

  const { errors, values, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: usernameValidation,
    onSubmit: async (values) => {
      console.log(values)
      resetForm()
    }
  })

  return (
    <>
      <Wrapper>
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

            <h1 className='text-blue-900 text-sm'>Not a Member? <span className='text-red-500'>Register Now</span></h1>
          </form>
        </div>
      </Wrapper>
    </>
  )
}
