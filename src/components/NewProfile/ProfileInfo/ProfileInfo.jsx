import React from 'react'
import classes from './ProfileInfo.module.css'
import defaultAvatar from '../../../assets/defaultAvatar.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  
  return (
    <div className={classes.profileInfo}>
      <h1>{props.profile.fullName}</h1>
      <div>
        <ProfileStatusWithHooks 
        upDateStatus={props.upDateStatus} 
        status={props.status}
        randomUserId={props.randomUserId}
        loggedInUserId={props.loggedInUserId}
        />
      </div>
      <div>
        <span><b>Обо мне:</b> {props.profile.aboutMe}</span>
        <p></p>
      </div>
      <div className={classes.profileInfoContainer}>
        <div>
          <img alt='profilePic' src={props.profile.photos.large == undefined ? defaultAvatar : props.profile.photos.large} />
        </div>
        <div className={classes.contacts}>
          <ul>
            <b>Контакты:</b>
            <li>facebook: <span><a href='#'>{props.profile.contacts.facebook}</a></span></li>
            <li>website: <span><a href='#'>{props.profile.contacts.website}</a></span></li>
            <li>vk: <span><a href='#'>{props.profile.contacts.vk}</a></span></li>
            <li>twitter: <span><a href='#'>{props.profile.contacts.twitter}</a></span></li>
            <li>instagram: <span><a href='#'>{props.profile.contacts.instagram}</a></span></li>
            <li>youtube: <span><a href='#'>{props.profile.contacts.youtube}</a></span></li>
            <li>github : <span><a href='#'>{props.profile.contacts.github}</a></span></li>
            <li>mainilnk: <span><a href='#'>{props.profile.contacts.mainLink}</a></span></li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <b>Ищу работу:</b> {props.profile.lookingForAJob == true ? <span>Да</span> : <span>Нет</span>}
          </li>
          <li>
            <b>Какую работу ищу:</b> <span>{props.profile.lookingForAJobDescription}</span>
          </li>
        </ul>
      </div>
      <hr/>
    </div>
  )
}
export default ProfileInfo 