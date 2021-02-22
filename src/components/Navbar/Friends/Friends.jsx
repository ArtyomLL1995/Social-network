import React from 'react'
import Friend from './Friend/Friend'

const Friends = (props) => {
    
    let friends = props.friends.map(
        function friendsMap(friend) {
            if (friend.followed) {
                return <Friend
                    id={friend.id}
                    followed={friend.followed}
                    avatar={friend.photos.small}
                    name={friend.name}
                    setProfile={props.setProfile} />
            }
        }
    )
    return (
        <div>
            <div><h3>Friends</h3></div>
            {friends}
        </div>
    )
}

export default Friends