import React from 'react'

export const Layout = ({ children }) => {
  return (
    <section className='w-full h-screen flex dark:bg-slate-900'>
        {/* navbar */}
        <div className='w-1/6 relative h-full p-8 overflow-hidden backdrop-blur'>
            <div className='w-52 h-64 rounded-full absolute bg-gradient-to-t from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: -160, top: 100 }} />
            <div className='w-52 h-64 rounded-full absolute bg-gradient-to-b from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: 200, top: 300 }} />
            <div className='w-52 h-64 rounded-full absolute bg-gradient-to-l from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: -100, top: 480 }} />
            <div className='flex w-full justify-between items-center backdrop-blur-lg z-10'>
                <div className='text-base text-slate-300 font-black'>
                    <img src={logo} alt="logo" className="w-16 h-auto" />
                </div>
                <button>
                    <HiChatAlt2 color='rgb(148 163 184)' />
                </button>
            </div>
            <div className='mt-20 flex flex-col w-full gap-1'>
                { page_buttons(true).map((el, idx) => <NavbarBtn element={el} key={idx} index={idx} />) }
            </div>
        </div>
        { children }
    </section>
  )
}
