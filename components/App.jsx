import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Routes, Route, Link} from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Feedback from "../pages/FeedBack";

function App () {
    return (
        <Router>
            <div>
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} ></Route>
                        <Route path="/Projects" element={<Projects />} />
                        <Route path='/Resume' element={<Resume />} />
                        <Route path='/Contact' element={<Contact />} />
                        <Route path='/FeedBack' element={<Feedback />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>

    )
}

export default App;