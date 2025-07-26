import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout'>
        <div id='scrolling text' className='p-2'>
            SCROLLING TEXT HERE
        </div>
        <header className='p-2 mb-2 flex h-35'>
            <div className='flex border-2 justify-center items-center me-2'>
                <a href='/' className='h-full '>
                    <img id='logo' src='200x200.png' className='p-1 h-full object-cover'></img>
                </a>
            </div>
            <div className='w-full'>
                <div className='bg-black flex flex-row'>
                    <img src='800x100.png' className='border-2 p-1 w-full max-h-20 object-cover'></img>
                </div>
                <div className='flex flex-row pt-4 space-x-10 underline nav_items'>
                    <a href='/about'>About $PS</a>
                    <a href='/'>$PZ Archive</a>
                    <a href='/'>Contributors</a>
                    <a href='/'>Support</a>
                    <a href='/'>Contact</a>
                </div>
            </div>
        </header>
        <div className='flex flex-row'>
            <main id='mainContent' className='lg:basis-5/6 h-175 overflow-y-scroll w-full border-1 lg:me-2 p-1 max-lg:mx-auto'>
                <Outlet />
            </main>
            <div id='sidebar' className='relative basis-1/6 border-1 min-h-[75dvh] -top-12'>
                <div className='border-1 p-1 m-1'>
                    <h1>test</h1>
                    testing the text to see if it all fits all the time
                </div>
            </div>
        </div>
    </div>
  );
}

export default Layout;