'use client'

import Button from "../components/Button"
import Headings from "../components/Headings"
import Inputfield from "../components/Inputfield"
import Wrapper from "../components/Wrapper"


export default function Recovery() {

    return (
        <>
            <Wrapper>
                <Headings
                    heading='Recovery'
                    des='Enter OTP to recover Password'
                />

                <div className='flex justify-center pt-24'>
                    <form className=' flex flex-col items-center lg:w-[60%] gap-4 justify-center'>
                        <span className='text-gray-500 '>Enter 6 digits OTP sent to your email adress</span>

                        <Inputfield
                            type="text"
                            placeholder="OTP"
                            name="otp"
                        />

                        <Button name='SignIn' />

                        <h1 className='text-blue-900 text-sm'>Can&apos;t get OTP? <button className='text-red-500'>Resend</button></h1>
                    </form>
                </div>
            </Wrapper>
        </>
    )
}
