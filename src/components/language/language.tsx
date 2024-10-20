import React from 'react';

export const Language = () => {
    return(
        <div>
            <ul className="flex border-2 border-blue-400">
                <li className="py-1 px-2 cursor-pointer text-whiteMedium/60">FR</li>
                <li className="px-2 py-1 cursor-pointer bg-blue-400 text-whiteMedium">EN</li>
            </ul>
        </div>
    )
}