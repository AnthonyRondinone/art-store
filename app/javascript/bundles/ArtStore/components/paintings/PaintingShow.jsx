import React, { useState } from 'react';
import { useLocation, useParams } from "react-router-dom"
import { FeaturedImage, PaintingDetails, AltImages } from './paintingSubComponents'

export const PaintingShow = () => {
    const location = useLocation();
    const painting = location.state;
    const [featuredImageURLData, setFeaturedImageURLData] = useState(
            painting.featured_image_url_data
        );
    const [altImagesURLData, setAltImagesURLData] = useState(
            painting.alt_images_url_data
        );

    const updateFeaturedImage = (imageID) => {
        const allImages = [...altImagesURLData, featuredImageURLData];
        setFeaturedImageURLData(allImages.find(image => image.id === imageID));
        setAltImagesURLData(allImages.filter(image => image.id !== imageID));
    }

    return (
        <div className='painting-show-contain'>
            <div>
                <FeaturedImage
                    featuredImageURLData={featuredImageURLData}
                />
                <AltImages
                    altImagesURLData={altImagesURLData}
                    updateFeaturedImage={updateFeaturedImage}
                />
            </div>
            < PaintingDetails
                painting={painting}
            />
        </div>
    )
};