import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className='w-full h-screen'>
                {children}
            </main>
        </div>
    )
}

export default Layout