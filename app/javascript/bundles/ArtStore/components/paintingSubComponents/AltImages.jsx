import PropTypes from 'prop-types';
import React from 'react';

export const AltImages = ({
    featuredImageURL,
    altImageURLs
}) => {
    debugger
    const thumbs = altImageURLs.map((altImageURL, idx) => (
        <div className='img-wrap' key={`${idx}`} >
            <div className='thumb' >
                <div className='thumb-inner' >
                    <img
                        className='img'
                        src={altImageURL}
                    />
                </div>
            </div>
        </div>
    ));

    return (
        <>
            {thumbs}
        </>
    )
};

AltImages.propTypes = {};