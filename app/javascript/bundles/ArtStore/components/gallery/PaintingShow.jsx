import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useLocation, useParams } from "react-router-dom"
import { FeaturedImage, PaintingDetails, AltImages } from '../paintingSubComponents'

export const PaintingShow = () => {
    const location = useLocation();
    const painting = location.state;
    debugger
    const [featuredImageURL, setFeaturedImageURL] = useState(painting.featured_image_url_data.featured_image_url);
    const [altImageURLs, setAltImageURLs] = useState(painting.alt_images_url_data);
    return (
        <div className='painting-show-contain'>
            <div>
                <FeaturedImage
                    featuredImageURL={featuredImageURL}
                    setFeaturedImageURL={setFeaturedImageURL}
                />
                <AltImages
                    altImageURLs={altImageURLs}
                    featuredImageURL={featuredImageURL}
                />
            </div>
            < PaintingDetails
                painting={painting}
            />
        </div>
    )
};

PaintingShow.propTypes = {};