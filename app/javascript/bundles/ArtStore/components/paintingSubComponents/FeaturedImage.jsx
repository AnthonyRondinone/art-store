import PropTypes from 'prop-types';
import React from 'react';

export const FeaturedImage = ({
    featuredImageURL
}) => {
    return (
        <div
            className='main-image img-wrap'
        >
            <div className='main-inner'>
                <img 
                    className='img'
                    src={featuredImageURL}
                />
            </div>
        </div>
    )
};

FeaturedImage.propTypes = {};