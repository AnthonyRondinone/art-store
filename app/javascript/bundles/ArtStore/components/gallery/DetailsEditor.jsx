import React, { useEffect, useState } from 'react';

export const DetailsEditor = ({
    details,
    setDetails
}) => {

    const handleDetailChange = (e) => {
        setDetails((prevState) => ({
            ...prevState, [e.target.className]: e.target.value
        }))
    }

    return (
        <div className='details-contain' >
            <input 
                className='title'
                placeholder='Title'
                value={details.title}
                onChange={(e) => {handleDetailChange(e)}}
            />
            <input 
                className='dimensions'
                placeholder='Dimensions'
                onChange={(e) => {handleDetailChange(e)}}
            />
            <input 
                className='price'
                placeholder='Price'
                onChange={(e) => {handleDetailChange(e)}}
            />
            <input 
                className='medium'
                placeholder='Medium'
                onChange={(e) => {handleDetailChange(e)}}
            />
            <label>The Story:</label>
            <textarea 
                className='story'
                onChange={(e) => {handleDetailChange(e)}}
            />
        </div>
    );
}
