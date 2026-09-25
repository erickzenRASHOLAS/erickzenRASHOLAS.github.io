import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './App.css'
import Hello from '../core/Hello.jsx'
import Footer from '../core/Footer.jsx'
import Header from "../core/Header.jsx";
import Body from "../core/Body.jsx";


function App() {
    return (
        <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
            <Header/>
            <Body/>
            <Footer />
        </main>
    );
}

export default App;
