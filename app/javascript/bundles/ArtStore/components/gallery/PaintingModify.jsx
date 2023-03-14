import React, { useEffect, useState } from 'react';
import { ImageEditor } from './ImageEditor';
import { DetailsEditor } from './DetailsEditor';

export const PaintingModify = (props) => {
    const [files, setFiles] = useState([]);
    const [featuredImageId, setFeaturedImageId] = useState(null);
    const [featuredImage, setFeaturedImage] = useState(null);
    const [featuredImageURL, setFeaturedImageURL] = useState(null);
    const [altImages, setAltImages] = useState([]);
    const [altImageURLs, setAltImageURLs] = useState([]);

    const [details, setDetails] = useState({
        title: '',
        dimensions: '',
        price: '',
        medium: '',
        story: '',
    })

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("painting[title]", details.title);
        formData.append("painting[dimensions]", details.dimensions);
        formData.append("painting[price]", details.price);
        formData.append("painting[medium]", details.medium);
        formData.append("painting[story]", details.story);
        formData.append("painting[featured_image]", featuredImage);
        altImages.forEach((altImage) => formData.append("painting[alt_images][]", altImage))

        debugger
        const response = await fetch('/paintings', {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            processData: false,
            // contentType: false,
            body: formData,
        })
        // const notifications = await response.json();
        debugger
    }  

    return (
        <div>
            <ImageEditor 
                files={files}
                setFiles={setFiles}
                featuredImageId={featuredImageId}
                setFeaturedImageId={setFeaturedImageId}
                setAltImages={setAltImages}
                setAltImageURLs={setAltImageURLs}
                altImageURLs={altImageURLs}
                featuredImage={featuredImage}
                setFeaturedImage={setFeaturedImage}
                featuredImageURL={featuredImageURL}
                setFeaturedImageURL={setFeaturedImageURL}
            />
            <DetailsEditor 
                details={details}
                setDetails={setDetails}
            />
            <button 
                className='secondary-button'
                onClick={(e) => handleSubmit(e)}
            >
                Save
            </button>
        </div>
    );
}