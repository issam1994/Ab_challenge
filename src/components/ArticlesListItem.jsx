import React from 'react'
import image from '../assets/image.png'

export default function({item}) {
    const {name, description, html_url, owner : {avatar_url}} = item
    return (
        <div className="flex bg-white py-8 my-10 shadow-lg rounded-app">
            {/* the thumbnail side */}
            <div className="flex-none relative">
                {/* thumbnail  */}
                <img className="rounded-r-app object-cover" style={{width: '318px', height: "185px"}} src={avatar_url || image} alt="thumbnail" />
                {/* tag */}
                <div className="absolute top-0 left-0 text-white font-semibold px-3 py-2 mt-4 rounded-r-full app-tag">Lorem ipsum</div>
            </div>
            {/* the text side */}
            <div className="px-8 flex flex-col">
                {/* title  */}
                <h1 className="text-lg font-semibold text-app-indigo">{name}</h1>
                {/* excerpt */}
                <p className="my-4 text-app-gray">
                {description}
                </p>
                {/* lire plus */}
                <div className="mt-auto flex items-center">
                    <div className="app-lire-plus-line"></div>
                <a className="font-semibold text-app-indigo" rel="noopener noreferrer" href={html_url} target="_blank">Lire plus</a>
                </div>
            </div>
        </div>
    )
}