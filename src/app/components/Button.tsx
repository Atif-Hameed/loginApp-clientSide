import React from 'react'

const Button:React.FC<{name:string}> = ({name}) => {
    return (
        <>
            <button type='submit' className='bg-blue-500 rounded-lg text-white w-60 py-3' >{name}</button>
        </>
    )
}

export default Button
