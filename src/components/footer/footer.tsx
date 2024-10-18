import React from "react"

export const Footer = () =>{
    const links = ['Sitemap', 'Legal & Privacy', 'Cookies', 'MSA Transparency'];
    const socials = ['instagram', 'facebook', 'youtube', 'linkedin', 'basket'];

    return(
        <div className="relative mt-96 pb-80 overflow-hidden ml-4">
            <div className="flex justify-between">
                <div className="flex justify-around w-1/3">
                    {links.map(l => (<p key={l}>{l}</p>))}
                </div>
                <div className="flex justify-around w-1/6 mr-2">
                    {socials.map(l => (<img src={"./imgs/socials/" + l+".svg"} key={l} alt="socials media" width="24px" />))}
                </div>
            </div>
            <div className="text-[28.7rem] -top-36 text-blue-400 overflow-hidden absolute whitespace-nowrap font-semibold mx-2">LV X LOGI</div>
        </div>
    )
}