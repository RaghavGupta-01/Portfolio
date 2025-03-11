import React, { useEffect, useRef } from 'react'
import logo from '../assets/app-logo-white.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const menuRef = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="flex items-center w-full py-4 px-8">
            <div className="flex-none">
                <img src={logo} className="h-14 w-14" alt="logo" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex flex-1 justify-end">
                <button
                    ref={menuRef}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white hover:text-gray-300"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Desktop menu - add onClick to links */}
            <div className="hidden md:flex flex-1 justify-center">
                <div className="flex items-center px-6 py-2 bg-gray-100 rounded-full border border-gray-700">
                    <div className="flex space-x-6 items-center">
                        <a href="#" onClick={handleClick} className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">About Me</a>
                        <a href="#" onClick={handleClick} className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">My Skills</a>
                        <a href="#" onClick={handleClick} className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#" onClick={handleClick} className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">Social Links</a>
                    </div>
                </div>
            </div>

            {/* Mobile menu dropdown - add ref and onClick to links */}
            {isMenuOpen && (
                <div ref={menuRef} className="absolute top-20 left-0 right-0 bg-white md:hidden p-4">
                    <div className="flex flex-col space-y-2">
                        <a href="#" onClick={handleClick} className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">About Me</a>
                        <a href="#" onClick={handleClick} className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">My Skills</a>
                        <a href="#" onClick={handleClick} className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#" onClick={handleClick} className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">Social Links</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;