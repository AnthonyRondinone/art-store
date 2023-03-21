import PropTypes from 'prop-types';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FeaturedImage } from '../paintingSubComponents';
export const ImageEditor = ({
    setFeaturedImage,
    featuredImageURLData,
    setFeaturedImageURLData,
    setAltImages,
    setAltImageURLs,
    altImageURLs,
}) => {

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
            const files = acceptedFiles;
            for (var i = 0; i < files.length; i++) {
                const file = files[i];
                const fileReader = new FileReader();
                fileReader.addEventListener('load', () => {
                    setAltImages(prevState => [...prevState, file])
                    setAltImageURLs((prevState) => [...prevState, fileReader.result]);
                }, { once: true });
                fileReader.readAsDataURL(file)
            }
        }
    });

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
                <div {...getRootPropsFeaturedImage({ className: 'dropzone' })}>
                    <div className='dropzone-upload-container'>
                        <input {...getInputPropsFeaturedImage()} />
                        <p className='dropzone-prompt' >Drag 'n' drop Featured Image here</p>
                    </div>
                </div>
                <div {...getRootPropsAltImages({ className: 'dropzone' })}>
                    <div className='dropzone-upload-container'>
                        <input {...getInputPropsAltImages()} />
                        <p className='dropzone-prompt' >Drag 'n' drop Alt Images here</p>
                    </div>
                </div>
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

ImageEditor.propTypes = {
    setFeaturedImage: PropTypes.func.isRequired,
    setFeaturedImageURLData: PropTypes.func.isRequired,
    setAltImages: PropTypes.func.isRequired,
    setAltImageURLs: PropTypes.func.isRequired,
    featuredImageURLData: PropTypes.shape({
        image_url: PropTypes.string
    }).isRequired,
    altImageURLs: PropTypes.array.isRequired,
};