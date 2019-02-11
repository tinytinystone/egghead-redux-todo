import { setVisibilityFilter } from "../actions";
import { connect } from "react-redux";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick() {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
