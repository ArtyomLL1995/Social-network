import Friends from './Friends'
import { connect } from 'react-redux'
import { setUserProfile } from '../../../redux/profileReducer'


let mapStateToProps = (state) => {
    
    return {
        friends: state.usersReducer.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        setProfile: (userId) => {
            dispatch(setUserProfile(userId))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer


