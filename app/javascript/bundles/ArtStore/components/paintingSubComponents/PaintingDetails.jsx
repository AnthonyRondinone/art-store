import React from 'react';

export const PaintingDetails = ({painting}) => {
    debugger
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
                {painting.story.replace(/\\n/g, '\n')}
            </li>
        </div>
    )
}