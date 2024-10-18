export const Dinner = () =>{
    return(
        <div className="flex w-full bg-dinner text-whiteMedium items-center justify-between">
            <div className="w-1/2 text-2xl mx-36 w-1/3">
                <h4 className="text-4xl py-16 mt-10">The Popup Dinner</h4>
                <p className="py-8">Come celebrate the grand debut of the collaboration with a special dinner by our chef Jean Lavriviere.</p>
                <p className="py-8">All the meals will be prepared with the prefered meal of our hardcore games: graphic cards.</p>
                <p className="py-8">Enjoy a three courses dinner with the delicacy of true gaming vibes.</p>
                <p className="py-14">Only on inivitation.</p>
            </div>
            <div className="w-1/2 ">
                <img src="imgs/dinner.png" alt="dinner" className=""  />
            </div>
        </div>
    )
}