import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo 
            randomUserId={props.profile.userId}
            loggedInUserId={props.userId}
            status={props.status} 
            profile={props.profile}
            upDateStatus={props.upDateStatus}
            />
            {props.userId === props.profile.userId ?  <Posts posts={props.posts}/> : null}
           
        </div>
    )
}

export default Profile;