import PropTypes from 'prop-types';
import React from 'react';

export const DetailsEditor = ({
    detailRefs,
}) => {
    return (
        <div className='details-contain' >
            <input 
                className='title'
                placeholder='Title'
                ref={detailRefs.title}
            />
            <input 
                className='dimensions'
                placeholder='Dimensions'
                ref={detailRefs.dimensions}
            />
            <input 
                className='price'
                placeholder='Price'
                ref={detailRefs.price}
            />
            <input 
                className='medium'
                placeholder='Medium'
                ref={detailRefs.medium}
            />
            <label>The Story:</label>
            <textarea 
                className='story'
                ref={detailRefs.story}
            />
        </div>
    );
}

DetailsEditor.propTypes = {
    detailRefs: PropTypes.shape({
        title: PropTypes.object.isRequired,
        dimensions: PropTypes.object.isRequired,
        price: PropTypes.object.isRequired,
        medium: PropTypes.object.isRequired,
        story: PropTypes.object.isRequired,
    }).isRequired
}
