(this["webpackJsonpreact-first-project"]=this["webpackJsonpreact-first-project"]||[]).push([[4],{375:function(e,t,s){e.exports={postsContainer:"PostItem_postsContainer__1Sqqb",avatar:"PostItem_avatar__1voR6",userName:"PostItem_userName__2bW8A",postText:"PostItem_postText__9Pj6u",likesCount:"PostItem_likesCount__2Ngx8"}},376:function(e,t,s){e.exports={profileInfoContainer:"ProfileInfo_profileInfoContainer__-8ARQ",contacts:"ProfileInfo_contacts__4AHRP",profileInfo:"ProfileInfo_profileInfo__Vr2b1",addPhotoButtonContainer:"ProfileInfo_addPhotoButtonContainer__3jXc8",profilePictureContainer:"ProfileInfo_profilePictureContainer__36FKC",loadingPhotoContainer:"ProfileInfo_loadingPhotoContainer__1-ztw",hideLoading:"ProfileInfo_hideLoading__3NCLh",modal:"ProfileInfo_modal__1O-kv",modalContainer:"ProfileInfo_modalContainer__3lG6d",hideModalButton:"ProfileInfo_hideModalButton__3oxH-"}},377:function(e,t,s){e.exports={status:"ProfileStatus_status__3nqGG",changeStatus:"ProfileStatus_changeStatus__4OetC"}},379:function(e,t,s){"use strict";s.r(t);var o=s(0),n=s(7),r=s(8),i=s(12),a=s(13),c=s(1),l=s.n(c),d=s(26),u=s(6),j=s.n(u),h=s(9),p=(s(19),s(4),s(74),"ADD_NEW_POST"),b=function(e,t){return{type:p,postText:e,login:t}},f=s(375),x=s.n(f),O=s(76),g=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:x.a.postsContainer,children:[Object(o.jsx)("div",{className:x.a.avatar,children:Object(o.jsx)("img",{src:e.userPhoto||O.a,alt:"UserAvatar"})}),Object(o.jsx)("div",{className:x.a.userName,children:e.userName}),Object(o.jsx)("div",{className:x.a.postText,children:e.postText}),Object(o.jsx)("div",{className:x.a.likesCount,children:Object(o.jsxs)("span",{children:["Likes: ",e.likesCount]})})]})})},m=s(11),P=function(e){var t=e.posts.map((function(t){return Object(o.jsx)(g,{id:t.id,postText:t.postText,userName:t.userName,likesCount:t.likesCount,userPhoto:e.userPhoto},t.id)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(m.d,{initialValues:{postMessage:""},onSubmit:function(t,s){""!==t.postMessage&&(e.addNewPostThunkCreator(t.postMessage,e.login),s.resetForm())},children:function(e){return Object(o.jsxs)(m.c,{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("label",{htmlFor:"postMessage",children:"Add post"})}),Object(o.jsx)("div",{}),Object(o.jsx)(m.b,{as:"textarea",name:"postMessage",id:"postMessage",value:e.values.postMessage}),Object(o.jsx)("div",{}),Object(o.jsx)("button",{type:"submit",children:"Send"})]})}})}),Object(o.jsx)("h3",{children:"My Posts"}),Object(o.jsx)("div",{children:t})]})},v=s(53),I=Object(d.b)((function(e){return{posts:v.b.getPosts(e),profile:v.b.getProfile(e),newPostText:v.b.getNewPostsText(e),login:v.b.getLogin(e),userPhoto:e.headerReducer.userProfilePhoto}}),{addNewPostAC:b,addNewPostThunkCreator:function(e,t){return function(s){s(b(e,t))}}})(P),_=function(e){return Object(o.jsx)(I,{posts:e.posts})},C=s(56),k=s(376),N=s.n(k),T=s(38),y=s(377),U=s.n(y),S=function(e){var t=Object(c.useState)(!1),s=Object(T.a)(t,2),n=s[0],r=s[1],i=Object(c.useState)(e.status),a=Object(T.a)(i,2),l=a[0],d=a[1];Object(c.useEffect)((function(){d(e.status)}),[e.status]);var u=function(){if(e.loggedInUserId!==e.randomUserId)return null;r(!0)};return Object(o.jsx)(o.Fragment,{children:n?Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),e.upDateStatus(l)},onChange:function(e){d(e.currentTarget.value)},type:"text",value:l}),Object(o.jsx)("p",{})]}):Object(o.jsxs)("div",{id:"status-container",onMouseLeave:function(){var e=document.getElementById("statusChange");e&&(e.style.display="none")},className:U.a.status,children:[Object(o.jsx)("div",{onMouseEnter:function(){var t=document.getElementById("statusChange");e.loggedInUserId===e.randomUserId&&t&&(t.style.display="block")},children:Object(o.jsxs)("span",{onClick:u,children:[Object(o.jsx)("b",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "})," ",e.status]})}),Object(o.jsx)("div",{id:"statusChange",className:U.a.changeStatus,children:Object(o.jsx)("span",{onClick:u,children:"change status"})}),Object(o.jsx)("p",{})]})})},w=s(70),M=s.n(w),B=function(e){var t=e.randomUserId,s=e.loggedInUserId,n=e.loadingPhotoThunk,r=e.loadingPhoto,i=e.profile,a=e.status,c=e.upDateStatus,l=i.contacts,d=l.facebook,u=l.website,p=l.vk,b=l.twitter,f=l.instagram,x=l.youtube,g=l.github,m=l.mainLink;return Object(o.jsxs)("div",{className:N.a.profileInfo,children:[Object(o.jsx)("h1",{children:i.fullName}),Object(o.jsx)("div",{children:Object(o.jsx)(S,{upDateStatus:c,status:a,randomUserId:t,loggedInUserId:s})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",i.aboutMe]}),Object(o.jsx)("p",{})]}),Object(o.jsxs)("div",{className:N.a.profileInfoContainer,children:[Object(o.jsxs)("div",{onMouseOver:function(){var e=document.getElementById("button-container");console.log("Show button"),t===s&&(console.log(t===s),e&&(e.style.display="block"))},onMouseOut:function(){var e=document.getElementById("button-container");t===s&&e&&(e.style.display="none")},className:N.a.profilePictureContainer,children:[Object(o.jsx)("img",{onClick:function(){var e=document.getElementById("modal");i.photos.large&&e&&(e.style.display="flex")},alt:"profilePic",src:i.photos.large||O.a}),Object(o.jsx)("div",{id:"button-container",className:N.a.addPhotoButtonContainer,children:Object(o.jsx)("input",{type:"file",onChange:function(t){if(t.target.files.length){var s=function(){var s=Object(h.a)(j.a.mark((function s(){return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.upDatePhoto(t.target.files[0]);case 2:e.getNewUserPhotoFromServer(e.loggedInUserId),n();case 4:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return n(),s()}}})}),Object(o.jsx)("div",{className:M()(N.a.loadingPhotoContainer,Object(C.a)({},N.a.hideLoading,!r)),children:Object(o.jsx)("div",{children:"Loading photo..."})})]}),Object(o.jsx)("div",{className:N.a.contacts,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),Object(o.jsxs)("li",{children:["facebook: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:d,children:d})})]}),Object(o.jsxs)("li",{children:["website: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:u,children:u})})]}),Object(o.jsxs)("li",{children:["vk: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:p,children:p})})]}),Object(o.jsxs)("li",{children:["twitter: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:b,children:b})})]}),Object(o.jsxs)("li",{children:["instagram: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:f,children:f})})]}),Object(o.jsxs)("li",{children:["youtube: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:x,children:x})})]}),Object(o.jsxs)("li",{children:["github : ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:g,children:g})})]}),Object(o.jsxs)("li",{children:["mainilnk: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:m,children:m})})]})]})})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",1==i.lookingForAJob?Object(o.jsx)("span",{children:"\u0414\u0430"}):Object(o.jsx)("span",{children:"\u041d\u0435\u0442"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"\u041a\u0430\u043a\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0438\u0449\u0443:"})," ",Object(o.jsx)("span",{children:i.lookingForAJobDescription})]})]})}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{id:"modal",className:N.a.modal,children:[Object(o.jsx)("div",{className:N.a.modalContainer,children:Object(o.jsx)("img",{src:i.photos.large,alt:"profile photo large"})}),Object(o.jsx)("div",{className:N.a.hideModalButton,children:Object(o.jsx)("button",{onClick:function(){var e=document.getElementById("modal");e&&(e.style.display="none")},children:"close"})})]})]})},D=function(e){return console.log("profile: ",e.profile),Object(o.jsxs)("div",{children:[Object(o.jsx)(B,{randomUserId:e.profile.userId,loggedInUserId:e.userId,status:e.status,profile:e.profile,upDateStatus:e.upDateStatus,upDatePhoto:e.updatePhoto,getNewUserPhotoFromServer:e.getUserProfilePhoto,loadingPhotoThunk:e.loadingPhotoThunk,loadingPhoto:e.loadingPhoto}),e.userId===e.profile.userId?Object(o.jsx)(_,{posts:e.posts}):null]})},F=s(14),A=s(58),E=s(84),L=s(57),R=s(77),J=s(23),q=function(e){Object(i.a)(s,e);var t=Object(a.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.getUserProfileThunkCreator(e),this.props.getUserStatusThunkCreator(e)}},{key:"componentWillUnmount",value:function(){this.props.removeUserProfileThunkCreator()}},{key:"render",value:function(){return this.props.profile?Object(o.jsx)(D,{status:this.props.status,profile:this.props.profile,posts:this.props.posts,upDateStatus:this.props.updateUserStatusThunkCreator,userId:this.props.userId,updatePhoto:this.props.uploadUserProfilePhotoThunkCreator,getUserProfilePhoto:this.props.getUserProfilePhotoThunk,loadingPhotoThunk:this.props.loadingPhotoThunk,loadingPhoto:this.props.loadingPhoto}):Object(o.jsx)(L.a,{})}}]),s}(l.a.Component);t.default=Object(J.d)(F.f,Object(d.b)((function(e){return{profile:e.profileReducer.profile,posts:e.profileReducer.posts,status:e.profileReducer.userStatus,loadingPhoto:e.profileReducer.loadingPhoto,userId:e.authReducer.userId}}),{getUserProfileThunkCreator:A.a,removeUserProfileThunkCreator:A.e,getUserStatusThunkCreator:A.b,updateUserStatusThunkCreator:A.g,uploadUserProfilePhotoThunkCreator:A.h,getUserProfilePhotoThunk:E.a,loadingPhotoThunk:A.c}),R.a)(q)}}]);
//# sourceMappingURL=4.afd1e6ca.chunk.js.map