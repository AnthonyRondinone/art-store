import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { FeaturedImage } from './paintingSubComponents'
import { Link } from 'react-router-dom'

export const PaintingsIndex = ({
    fetchPaintings,
    paintings,
}) => {

    useEffect(() => {
        if (paintings.length === 0) fetchPaintings();
    }, [])

    const createPaintingsList = (paintings) => {
        return paintings.map((painting) => {
            return (
                <Link
                    key={painting.id}
                    to={`/painting/${painting.id}`}
                    state={painting}
                >
                    <li className="li-painting-contain">
                        <FeaturedImage
                            featuredImageURLData={painting.featured_image_url_data}
                        />
                        <div className="painting-contain-title painting-title" >
                            {painting.title}
                        </div>
                    </li>
                </Link>
            )
        })
    }

    return (
        <ul>
            {createPaintingsList(paintings)}
        </ul>
    )
};

PaintingsIndex.propTypes = {
    paintings: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        dimensions: PropTypes.string.isRequired,
        medium: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        story: PropTypes.string.isRequired,
        alt_images_url_data: PropTypes.arrayOf(PropTypes.shape({
            image_url: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
        featured_image_url_data: PropTypes.shape({
            image_url: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
         })
    })).isRequired,
}