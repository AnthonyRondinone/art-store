import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { FeaturedImage } from '../paintingSubComponents'
import { Link } from 'react-router-dom'

export const Gallery = ({
    fetchPaintings,
    paintings
}) => {
    useEffect(() => {fetchPaintings()}, [])

    const createPaintingsList = (paintings) => {
        return Object.values(paintings).map((painting) => {
            return (
                <li
                    className="li-painting-contain"
                    key={painting.id}
                >
                    <Link
                        className='nav-option-link'
                        key={painting.id}
                        to={`/painting/${painting.id}`}
                        state={painting}
                    >
                        <FeaturedImage
                            featuredImageURL={painting.featured_image_url_data.featured_image_url}
                        />
                        <div className="painting-contain-title painting-title" >
                            {painting.title}
                        </div>
                    </Link>
                </li>
            )
        })
    }

    return (
        <ul>
            {paintings ? createPaintingsList(paintings) : "THE GALLERY"}
        </ul>
    )
};

Gallery.propTypes = {};