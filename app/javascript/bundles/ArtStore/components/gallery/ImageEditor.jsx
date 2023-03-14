import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FeaturedImage } from '../paintingSubComponents';
export const ImageEditor = ({
    files,
    setFiles,
    featuredImageId,
    setFeaturedImageId,
    setFeaturedImage,
    featuredImageURL,
    setFeaturedImageURL,
    setAltImages,
    setAltImageURLs,
    altImageURLs
}) => {

    const { getRootProps: getRootPropsFeaturedImage, getInputProps: getInputPropsFeaturedImage } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            const file = acceptedFiles[0];
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                setFeaturedImage(file);
                setFeaturedImageURL(fileReader.result)
            };
            if (file) {
                fileReader.readAsDataURL(file);
            }
        }
    });

    const { getRootProps: getRootPropsAltImages, getInputProps: getInputPropsAltImages } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            const files = acceptedFiles;
            for (var i = 0, n = files.length; i < n; i++) {
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

    // updateDraggedFile(e) {
    //     let file = e[0];
    //     let fileReader = new FileReader();
    //     fileReader.onloadend = function () {
    //         this.setState({ imageFile: file, imageURL: fileReader.result });
    //     }.bind(this);
    //     if (file) {
    //         fileReader.readAsDataURL(file);
    //         $('.drag-zone').remove();
    //     }
    // }

    const formatAcceptedFiles = (acceptedFiles) => {
        // find last id number
        let lastId;
        if (files.length > 0) {
            lastId = files[files.length - 1].id;
        } else if (files.length === 1) {
            lastId = files[0].id;
        } else {
            lastId = 0;
            setFeaturedImageId(1)
        }
        // start id from last id and alwasy go up
        return acceptedFiles.map((file) => {
            const calculatedId = lastId + 1;
            return { ...file, preview: URL.createObjectURL(file), id: calculatedId }
        })
    };

    const removeImage = (fileId) => {
        const filesSansRemovedFile = files.filter(fls => fls.id !== fileId)
        if (filesSansRemovedFile.length === 0) {
            setFeaturedImageId(null)
        } else if (fileId === featuredImageId) {
            setFeaturedImageId(filesSansRemovedFile[filesSansRemovedFile.length - 1].id)
        }
        setFiles(filesSansRemovedFile)
    };

    const handleSelectFeaturedImage = (fileId) => {
        setFeaturedImageId(fileId)
    }

    const thumbs = altImageURLs.map((altImageURL, idx) => (
        <div className='img-wrap' key={`${idx}`} >
            <span className="close" onClick={() => removeImage(1)} >&times;</span>
            <div className='thumb' onClick={() => handleSelectFeaturedImage(1)} >
                <div className='thumb-inner' >
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
                featuredImageURL={featuredImageURL}
            />
            <div className='thumbs-container'>
                {thumbs}
            </div>
        </section>
    );
}