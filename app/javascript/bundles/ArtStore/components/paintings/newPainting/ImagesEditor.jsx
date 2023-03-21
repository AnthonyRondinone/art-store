import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FeaturedImage } from '../paintingSubComponents';
export const ImagesEditor = ({
    setFeaturedImage,
    setAltImages,
}) => {
    const [featuredImageURLData, setFeaturedImageURLData] = useState({ image_url: '' });
    const [altImageURLs, setAltImageURLs] = useState([]);

    const {
        getRootProps: getRootPropsFeaturedImage,
        getInputProps: getInputPropsFeaturedImage 
    } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            const file = acceptedFiles[0];
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                setFeaturedImage(file);
                setFeaturedImageURLData({ image_url: fileReader.result})
            };
            if (file) {
                fileReader.readAsDataURL(file);
            }
        }
    });

    const {
        getRootProps: getRootPropsAltImages,
        getInputProps: getInputPropsAltImages
    } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            acceptedFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReader.addEventListener('load', () => {
                    setAltImages(prevState => [...prevState, file])
                    setAltImageURLs((prevState) => [...prevState, fileReader.result]);
                }, { once: true });
                fileReader.readAsDataURL(file)
            })
        }
    });

    const featuredImageUploader = (
        <div {...getRootPropsFeaturedImage({ className: 'dropzone' })}>
            <div className='dropzone-upload-container'>
                <input {...getInputPropsFeaturedImage()} />
                <p className='dropzone-prompt' >Drag 'n' drop Featured Image here</p>
            </div>
        </div>
    )

    const altImagesUploader = (
        <div {...getRootPropsAltImages({ className: 'dropzone' })}>
            <div className='dropzone-upload-container'>
                <input {...getInputPropsAltImages()} />
                <p className='dropzone-prompt' >Drag 'n' drop Alt Images here</p>
            </div>
        </div>
    )

    const altImageThumbNails = altImageURLs.map((altImageURL, idx) => (
        <div className='img-wrap' key={`${idx}`} >
            <span className="close" >&times;</span>
            <div className='alt-image-thumb' >
                <div className='alt-image-thumb-inner' >
                    <img
                        className='img'
                        src={altImageURL}
                    />
                </div>
            </div>
        </div>
    ));

    return (
        <section className="container">
            <div className='drop-zone-contain'>
                {featuredImageUploader}
                {altImagesUploader}
            </div>
            <FeaturedImage
                featuredImageURLData={featuredImageURLData}
            />
            <div className='alt-image-thumb-container'>
                {altImageThumbNails}
            </div>
        </section>
    );
}

ImagesEditor.propTypes = {
    setFeaturedImage: PropTypes.func.isRequired,
    setAltImages: PropTypes.func.isRequired,
};