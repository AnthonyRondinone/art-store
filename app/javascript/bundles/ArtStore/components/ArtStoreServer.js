import React from 'react';
import LandingPageContainer from '../containers/LandingPageContainer';
import NavBarContainer from '../containers/NavBarContainer';
import TheStoryContainer from '../containers/TheStoryContainer';
import PaintingsIndexContainer from '../containers/PaintingsIndexContainer';
import ContactContainer from '../containers/ContactContainer';
import NewPaintingContainer from '../containers/NewPaintingContainer';
import { PaintingShow } from './paintings/PaintingShow';
import './stylesheets/MainLayout.css'
import { Routes, Route } from 'react-router-dom';

const ArtStore = () => (
    <div className='main-body'>
        <header>
            <NavBarContainer component={NavBarContainer} />
        </header>
        <div className='main'>
            <aside className='left' />
            <main>
                <Routes>
                    <Route path="/" element={ <LandingPageContainer /> } />
                    <Route path="/gallery" element={<PaintingsIndexContainer /> } />
                    <Route path="/thestory" element={<TheStoryContainer /> } />
                    <Route path="/contact" element={<ContactContainer /> } />
                    <Route path="/painting/:id" element={<PaintingShow /> } />
                    <Route path="/painting/new" element={<NewPaintingContainer /> } />
                </Routes>
            </main>
            <aside className='right' />
        </div>
    </div>
  );

export default ArtStore;
