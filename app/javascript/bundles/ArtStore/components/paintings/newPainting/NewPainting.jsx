import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { ImagesEditor } from './ImagesEditor';
import { DetailsEditor } from './DetailsEditor';
import { Loader } from '../../utilities/Loader'

export const NewPainting = ({
    createPainting,
    isLoading
}) => {
    const [featuredImage, setFeaturedImage] = useState(null);
    const [altImages, setAltImages] = useState([]);
    const [details, setDetails] = useState({})

    return (
        <div>
            {isLoading && <Loader />}
            <ImagesEditor
                setAltImages={setAltImages}
                setFeaturedImage={setFeaturedImage}
            />
            <DetailsEditor
                details={details}
                setDetails={setDetails}
            />
            <button 
                className='secondary-button'
                onClick={() => createPainting(details, featuredImage, altImages)}
                disabled={isLoading}
            >
                Save
            </button>
        </div>
    );
}

NewPainting.propTypes = {
    createPainting: PropTypes.func.isRequired,
};