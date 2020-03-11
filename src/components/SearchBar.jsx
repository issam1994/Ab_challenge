import React from 'react'
import {mdiMagnify as searchIcon} from '@mdi/js'

export default function() {
    return (
        <div className="flex items-center justify-end">
            <div className="flex bg-white rounded-full overflow-hidden py-1 px-2 shadow">
                <svg className="fill-current w-8 h-8 text-gray-300 mr-1" viewBox="0 0 22 22">
                    <path d={searchIcon} />
                </svg>
                <input type="text" name="search" id="search" placeholder="Recherche par mot cle"/>
            </div>
        </div>
    )
}