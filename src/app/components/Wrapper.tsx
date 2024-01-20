import React, { ReactNode } from 'react'

interface childrenProp {
    children: ReactNode
}

const Wrapper:React.FC<childrenProp> = ({children}) => {
    return (
        <>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='lg:w-[35%] h-[75%] glass p-2' >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Wrapper
