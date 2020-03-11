import React from 'react'
import {mdiMagnify as searchIcon} from '@mdi/js'

export default function() {
    return (
        <div className="flex items-center justify-end py-6">
            <div className="flex bg-white rounded-full overflow-hidden p-2 shadow">
                {/* search icon  */}
                <svg className="fill-current w-8 h-8 text-gray-300 mr-1" viewBox="0 0 22 22">
                    <path d={searchIcon} />
                </svg>
                {/* end search icon  */}
                {/* the input */}
                <input type="text" name="search" id="search" placeholder="Recherche par mot cle"/>
                {/* end input  */}
            </div>
        </div>
    )
}