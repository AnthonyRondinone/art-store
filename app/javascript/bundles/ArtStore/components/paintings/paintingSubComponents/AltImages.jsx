import PropTypes from 'prop-types';
import React from 'react';

export const AltImages = ({
    altImagesURLData,
    setFeaturedImageId,
}) => {
    const altImageThumbNails = altImagesURLData.map((altImageURLData, idx) => (
        <div className='img-wrap' key={idx} >
            <div
                className='alt-image-thumb' 
                onClick={() => setFeaturedImageId(altImageURLData.id)}
            >
                <div className='alt-image-thumb-inner' >
                    <img
                        className='img'
                        src={altImageURLData.image_url}
                    />
                </div>
            </div>
        </div>
    ));

    return (
        <div className='alt-image-thumb-container'>
            {altImageThumbNails}
        </div>
    )
};

AltImages.propTypes = {
    setFeaturedImageId: PropTypes.func.isRequired,
    altImagesURLData: PropTypes.arrayOf(PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
};