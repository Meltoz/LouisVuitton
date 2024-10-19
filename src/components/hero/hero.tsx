import React from "react";

export const Hero = () => {
    return(
        <div className="h-[100vh] relative -z-10">
            <div className="w-2/3 flex items-center justify-center ">
                <video autoPlay loop muted>
                    <source src="./videos/products.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}