import React from 'react'

const Headings:React.FC<{heading:string, des:string}> = ({heading, des}) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-4xl font-bold font-poppins' >{heading}</h1>
                <p className='w-48 text-center text-sm text-gray-500 font-medium font-roboto'>{des}</p>
            </div>
        </>
    )
}

export default Headings
