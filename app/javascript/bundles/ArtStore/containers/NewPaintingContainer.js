import { connect } from 'react-redux';
import { NewPainting } from '../components/paintings/newPainting/NewPainting';
import { createPainting } from '../actions/paintingsActions'

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    createPainting: (detailRefs, featuredImage, altImages) => dispatch(createPainting(detailRefs, featuredImage, altImages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPainting);