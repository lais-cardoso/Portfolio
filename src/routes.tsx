import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/home';
import Curriculum from './curriculum'
import Projects from '../src/projects'
import NotFound from '../src/notFound'

function Root(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/curriculum" element={<Curriculum />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route element={<NotFound/>} path="*" />
            </Routes>
        </Router>
    )
}

export default Root;