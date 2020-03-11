import React from 'react'
import image from '../assets/image.png'

export default function() {
    return (
        <div className="flex bg-white py-8 my-10 shadow-lg rounded-app">
            {/* the thumbnail side */}
            <div className="flex-none relative">
                {/* thumbnail  */}
                <img className="rounded-r-app" src={image} alt="thumbnail" />
                {/* tag */}
                <div className="absolute top-0 left-0 text-white font-semibold px-3 py-2 mt-4 rounded-r-full app-tag">Lorem ipsum</div>
            </div>
            {/* the text side */}
            <div className="px-8 flex flex-col">
                {/* title  */}
                <h1 className="text-lg font-semibold text-app-indigo">Lorem ipsum dolor sit amet, consectetur</h1>
                {/* excerpt */}
                <p className="my-4 text-app-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                {/* lire plus */}
                <div className="mt-auto flex items-center">
                    <div className="app-lire-plus-line"></div>
                <a className="font-semibold text-app-indigo" href="/">Lire plus</a>
                </div>
            </div>
        </div>
    )
}