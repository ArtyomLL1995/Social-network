import { postNewTextActionCreator } from '../../../redux/dialogsReducer'
import AddDialog from './AddDialog'
import {connect} from 'react-redux'
import { LoggedInRedirect } from '../../../hoc/LoggedInRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        state: state.dialogsReducer,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        postNewText: (postText) => {
            dispatch(postNewTextActionCreator(postText))
        }
    }
}

const AddDialogContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    LoggedInRedirect
)(AddDialog)

export default AddDialogContainer



