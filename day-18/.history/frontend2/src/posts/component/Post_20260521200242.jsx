import React from 'react'
const Post = ({ user, post }) => {


    return (
         <div className="posts">
                <div className="user">
                    <div className="imgwrapper">
                        <img src={user.profileImage} alt="User Avatar" />
                    </div>
                    <p>{user.username}</p>
                </div>
                <img src={post.imagUrl} alt="Post Image" />

                <div className="icons">
                    <div className="left">
                        <button></button>
                        <button></button>
                        <button></button>

                    </div>
                    <div className="right">
                        <button></button>
                    </div>
                </div>


                <div className="bottom">
                    <p className="caption">{post.caption    }</p>
                </div>
            </div>
    )
}       

export default Post;


// import React from 'react'

// const Post = (user, post) => {
//     return (
//         <div className="posts">
//             <div className="user">
//                 <div className="imgwrapper">
//                     <img
//                         src={post.imageUrl}
//                         alt="User Avatar"
//                     />
//                 </div>
//                 <p>Sandeep Sharma</p>
//             </div>

//             <img
//                 src="https://picsum.photos/500/350"
//                 alt="Post Image"
//             />

//             <div className="icons">
//                 <div className="left">
//                     <button>❤️</button>
//                     <button>💬</button>
//                     <button>📤</button>
//                 </div>

//                 <div className="right">
//                     <button>🔖</button>
//                 </div>
//             </div>

//             <div className="bottom">
//                 <p className="caption">
//                     Enjoying a peaceful evening with coffee and coding ☕💻 #React #WebDev
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default Post;