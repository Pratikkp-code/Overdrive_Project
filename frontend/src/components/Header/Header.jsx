import React from 'react'
import{Link,NavLink} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {WiDaySunny, WiCloudy, WiRain} from 'react-icons/wi';
import {MdMovie} from "react-icons/md";
import {GiMusicalNotes} from "react-icons/gi";
import { MdEmojiEmotions } from 'react-icons/md';
import { MdOutlineArticle } from 'react-icons/md';


export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src="/logo.png"
                        className="mr-3 h-20" 
                        alt="logo" />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-[#0b4a77] hover:bg-[#3ba4f1] focus:ring-4 focus:ring-[#0b4a77] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to={'/'}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         border-b 
                                         ${isActive ? 'border-[#0b4a77]': 
                                            'border-gray-700'}
                                        border-gray-100
                                         hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 
                                        hover:text-[#3ba4f1] 
                                        lg:p-0`
                                    }
                                >
                                    <FaHome/>Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/news'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         border-b 
                                         ${isActive ? 'border-[#0b4a77]' : 
                                            'border-gray-700'}
                                        border-gray-100
                                         hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 
                                        hover:text-[#3ba4f1] 
                                        lg:p-0`
                                    }
                                >
                                   < MdOutlineArticle/> News
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/weather'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         border-b 
                                         ${isActive ? 'border-[#0b4a77]' : 
                                            'border-gray-700'}
                                        border-gray-100
                                         hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 
                                        hover:text-[#3ba4f1]
                                        lg:p-0`
                                    }
                                >
                                   <WiDaySunny/> Weather
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/memes'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         border-b 
                                         ${isActive ? 
                                            'border-[#0b4a77]' : 
                                            'border-gray-700'}
                                        border-gray-100
                                         hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 
                                        hover:text-[#3ba4f1] 
                                        lg:p-0`
                                    }
                                >
                                  <MdEmojiEmotions/> Memes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/movies'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         border-b 
                                         ${isActive ? 
                                            'border-[#0b4a77]' : 
                                            'border-gray-700'}
                                        border-gray-100
                                         hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 
                                        hover:text-[#3ba4f1]
                                        lg:p-0`
                                    }
                                >
                                   <MdMovie/>Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/music'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                         border-b 
                                         ${isActive ? 
                                            'border-[#0b4a77]' : 
                                            'border-gray-700'}
                                        border-gray-100
                                         hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 
                                        hover:text-[#3ba4f1] 
                                        lg:p-0`
                                    }
                                >
                                  <GiMusicalNotes/> Music
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}