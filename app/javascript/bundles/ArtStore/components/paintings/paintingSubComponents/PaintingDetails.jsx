import PropTypes from 'prop-types';
import React from 'react';

export const PaintingDetails = ({painting}) => {
    return (
        <div className='painting-details-contain'>
            <li className='painting-title' >
                {painting.title}
            </li>
            <li className='painting-price'>
                {painting.price}
            </li>
            <span className='painting-dimentions' >
                {painting.dimensions}
            </span>
            <span className='painting-medium' >
                {painting.medium}
            </span>
            <li className='painting-story' >
                {painting.story}
            </li>
        </div>
    )
}

PaintingDetails.propTypes = {
    painting: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        dimensions: PropTypes.string.isRequired,
        medium: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        story: PropTypes.string.isRequired,
        alt_images_url_data: PropTypes.arrayOf(PropTypes.shape({
            image_url: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })),
        featured_image_url_data: PropTypes.shape({
            image_url: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    }).isRequired,
}
