import classNames from 'classnames';
import {Link} from 'react-router-dom';
import { useAuth } from '../../firebase';

interface HeaderProps{
    secondary?: boolean;
}

const Header = ({secondary}:HeaderProps) => {

    const currentUser = useAuth();

    return(
        <header className={classNames(secondary ? "absolute top-0 pt-18 px-7" : "bg-white container mx-auto sticky top-0 py-4", "w-full")}>
            {secondary ? 
                <Link to="/" className="hover:opacity-70 transition duration-300">
                    <span className="text-black text-2md leading-7 font-semibold">Your Logo</span>
                </Link>
            :
                <div className="flex justify-between">
                    <Link to={currentUser ? "/profile" : "/login"} className="block px-6 py-2 bg-blue text-white font-medium rounded-32 hover:scale-105 transition-scale duration-300">Profile</Link>
                </div>
            }
            
        </header>
    )
}

export default Header; 