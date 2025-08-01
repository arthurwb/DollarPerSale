import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout h-[100dvh]'>
        <header className='header-small'>
            <div className='border-1 p-2'>
                <a href='/'><img src='DPS_Banner.png' className='w-full'></img></a>
            </div>
            <div className='grid p-2 max-sm:grid-cols-2 text-center space-x-10 items-center'>
                <a href='/about' className='border-1 m-1 p-1'>About $PS</a>
                <a href='/' className='border-1 m-1 p-1'>$PZ Archive</a>
                <a href='/contributors' className='border-1 m-1 p-1 col-span-2'>Contributors</a>
                <a href='/' className='border-1 m-1 p-1'>Support</a>
                <a href='/' className='border-1 m-1 p-1'>Contact</a>
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
                <div className='grid grid-cols-5 max-sm:grid-cols-2 max-2xl:grid-cols-3 pt-4 pe-76 whitespace-nowrap underline nav_items'>
                    <a href='/about' className='nav-item'>About $PS</a>
                    <a href='/' className='nav-item'>$PZ Archive</a>
                    <a href='/contributors' className='nav-item'>Contributors</a>
                    <a href='/' className='nav-item'>Support</a>
                    <a href='/contact' className='nav-item'>Contact</a>
                </div>
            </div>
        </header>
        <div className='flex flex-row h-[75vh]'>
            <main id='mainContent' className='lg:basis-7/8 max-sm:max-h-[70vh] overflow-y-scroll w-full border-1 lg:me-2 p-1 max-lg:mx-auto'>
                <Outlet />
            </main>
            <div id='sidebar' className='relative basis-1/8 border-1 min-h-[75dvh] -top-12 overflow-y-scroll'>
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
            </div>
        </div>
    </div>
  );
}

export default Layout;