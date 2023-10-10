import React from 'react';
import loadingGif from '../../../../../assets/images/loading-loader.gif'

export const Loader = () => {

    return (
        <div>
            <div className='loader-contain'>
                <img className='loaderImg' src={loadingGif}></img>
            </div>
        </div>
    )
};