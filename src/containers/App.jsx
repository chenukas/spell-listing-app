import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { spellsActions } from "../actions";
import App from "./../components";

function mapStateToProps(state) {
    return {
        spellsState: state.spellsState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        spellsActions: bindActionCreators(spellsActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);