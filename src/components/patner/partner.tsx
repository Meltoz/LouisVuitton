import './partner.css'

export const Partner = () => {

    return  (
        <section>
            <div className="relative my-96">
                <p className="font-ivy text-[18em] contour font-medium absolute -top-[19.5rem] -z-30 right-28">Louis
                    Vuitton</p>
                <div className="absolute uppercase text-4xl left-32 -top-[3.8rem]">
                    <h3 className="font-semibold">Our unique craftmanship</h3>
                    <p className="">Since 1854</p>
                </div>
                <div className="h-[35rem] bg-neutral-500 z-10 text-[10em] flex items-center justify-center">+</div>
                <p className="contour font-ivy text-[18em] font-medium absolute -bottom-[17rem] left-28 -z-30">Logitech</p>
                <div className="uppercase absolute right-9 -bottom-[3.8rem] text-4xl text-right">
                    <h3 className="font-semibold">the most premium brand</h3>
                    <p>For gaming hardware</p>
                </div>
            </div>

            <div className="text-center py-32">
                <h3 className="text-4xl my-10">A perfect combination of aesthetic and performance</h3>
                <p className="text-2xl my-10">
                    Louis Vuitton and Logitech are both looking to give the best quality products. <br />
                    The desire behind this collaboration is to offer top tier hardware for gamers in need <br/>
                    of premium materials for thier gaming environment.
                </p>
                <p className="text-2xl my-10">From the keyboard to the mousepad, feel the true luxury at the tip of your figers</p>
            </div>
        </section>
    )
}