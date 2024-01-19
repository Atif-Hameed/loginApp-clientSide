'use client'
import Image from 'next/image'
import img from "@/assets/vector.png"
import { useFormik } from 'formik'
import { passwordValidation} from '@/helper/FromValidation'
import { Toaster } from 'react-hot-toast'

export default function Password() {

  const { errors, values, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: passwordValidation,
    onSubmit: async (values) => {
      console.log(values)
      resetForm()
    }
  })

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='md:w-[35%] h-[75%] glass p-2' >

        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-4xl font-bold font-poppins' >Hello Again!</h1>
          <p className='w-48 text-center text-sm text-gray-500 font-medium font-roboto'>Explore more by connecting with us.</p>
        </div>

        <div className='flex justify-center py-6'>
          <Image src={img} alt='profile' className='h-36 w-36' />
        </div>

        <div className='flex justify-center'>
          <form onSubmit={handleSubmit} className=' flex flex-col items-center gap-6 justify-center'>
            <div className='relative'>
              <input value={values.password} onChange={handleChange} type="text" placeholder='Password' className='px-3 h-12 w-80 border-b-2 border-gray-200 rounded-2xl outline-none' name="password" id="" />
              {
                errors.password &&  <p className='text-red-500 text-sm -bottom-4 left-3 absolute'>{errors.password}</p>
              }
            </div>
            <button type='submit' className='bg-blue-500 rounded-lg text-white w-60 py-3' >Let&apos;s Go</button>
            <h1 className='text-blue-900 text-sm'>Not a Member? <span className='text-red-500'>Register Now</span></h1>
          </form>
        </div>

      </div>
    </div>
  )
}
