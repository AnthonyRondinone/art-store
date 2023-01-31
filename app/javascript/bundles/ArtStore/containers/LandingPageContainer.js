// Simple example of a React "smart" component

import { connect } from 'react-redux';
import LandingPage from '../components/landingPage/LandingPage';
// import * as actions from '../actions/landingPageActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = () => ({});
// Don't forget to actually use connect!
// Note that we don't export LandingPage, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps)(LandingPage);
