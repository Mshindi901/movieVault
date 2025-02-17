import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
function Movies(){
    const [movieName, setmovieName] = useState();
    const [moviedata, setmoviedata] = useState([])
    const [movielist, setmovielist] = useState([])
    const [latestmovies, setlatestmovies] = useState(true)
    const [watchlist, setwatchlist] = useState([])

    const apiKey = "b8cd383288b9c4fc20aab66cca4d58c6"
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
    const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    const navigate = useNavigate()


    const allMovies = async () => {
        try {
            const movies = await fetch(discoverUrl)
            const data = await movies.json()
            setmovielist(data.results)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        allMovies()
    }, [])

    console.log(movielist)

    const movie = async () => {
        try {
            const response =  await fetch(apiUrl)
            const data = await response.json()
            console.log(data)

            if(data.results.length > 0){
                setmoviedata(data.results)
            }
        } catch (error) {
            console.log(error.message)
        }

    };

    const handlesubmit= (e) => {
        e.preventDefault()
        movie();
        setmovielist([])
        setlatestmovies(false)
    }
    const hadnlewatchlist =(movie) => {
        const newWatchlist = ([...watchlist, movie])
        console.log(newWatchlist)
        setwatchlist(newWatchlist)
        localStorage.setItem("watchlist", JSON.stringify(newWatchlist))
        navigate('/watchlist')
    }
    return (
        <>
            <div className="w-full h-fit bg-slate-900 overflow-hidden">
                <div className="flex justify-center items-center md:w-3/4 w-full">
                    <form action="" method="post" className="flex gap-4 w-full justify-center items-center p-4" onSubmit={handlesubmit}>
                        <input type="search" value={movieName} placeholder="Enter movie name" onChange={(e) => {setmovieName(e.target.value)}} className="w-full border-2 border-white bg-none rounded-xl text-white py-2"/>
                        <input type="submit" value="Search" className="px-8 py-2 bg-red-500 text-xl text-white hover:bg-amber-600 rounded-xl"/>
                    </form>
                </div>
                {latestmovies &&
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <h1 className="md:text-5xl text-2xl text-red-500"> Latest Movies</h1>
                        </div>
                        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-4 justify-center items-center md:p-4 sm:p-2">
    
                            {movielist.map((movie)=>(
                                <div key={movie.id} className="bg-none border-2 border-white h-auto shadow-2xl rounded-xl md:p-5 p-2">
                                    {movie.poster_path ?(
                                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movie poster" className="max-w-full object-contain max-h-60 rounded-xl"/>
                                    ):(
                                        <p>No Image Available</p>
                                    )}
                                    <button className="w-max h-max px-12 py-3 bg-yellow-500 text-white rounded-xl" onClick={() => hadnlewatchlist(movie)}>Add to Watchlist</button>
                                </div>
                            )
    
                            )}
                        </div>
                    </div>
                }
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h1 className="md:text-5xl text-2xl text-red-500">{movieName}</h1>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-4 justify-center items-center md:p-4 sm:p-2">
                        {moviedata.map((movie)=>(
                                <div key={movie.id} className="bg-none border-2 border-white h-auto shadow-2xl rounded-xl md:p-5 p-2">
                                    {movie.poster_path ?(
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" className="w-full object-center"/>
                                    ):(
                                        <p>No Image Available</p>
                                    )}
                                    <button className="w-max h-max px-12 py-3 bg-yellow-500 text-white rounded-xl" onClick={() => hadnlewatchlist(movie)}>Add to Watchlist</button>
                                </div>
                            )

                        )}
                    </div>
                </div>

            </div>
        </>
    )
}
export default Movies;