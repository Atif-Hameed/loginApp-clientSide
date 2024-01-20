'use client'

import Button from "../components/Button"
import Headings from "../components/Headings"
import Inputfield from "../components/Inputfield"


export default function Recovery() {

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='md:w-[35%] h-[75%] glass p-2' >

                {/* <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-4xl font-bold font-poppins' >Recovery</h1>
                    <p className='w-48 text-center text-sm text-gray-500 font-medium font-roboto'>Enter OTP to recover Password</p>
                </div> */}

                <Headings
                    heading='Recovery'
                    des='Enter OTP to recover Password'
                />

                <div className='flex justify-center pt-24'>
                    <form className=' flex flex-col items-center gap-4 justify-center'>
                        <span className='text-gray-500 '>Enter 6 digits OTP sent to your email adress</span>

                        <Inputfield
                            type="text"
                            placeholder="OTP"
                            name="otp"
                        />

                        {/* <button type='submit' className='bg-blue-500 rounded-lg text-white w-60 py-3' >SignIn</button> */}
                        <Button name='SignIn' />
                        <h1 className='text-blue-900 text-sm'>Can&apos;t get OTP? <button className='text-red-500'>Resend</button></h1>
                    </form>
                </div>

            </div>
        </div>
    )
}
