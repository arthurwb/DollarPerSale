import { Outlet } from 'react-router-dom';
import Dropdown from '../components/Dropdown';

function Layout() {
    return (
        <div className='layout h-[100dvh]'>
            <header className='header-small'>
                <div className='border-1 p-2'>
                    <a href='/'><img src='DPS_Banner.png' className='w-full'></img></a>
                </div>
                <div className='grid p-2 max-sm:grid-cols-2 text-center space-x-10 items-center'>
                    <a href='/about' className='border-1 m-1 p-1'>About $PS</a>
                    <a href='/contributors' className='border-1 m-1 p-1'>Contributors</a>
                    <div className='col-span-2'>
                        <Dropdown
                            trigger={<div>&#x2304; More &#x2304;</div>}
                            menu={[
                                <a href='/blog'>Blog</a>,
                                <a href='/head'>Thing</a>,
                                <a href='/'>Support</a>,
                                <a href='contact'>Contact</a>,
                                <a href='/zine-archive'>Archive</a>,
                            ]}
                            className='dropdown border-1 m-1 p-1 mx-auto'
                        />
                    </div>
                </div>
            </header>
            <header className='p-2 mb-2 flex header-large'>
                <div className='flex justify-center bg-(--black) min-w-40 items-center me-2'>
                    <a href='/' className='h-40'>
                        <img id='logo' src='SPS_Logo_-transparent_White_light_speckle_extended.png' className='h-full object-cover'></img>
                    </a>
                </div>
                <div className='w-full'>
                    <a href='/'>
                        <div className='w-full bg-(--black) flex flex-row border-2'>
                            <div className='m-1 w-full bg-(--white)'>
                                <img src='DPS_Banner.png' className='w-4/5 m-auto max-h-20 object-cover object-[25%_50%]'></img>
                            </div>
                        </div>
                    </a>
                    <div className='grid grid-cols-6 max-sm:grid-cols-2 max-2xl:grid-cols-3 pt-4 whitespace-nowrap underline nav_items'>
                        <a href='/about' className='nav-item'>About $PS</a>
                        <a href='/blog' className='nav-item'>Blog</a>
                        <a href='/contributors' className='nav-item'>Contributors</a>
                        <div className='nav-item col-span-1'>
                            <Dropdown
                                trigger={<a className='cursor-pointer'>&#x2304; Dollar per Zine &#x2304;</a>}
                                menu={[
                                    <a href='/zine-archive'>Archive</a>,
                                ]}
                                className='dropdown'
                            />
                        </div>
                        <div className='nav-item col-span-1'>
                            <Dropdown
                                trigger={<a className='cursor-pointer'>&#x2304; Reach Out &#x2304;</a>}
                                menu={[
                                    <a href='/'>Support</a>,
                                    <a href='contact'>Contact</a>,
                                ]}
                                className='dropdown'
                            />
                        </div>
                        <div className='nav-item col-span-1'>
                            <Dropdown
                                trigger={<a className='cursor-pointer'>&#x2304; Misc &#x2304;</a>}
                                menu={[
                                    <a href='/head'>Thing</a>,
                                ]}
                                className='dropdown'
                            />
                        </div>
                    </div>
                </div>
            </header>
            <div className='flex flex-row h-[75dvh] max-sm:h-[70dvh]'>
                <main id='' className='max-sm:max-h-[70dvh] overflow-y-scroll w-full border-1 p-1 max-lg:mx-auto'>
                    <Outlet />
                </main>
                {/* <div id='sidebar' className='relative basis-1/8 border-1 min-h-[75dvh] -top-12 overflow-y-scroll'>
                    <a target='_blank' href='https://www.instagram.com/spsdollarpersale/'>
                        <div className='border-1 p-1 m-1'>
                            <h1>Dollar per Sale</h1>
                            <p>instagram</p>
                        </div>
                    </a>
                    <a target='_blank' href='/'>
                        <div className='border-1 p-1 m-1'>
                            <h1>Dollar per Sale</h1>
                            <p>bandcamp</p>
                        </div>
                    </a>
                    <div className='border-1 border-(--primary) p-1 m-1 text-xs'>
                        <a target='_blank' href='https://www.instagram.com/craigslimit/'>
                            <div className='border-1 p-1 m-1'>
                                <h1>Craigs Limit</h1>
                                <p>instagram</p>
                            </div>
                        </a>
                        <a target='_blank' href='https://cateredtocare.bandcamp.com/'>
                            <div className='border-1 p-1 m-1'>
                                <h1>Catered to Care</h1>
                                <p>bandcamp</p>
                            </div>
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Layout;