import {connect} from 'react-redux'
import {  addNewPostAC, addNewPostThunkCreator } from '../../../../redux/profileReducer'
import AddNewPost from './AddNewPost'
import { postsSelectors } from '../../../../redux/selectors'


let mapStateToProps = (state) => ({
posts: postsSelectors.getPosts(state),
profile: postsSelectors.getProfile(state),
newPostText: postsSelectors.getNewPostsText(state),
login: postsSelectors.getLogin(state),
})

const AddNewPostContainer = connect(mapStateToProps, { addNewPostAC, addNewPostThunkCreator })(AddNewPost)
export default AddNewPostContainer