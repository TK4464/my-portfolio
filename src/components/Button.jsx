import React from 'react'

const Button = (props) => {
    return (
        <button className="btn group flex items-center bg-transparent p-2 px-6 text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold tracking-widest text-dark-black">
            <span className="relative pr-4 pb-1 text-dark-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-navy after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">{props.buttonText}</span>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-dark-black transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-dark-black">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
        </button>
    )
}

export default Button