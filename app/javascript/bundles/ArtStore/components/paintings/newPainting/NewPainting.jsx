import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ImageEditor } from './ImageEditor';
import { DetailsEditor } from './DetailsEditor';

export const NewPainting = ({
    createPainting,
}) => {
    const [featuredImage, setFeaturedImage] = useState(null);
    const [featuredImageURLData, setFeaturedImageURLData] = useState({ image_url: ''});
    const [altImages, setAltImages] = useState([]);
    const [altImageURLs, setAltImageURLs] = useState([]);

    const [details, setDetails] = useState({
        title: '',
        dimensions: '',
        price: '',
        medium: '',
        story: '',
    })

    const handleSubmit = (e, details, featuredImage, altImages) => {
        e.preventDefault();
        createPainting(details, featuredImage, altImages);
    }  

    return (
        <div>
            <ImageEditor
                setAltImages={setAltImages}
                setAltImageURLs={setAltImageURLs}
                altImageURLs={altImageURLs}
                featuredImage={featuredImage}
                setFeaturedImage={setFeaturedImage}
                featuredImageURLData={featuredImageURLData}
                setFeaturedImageURLData={setFeaturedImageURLData}
            />
            <DetailsEditor
                details={details}
                setDetails={setDetails}
            />
            <button 
                className='secondary-button'
                onClick={(e) => handleSubmit(e, details, featuredImage, altImages)}
            >
                Save
            </button>
        </div>
    );
}

NewPainting.propTypes = {
    createPainting: PropTypes.func.isRequired,
};