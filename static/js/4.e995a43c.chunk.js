(this["webpackJsonpreact-first-project"]=this["webpackJsonpreact-first-project"]||[]).push([[4],{374:function(e,t,s){e.exports={postsContainer:"PostItem_postsContainer__1Sqqb",avatar:"PostItem_avatar__1voR6",userName:"PostItem_userName__2bW8A",postText:"PostItem_postText__9Pj6u",likesCount:"PostItem_likesCount__2Ngx8"}},375:function(e,t,s){e.exports={profileInfoContainer:"ProfileInfo_profileInfoContainer__-8ARQ",contacts:"ProfileInfo_contacts__4AHRP",profileInfo:"ProfileInfo_profileInfo__Vr2b1",addPhotoButtonContainer:"ProfileInfo_addPhotoButtonContainer__3jXc8",profilePictureContainer:"ProfileInfo_profilePictureContainer__36FKC",loadingPhotoContainer:"ProfileInfo_loadingPhotoContainer__1-ztw",hideLoading:"ProfileInfo_hideLoading__3NCLh"}},377:function(e,t,s){"use strict";s.r(t);var o=s(0),n=s(7),r=s(8),i=s(11),c=s(12),a=s(1),l=s.n(a),j=s(26),u=s(57),d=s(374),h=s.n(d),p=s(73),b=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:h.a.postsContainer,children:[Object(o.jsx)("div",{className:h.a.avatar,children:Object(o.jsx)("img",{src:p.a,alt:"UserAvatar"})}),Object(o.jsx)("div",{className:h.a.userName,children:e.userName}),Object(o.jsx)("div",{className:h.a.postText,children:e.postText}),Object(o.jsx)("div",{className:h.a.likesCount,children:Object(o.jsxs)("span",{children:["Likes: ",e.likesCount]})})]})})},f=s(10),O=function(e){var t=e.posts.map((function(e){return Object(o.jsx)(b,{id:e.id,postText:e.postText,userAva:e.userAva,userName:e.userName,likesCount:e.likesCount},e.id)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(f.d,{initialValues:{postMessage:""},onSubmit:function(t,s){if(""===t.postMessage)return null;e.addNewPostThunkCreator(t.postMessage,e.login),s.resetForm()},children:function(e){return Object(o.jsxs)(f.c,{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("label",{htmlFor:"postMessage",children:"Add post"})}),Object(o.jsx)("div",{}),Object(o.jsx)(f.b,{as:"textarea",name:"postMessage",id:"postMessage",value:e.values.postMessage}),Object(o.jsx)("div",{}),Object(o.jsx)("button",{type:"submit",children:"Send"})]})}})}),Object(o.jsx)("h3",{children:"My Posts"}),Object(o.jsx)("div",{children:t})]})},x=s(54),g=Object(j.b)((function(e){return{posts:x.b.getPosts(e),profile:x.b.getProfile(e),newPostText:x.b.getNewPostsText(e),login:x.b.getLogin(e)}}),{addNewPostAC:u.a,addNewPostThunkCreator:u.b})(O),P=function(e){return Object(o.jsx)(g,{posts:e.posts})},m=s(81),v=s(6),I=s.n(v),k=s(17),C=s(375),_=s.n(C),T=s(39),U=function(e){var t=Object(a.useState)(!1),s=Object(T.a)(t,2),n=s[0],r=s[1],i=Object(a.useState)(e.status),c=Object(T.a)(i,2),l=c[0],j=c[1];Object(a.useEffect)((function(){j(e.status)}),[e.status]);return Object(o.jsx)(o.Fragment,{children:n?Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),e.upDateStatus(l)},onChange:function(e){j(e.currentTarget.value)},type:"text",value:l}),Object(o.jsx)("p",{})]}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{onClick:function(){if(e.loggedInUserId!==e.randomUserId)return null;r(!0)},children:[Object(o.jsx)("b",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "})," ",e.status]}),Object(o.jsx)("p",{})]})})},N=s(97),S=s.n(N),w=function(e){var t=e.randomUserId,s=e.loggedInUserId,n=e.loadingPhotoThunk,r=e.loadingPhoto,i=e.profile,c=e.status,a=e.upDateStatus;return Object(o.jsxs)("div",{className:_.a.profileInfo,children:[Object(o.jsx)("h1",{children:i.fullName}),Object(o.jsx)("div",{children:Object(o.jsx)(U,{upDateStatus:a,status:c,randomUserId:t,loggedInUserId:s})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",i.aboutMe]}),Object(o.jsx)("p",{})]}),Object(o.jsxs)("div",{className:_.a.profileInfoContainer,children:[Object(o.jsxs)("div",{onMouseOver:function(e){t===s&&(document.getElementById("button-container").style.display="block")},onMouseOut:function(e){t===s&&(document.getElementById("button-container").style.display="none")},className:_.a.profilePictureContainer,children:[Object(o.jsx)("img",{alt:"profilePic",src:i.photos.large||p.a}),Object(o.jsx)("div",{id:"button-container",className:_.a.addPhotoButtonContainer,children:Object(o.jsx)("input",{type:"file",onChange:function(t){if(t.target.files.length){var s=function(){var s=Object(k.a)(I.a.mark((function s(){return I.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.upDatePhoto(t.target.files[0]);case 2:e.getNewUserPhotoFromServer(e.loggedInUserId),n();case 4:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return n(),s()}}})}),Object(o.jsx)("div",{className:S()(_.a.loadingPhotoContainer,Object(m.a)({},_.a.hideLoading,!r)),children:Object(o.jsx)("div",{children:"Loading photo..."})})]}),Object(o.jsx)("div",{className:_.a.contacts,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),Object(o.jsxs)("li",{children:["facebook: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"#",children:i.contacts.facebook})})]}),Object(o.jsxs)("li",{children:["website: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"#",children:i.contacts.website})})]}),Object(o.jsxs)("li",{children:["vk: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"#",children:i.contacts.vk})})]}),Object(o.jsxs)("li",{children:["twitter: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"#",children:i.contacts.twitter})})]}),Object(o.jsxs)("li",{children:["instagram: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"#",children:i.contacts.instagram})})]}),Object(o.jsxs)("li",{children:["youtube: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"#",children:i.contacts.youtube})})]}),Object(o.jsxs)("li",{children:["github : ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"#",children:i.contacts.github})})]}),Object(o.jsxs)("li",{children:["mainilnk: ",Object(o.jsx)("span",{children:Object(o.jsx)("a",{href:"#",children:i.contacts.mainLink})})]})]})})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",1==i.lookingForAJob?Object(o.jsx)("span",{children:"\u0414\u0430"}):Object(o.jsx)("span",{children:"\u041d\u0435\u0442"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:"\u041a\u0430\u043a\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0438\u0449\u0443:"})," ",Object(o.jsx)("span",{children:i.lookingForAJobDescription})]})]})}),Object(o.jsx)("hr",{})]})},y=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(w,{randomUserId:e.profile.userId,loggedInUserId:e.userId,status:e.status,profile:e.profile,upDateStatus:e.upDateStatus,upDatePhoto:e.updatePhoto,getNewUserPhotoFromServer:e.getUserProfilePhoto,loadingPhotoThunk:e.loadingPhotoThunk,loadingPhoto:e.loadingPhoto}),e.userId===e.profile.userId?Object(o.jsx)(P,{posts:e.posts}):null]})},M=s(13),A=s(82),D=s(58),F=s(74),L=s(23),R=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(e){var o;return Object(n.a)(this,s),(o=t.call(this,e)).props=e,o}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.getUserProfileThunkCreator(e),this.props.getUserStatusThunkCreator(e)}},{key:"componentWillUnmount",value:function(){this.props.removeUserProfileThunkCreator()}},{key:"render",value:function(){return this.props.profile?Object(o.jsx)(y,{status:this.props.status,profile:this.props.profile,posts:this.props.posts,upDateStatus:this.props.updateUserStatusThunkCreator,userId:this.props.userId,updatePhoto:this.props.uploadUserProfilePhotoThunkCreator,getUserProfilePhoto:this.props.getUserProfilePhotoThunk,loadingPhotoThunk:this.props.loadingPhotoThunk,loadingPhoto:this.props.loadingPhoto}):Object(o.jsx)(D.a,{})}}]),s}(l.a.Component);t.default=Object(L.d)(M.f,Object(j.b)((function(e){return{profile:e.profileReducer.profile,posts:e.profileReducer.posts,status:e.profileReducer.userStatus,loadingPhoto:e.profileReducer.loadingPhoto,userId:e.authReducer.userId}}),{getUserProfileThunkCreator:u.c,removeUserProfileThunkCreator:u.g,getUserStatusThunkCreator:u.d,updateUserStatusThunkCreator:u.i,uploadUserProfilePhotoThunkCreator:u.j,getUserProfilePhotoThunk:A.a,loadingPhotoThunk:u.e}),F.a)(R)}}]);
//# sourceMappingURL=4.e995a43c.chunk.js.map