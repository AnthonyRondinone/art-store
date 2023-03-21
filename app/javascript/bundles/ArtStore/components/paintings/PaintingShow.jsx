import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
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
    const allImages = [...altImagesURLData, featuredImageURLData];
    const [featuredImageId, setFeaturedImageId] = useState(painting.featured_image_url_data.id);

    useEffect(() => {
        setFeaturedImageURLData(allImages.find(image => image.id === featuredImageId));
        setAltImagesURLData(allImages.filter(image => image.id !== featuredImageId));
    }, [featuredImageId]);

    return (
        <div className='painting-show-contain'>
            <div>
                <FeaturedImage
                    featuredImageURLData={featuredImageURLData}
                />
                <AltImages
                    altImagesURLData={altImagesURLData}
                    setFeaturedImageId={setFeaturedImageId}
                />
            </div>
            < PaintingDetails
                painting={painting}
            />
        </div>
    )
};
