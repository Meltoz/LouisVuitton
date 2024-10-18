import React from 'react';

export const Language = () => {
    return(
        <div>
            <ul className="flex border-2 border-blue-400 text-whiteMedium">
                <li className="p-1 cursor-pointer">FR</li>
                <li className="p-1 cursor-pointer bg-blue-400 font-semibold">EN</li>
            </ul>
        </div>
    )
}