import React, { ChangeEvent } from "react"

interface inputProps {
    value?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string,
    placeholder: string,
    name?: string,
    errors?: string
}

const Inputfield: React.FC<inputProps> = ({ value, onChange, type, placeholder, name, errors }) => {
    return (
        <>
            <div className='relative'>
                <input
                    value={value}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    className='px-3 h-12 w-80 border-b-2 border-gray-200 rounded-2xl outline-none'
                    name={name}
                    id="" />
                {
                    errors && <p className='text-red-500 text-sm -bottom-4 left-3 absolute'>{errors}</p>
                }
            </div>
            <div></div>
        </>
    )
}

export default Inputfield
