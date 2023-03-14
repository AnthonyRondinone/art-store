import React from 'react';
import LandingPageContainer from '../containers/LandingPageContainer';
import NavBarContainer from '../containers/NavBarContainer';
import TheStoryContainer from '../containers/TheStoryContainer';
import GalleryContainer from '../containers/GalleryContainer';
import ContactContainer from '../containers/ContactContainer';
import { PaintingModify } from '../components/gallery/PaintingModify';
import { PaintingShow } from '../components/gallery/PaintingShow';
import './stylesheets/MainLayout.css'
import { Routes, Route } from 'react-router-dom';

// This could be specialized for server rendering
// For example, if using React-Router, we'd have the SSR setup here.

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
                    <Route path="/gallery" element={<GalleryContainer /> } />
                    <Route path="/thestory" element={<TheStoryContainer /> } />
                    <Route path="/contact" element={<ContactContainer /> } />
                    <Route path="/painting/:id" element={<PaintingShow /> } />
                    <Route path="/painting/:id/edit" element={<PaintingModify /> } />
                </Routes>
            </main>
            <aside className='right' />
        </div>
    </div>
  );

export default ArtStore;
