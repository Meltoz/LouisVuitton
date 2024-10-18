export const Hero = () => {
    return(
        <div className="h-[100vh] relative">
            <div className="h-[90vh] bg-neutral-800 w-1/3 absolute -top-32 -z-30 right-0 flex justify-center items-center">
                <p className="vertical text-5xl text-whiteMedium">Step In Tech</p>
            </div>
            <div className="w-2/3 h-[80vh] flex items-center justify-center ">
                <div className="rounded-full bg-neutral-300 p-24 pt-28"> produit</div>
            </div>
        </div>
    )
}