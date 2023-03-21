import { connect } from 'react-redux';
import { NewPainting } from '../components/paintings/newPainting/NewPainting';
import { createPainting } from '../actions/paintingsActions'

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    createPainting: (details, featuredImage, altImages) => dispatch(createPainting(details, featuredImage, altImages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPainting);