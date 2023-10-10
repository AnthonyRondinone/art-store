import PropTypes from 'prop-types';
import React from 'react';

const detailTypes = ['title', 'dimensions', 'price', 'medium']

export const DetailsEditor = ({
    details,
    setDetails
}) => {

    const handleChange = (e) => {
        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [e.target.className]: e.target.value
            }
        })
    }

    const detailInputs = (
        detailTypes.map((detailType) => {
            return (
                <input
                    key={detailType}
                    name={detailType}
                    className={detailType}
                    placeholder={`${detailType[0].toUpperCase()}${detailType.slice(1)}`}
                    value={details[detailType] || ''}
                    onChange={handleChange}
                />
            )
        })
        
    )

    return (
        <div className='details-contain' >
            {detailInputs}
        </div>
    );
}

// DetailsEditor.propTypes = {
//     detailRefs: PropTypes.shape({
//         title: PropTypes.object.isRequired,
//         dimensions: PropTypes.object.isRequired,
//         price: PropTypes.object.isRequired,
//         medium: PropTypes.object.isRequired,
//         story: PropTypes.object.isRequired,
//     }).isRequired
// }
