import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    justifyContent: 'center'
};

const mainImageStyle = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    height: 400,
    minWidth: 0,
    padding: 4,
    boxSizing: 'border-box'
};

const mainInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


export const PaintingModify = (props) => {
    const [files, setFiles] = useState([]);
    const [featuredImageId, setFeaturedImageId] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            const formattedAcceptedFiles = formatAcceptedFiles(acceptedFiles);
            // set current files plus the new accepted file to State
            setFiles((prevState) => ([
                ...prevState,
                ...formattedAcceptedFiles
            ]))
        }
    });

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
        return acceptedFiles.map((file, idx) => {
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

    const mainImage = files.filter(fls => fls.id === featuredImageId).map((file, idx) => (
        <div className='mainImage img-wrap' style={mainImageStyle} key={`${file.name}-${idx}`}>
            <span className="close" onClick={() => removeImage(file.id)} >&times;</span>
            <div className='mainInner' style={mainInner}>
                <img
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    const thumbs = files.filter(fls => fls.id !== featuredImageId).map((file, idx) => (
        <div className='thumb img-wrap' style={thumb} key={`${file.name}-${idx}`}>
            <span className="close" onClick={() => removeImage(file.id)} >&times;</span>
            <div className='thumbInner' style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <div className='dropzone-upload-container'>
                    <input {...getInputProps()} />
                    <p className='dropzone-prompt' >Drag 'n' drop some files here, or click to select files</p>
                </div>
            </div>
            {mainImage}
            <div style={thumbsContainer}>
                {thumbs}
            </div>
        </section>
    );
}