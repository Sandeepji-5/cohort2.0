// import React from 'react'
// const Post = () => {


//     return (
//          <div className="posts">
//                 <div className="user">
//                     <div className="imgwrapper">
//                         <img src={} alt="User Avatar" />
//                     </div>
//                     <p>{}</p>
//                 </div>
//                 <img src={} alt="Post Image" />

//                 <div className="icons">
//                     <div className="left">
//                         <button></button>
//                         <button></button>
//                         <button></button>

//                     </div>
//                     <div className="right">
//                         <button></button>
//                     </div>
//                 </div>


//                 <div className="bottom">
//                     <p className="caption">{}</p>
//                 </div>
//             </div>
//     )
// }       

// export default Post;


import React from 'react'
import Feed from '../pages/Feed'
const Post = () => {
    return (
        <div className="posts">
            <div className="user">
                <div className="imgwrapper">
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="User Avatar"
                    />
                </div>
                <p>Sandeep Sharma</p>
            </div>

            <img
                src="https://picsum.photos/500/350"
                alt="Post Image"
            />

            <div className="icons">
                <div className="left">
                    <button>❤️</button>
                    <button>💬</button>
                    <button>📤</button>
                </div>

                <div className="right">
                    <button>🔖</button>
                </div>
            </div>

            <div className="bottom">
                <p className="caption">
                    Enjoying a peaceful evening with coffee and coding ☕💻 #React #WebDev
                </p>
            </div>
        </div>
    )
}

export default Post;