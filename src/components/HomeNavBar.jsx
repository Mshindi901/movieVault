import {Link} from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
function NavBar(){
    return(
        <>
            <div className="md:w-screen w-full h-fit p-4 flex justify-between">
                <Link to='/'><h1 className="md:text-5xl text-3xl text-white">MovieVault</h1></Link>

                <nav>
                    <ul className="text-2xl md:flex hidden gap-6 text-white">
                        <li><Link to="/watchlist">Watchlist</Link></li>
                        <li><Link to="/">Contacts</Link></li>
                        <li><Link to="/donations">Donations</Link></li>
                    </ul>
                </nav>

                <div className='md:flex gap-3 hidden'>
                    <button className='w-max h-max px-8 py-2 rounded-xl bg-red-500 text-white text-xl'><Link to="/login">Sign in</Link></button>
                    <button className='w-max h-max px-8 py-2 rounded-xl bg-red-500 text-white text-xl'><Link to="/join">Sign up</Link></button>
                </div>

                <button className='text-2xl text-white'><IoMdMenu /></button>
            </div>
        </>
    )
}

export default NavBar;