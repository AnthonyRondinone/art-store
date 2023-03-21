import { connect } from 'react-redux';
import { NewPainting } from '../components/paintings/newPainting/NewPainting';
import { createPainting } from '../actions/paintingsActions'

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    createPainting: (detailRefs, featuredImage, altImages) => dispatch(createPainting(detailRefs, featuredImage, altImages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPainting);