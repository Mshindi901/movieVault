import { useState, useEffect } from "react";
import NavBar from "../components/HomeNavBar.jsx";
function Watchlist(){
    const [watchlist, setwatchlist] = useState([])

    useEffect(() => {
        const savedWatchlist = localStorage.getItem('watchlist')

        if (savedWatchlist) {
            const parsedlist = (JSON.parse(savedWatchlist))
            setwatchlist(parsedlist)
        }
    }, [])

    return(
        <>
            <div className="w-screen h-screen flex flex-col gap-4 bg-slate-900">
            <NavBar />
                {
                    watchlist.map((movie) => (
                        <div key={movie.id} className="w-screen h-auto flex flex-col md:flex-row shadow-2xl rounded-2xl border-2 border-white text-black p-2">
                            <div className="w-1/4 p-2">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-full"/>
                            </div>
                            <div className="md:w-3/4 w-full flex flex-col gap-6 justify-center">
                                <h1 className="text-5xl text-red-500">{movie.title}</h1>
                                <p className="text-2xl text-slate-300">{movie.overview}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )

}
export default Watchlist;