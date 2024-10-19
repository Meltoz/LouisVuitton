import React from 'react';

export const Language = () => {
    return(
        <div>
            <ul className="flex border-2 border-blue-400">
                <li className="py-1 px-1.5 cursor-pointer bg-whiteMedium">FR</li>
                <li className="p-1 cursor-pointer bg-blue-400 font-semibold">EN</li>
            </ul>
        </div>
    )
}