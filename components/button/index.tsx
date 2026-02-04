"use client";
import React from 'react'

const Button = ({ text, clickHandler }: { text: string, clickHandler: () => void }) => {
    return (
        <button onClick={clickHandler} className='bg-gray-950 text-white border-none  py-3 font-nunito cursor-pointer rounded-md w-full'>{text}</button>
    )
}

export default Button