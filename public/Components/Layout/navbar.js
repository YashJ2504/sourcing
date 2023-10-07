import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Navbar() {
    const router = useRouter();

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [showSideBar,setShowSideBar] = useState(false);
    const handleLogout = () => {
        localStorage.clear();
        router.push('/login');
    }
    useEffect(() => {
        if(localStorage.getItem('token') != undefined)
        {
            setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false);
        }
      }, []);


    const handleMenuToggle = () => {
        
        setShowSideBar(!showSideBar);
    }
    return (
        
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <nav className="main-nav" >
                    
                    <img className="logo" src="/assets/images/sourcing-logo.jpeg" alt="" style={{marginTop:"20px"}}/>
                    <ul className="nav" style={showSideBar ? {display:"block",backgroundColor:"white"} : {display:"none",backgroundColor:"white"}}>
                    <li className="scroll-to-section"><a href="/#top" className={router.pathname == "/" ? 'active' : ''}>Home</a></li>
                    <li className="scroll-to-section"><a href="/#about">About</a></li>
                    <li className="scroll-to-section"><a href="/#services">Feature</a></li>
                    <li className="scroll-to-section">
                        <a href="/#contact">Contact Us?</a>
                    </li>
                    {
                        isLoggedIn ?
                        (
                            <>
                                <li><a href="/search" className={router.pathname == "/search" ? 'active' : ''}>Search</a></li>
                                <li><a href="/liked-candidates" className={router.pathname == "/liked-candidates" ? 'active' : ''}>Liked Candidates</a></li>
                                <li>
                                    
                                    <a onClick={handleLogout} style={{cursor:"pointer"}}>logout</a>
                                </li>
                                <li></li>

                            </>
                        ):
                        (
                            <li>
                                <div className="border-first-button">
                                <a href="/login">Register</a>
                                </div>
                            </li>
                        )
                    }
                    
                    </ul>
                    <a className='menu-trigger' onClick={handleMenuToggle}  >
                    <span>Menu</span>
                    </a>
                    
                </nav>
                </div>
            </div>
            </div>
        </header>  
    )
}