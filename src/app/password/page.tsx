'use client'
import Image from 'next/image'
import img from "@/assets/vector.png"
import { useFormik } from 'formik'
import { passwordValidation } from '@/helper/FromValidation'
import { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import Inputfield from '../../components/Inputfield'
import Button from '../../components/Button'
import Headings from '../../components/Headings'
import Wrapper from '../../components/Wrapper'

export default function Password() {

  const { errors, values, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    initialValues: {
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: passwordValidation,
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
