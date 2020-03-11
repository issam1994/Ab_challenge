import React from 'react'
// import { mdiMagnify as searchIcon } from '@mdi/js'

export default function () {
    return (
        <div className="flex items-center justify-end py-6">
            <div className="flex bg-white rounded-full overflow-hidden p-2 shadow-sm">
                {/* search icon  */}
                <svg className="ml-1 mr-2" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1102 12.8202L18.7103 17.6045C19.0994 18.0093 19.0865 18.6546 18.6821 19.0438C18.4918 19.227 18.241 19.3277 17.9767 19.3277C17.6975 19.3277 17.4369 19.2168 17.2432 19.0156L12.6082 14.195C11.2921 15.1199 9.75277 15.6071 8.13743 15.6071C3.83461 15.6071 0.333862 12.1064 0.333862 7.80357C0.333862 3.50075 3.83461 0 8.13743 0C12.4403 0 15.941 3.50075 15.941 7.80357C15.941 9.64521 15.293 11.4142 14.1102 12.8202ZM13.9053 7.80357C13.9053 4.62311 11.3179 2.03571 8.13743 2.03571C4.95697 2.03571 2.36958 4.62311 2.36958 7.80357C2.36958 10.984 4.95697 13.5714 8.13743 13.5714C11.3179 13.5714 13.9053 10.984 13.9053 7.80357Z" fill="#CDCDCD" />
                </svg>
                {/* end search icon  */}
                {/* the input */}
                <input type="text" name="search" id="search" placeholder="Recherche par mot cle" />
                {/* end input  */}
            </div>
        </div>
    )
}