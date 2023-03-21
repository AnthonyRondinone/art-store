import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { ImagesEditor } from './ImagesEditor';
import { DetailsEditor } from './DetailsEditor';

export const NewPainting = ({
    createPainting,
}) => {
    const [featuredImage, setFeaturedImage] = useState(null);
    const [altImages, setAltImages] = useState([]);
    const detailRefs = {
        title: useRef(),
        dimensions: useRef(),
        price: useRef(),
        medium: useRef(),
        story: useRef(),
    };

    const handleSubmit = (e, detailRefs, featuredImage, altImages) => {
        e.preventDefault();
        createPainting(detailRefs, featuredImage, altImages);
    };

    return (
        <div>
            <ImagesEditor
                setAltImages={setAltImages}
                setFeaturedImage={setFeaturedImage}
            />
            <DetailsEditor
                detailRefs={detailRefs}
            />
            <button 
                className='secondary-button'
                onClick={(e) => handleSubmit(e, detailRefs, featuredImage, altImages)}
            >
                Save
            </button>
        </div>
    );
}

NewPainting.propTypes = {
    createPainting: PropTypes.func.isRequired,
};