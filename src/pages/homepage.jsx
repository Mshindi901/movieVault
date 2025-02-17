import Movies from "../components/HomeMoviesArea.jsx";
import NavBar from "../components/HomeNavBar.jsx";
import Background from '../assets/Images/blue-patterns.jpg'
function Home(){
    return(
        <>
            <div className="bg-center bg-cover w-full h-fit overflow-hidden" style={{backgroundImage: `url(${Background})`}}>
                <NavBar/>
                <div className="md:w-1/4 w-3/4 flex flex-col justify-center gap-6 p-6">
                    <h1 className="md:text-3xl text-xl text-white">Welcome to MovieVault!</h1>
                    <p className="md:text-2xl text-lg text-white whitespace-normal break-words">Discover the latest movies, search for your favorites, and build your personal watchlist. Save movies to watch later and explore a collection of trending films—all in one place! 🚀🍿</p>
                    <button className="w-max h-max px-8 py-2 bg-red-500 rounded-xl text-white text-xl">Explore Premium🥳</button>
                </div>
            </div>
            <Movies/>
        </>
    )
}
export default Home;