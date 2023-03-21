import { connect } from 'react-redux';
import { PaintingsIndex } from '../components/paintings/PaintingsIndex';
import { fetchPaintings } from '../actions/paintingsActions'
import { getPaintingsArray } from '../selectors/paintings'

const mapStateToProps = (state) => ({
    paintings: getPaintingsArray(state),
});

const mapDispatchToProps = dispatch => ({
    fetchPaintings: () => dispatch(fetchPaintings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaintingsIndex);