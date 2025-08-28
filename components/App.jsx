import React from "react";
import Footer from "./Footer";
import {  HashRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Feedback from "../pages/FeedBack";

function App () {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Feedback" element={<Feedback />} />
            </Routes>
            <Footer />
        </main>

    )
}

export default App;