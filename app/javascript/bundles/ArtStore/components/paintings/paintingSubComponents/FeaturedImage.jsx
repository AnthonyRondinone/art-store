import PropTypes from 'prop-types';
import React from 'react';

export const FeaturedImage = ({
    featuredImageURLData,
}) => {
    return (
        <div
            className='main-image img-wrap'
        >
            <div className='main-inner'>
                <img 
                    className='img'
                    src={featuredImageURLData.image_url}
                />
            </div>
        </div>
    )
};

FeaturedImage.propTypes = {
    featuredImageURLData: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        id: PropTypes.number,
    }).isRequired
};