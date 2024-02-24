import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

const TopHeader = () => {
    return (
        <div className="bg-black py-2 text-white flex justify-between px-5 lg:px-10">
            <h1 className="">Free Shopping Worldwide</h1>
            <div className='flex gap-5'>
                <a href='#'><FacebookIcon className='text-blue-600'/></a>
                <a href='#'><InstagramIcon className='text-red-400'/></a>
                <a href='#'><TwitterIcon className='text-sky-400'/></a>
                <div className='flex gap-4'>
                    <Link href={'/login'}><button>Log In</button></Link>
                    <Link href={'/register'}><button>Register</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default TopHeader;