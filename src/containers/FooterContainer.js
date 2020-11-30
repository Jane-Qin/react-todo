import { connect } from "react-redux";
import { setFilter } from "../actions/index";
import Footer from "../components/Footer";
import {getFilter} from '../selector/index'

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
