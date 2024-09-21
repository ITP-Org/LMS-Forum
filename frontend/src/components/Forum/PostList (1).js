

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Post from './Post';
// import { FaSearch } from 'react-icons/fa';  // Import the search icon

// function PostList() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [newPost, setNewPost] = useState({ title: '', content: '' });
//     const [searchQuery, setSearchQuery] = useState('');  // Add state for search query
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const response = await axios.get('/api/posts');
//                 setPosts(response.data.posts);
//             } catch (error) {
//                 console.error('Failed to fetch posts:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPosts();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         if (!token) {
//             navigate('/login'); // Redirect to login if not authenticated
//             return;
//         }

//         try {
//             const response = await axios.post('/api/posts', newPost, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setPosts([response.data.post, ...posts]); // Add new post to the top of the list
//             setNewPost({ title: '', content: '' });
//         } catch (error) {
//             console.error('Failed to create post:', error);
//         }
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchQuery.trim()) {
//             navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
//         }
//     };

//     const handleDeletePost = (postId) => {
//         setPosts(posts.filter(post => post._id !== postId));
//     };

//     if (loading) {
//         return <div className="py-4 text-center">Loading...</div>;
//     }

//     if (posts.length === 0) {
//         return <div className="py-4 text-center">No posts available</div>;
//     }

//     return (
//         <div className="container p-4 mx-auto">
//             <h3 className="mb-6 text-2xl font-semibold text-center text-[#7b46d4]">
//                 Welcome to the coolest corner of the site - our chemistry class forum!
//             </h3>
            
//             {/* Search Box */}
//             <form onSubmit={handleSearch} className="flex items-center justify-center mb-6">
//                 <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search..."
//                     className="p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button type="submit" className="p-2 text-white hover:bg-[#8e9afa] bg-[#8b7ae6] rounded-r-md focus:outline-none">
//                     <FaSearch />
//                 </button>
//             </form>
            
//             <form onSubmit={handleSubmit} className="p-6 mb-6 bg-[#e4e6fd] rounded-[25px] shadow-md">
//                 <input
//                     type="text"
//                     value={newPost.title}
//                     onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//                     placeholder="Title"
//                     required
//                     className="w-full p-2 mb-2 border border-gray-300 rounded-[25px]" 
//                 />
//                 <textarea
//                     value={newPost.content}
//                     onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
//                     placeholder="Content"
//                     required
//                     className="w-full p-2 mb-2 border border-gray-300 rounded-[25px]" 
//                 />
//                 <button
//                     type="submit"
//                     className="w-full py-2 text-white rounded-[25px] hover:bg-[#8e9afa] bg-[#8b7ae6] hover:bg-blue-600 focus:outline-none"
//                 >
//                     Create Post
//                 </button>
//             </form>
//             {posts.map((post) => (
//                 <Post key={post._id} post={post} onDelete={handleDeletePost} />
//             ))}
//         </div>
//     );
// }

// export default PostList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Post from './Post';
import { FaSearch } from 'react-icons/fa';  // Import the search icon

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState({ title: '', content: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirect to login if not authenticated
            return;
        }

        try {
            const response = await axios.post('/api/posts', newPost, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setPosts([response.data.post, ...posts]); // Add new post to the top of the list
            setNewPost({ title: '', content: '' });
        } catch (error) {
            console.error('Failed to create post:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleDeletePost = (postId) => {
        setPosts(posts.filter(post => post._id !== postId));
    };

    if (loading) {
        return <div className="py-4 text-center">Loading...</div>;
    }

    if (posts.length === 0) {
        return <div className="py-4 text-center">No posts available</div>;
    }

    return (
        <div className="container p-4 mx-auto">
            {/* <h3 className="mb-6 text-2xl font-semibold text-center text-[#7b46d4] max-w-2xl mx-auto">
                Welcome to the coolest corner of the site - our chemistry class forum!
            </h3> */}

           <h3 className="mb-6 text-2xl font-semibold text-center text-[#7b46d4]">
              Welcome to the coolest corner of the site - our chemistry class forum!
            </h3>
            
            {/* Search Box */}
            <form onSubmit={handleSearch} className="flex items-center justify-center max-w-2xl mx-auto mb-6">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="p-2 text-white hover:bg-[#8e9afa] bg-[#8b7ae6] rounded-r-md focus:outline-none">
                    <FaSearch />
                </button>
            </form>
            
            <form onSubmit={handleSubmit} className="p-6 mb-6 bg-[#e4e6fd] rounded-[25px] shadow-md">
                <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder="Title"
                    required
                    className="w-full p-2 mb-2 border border-gray-300 rounded-[25px]" 
                />
                <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Content"
                    required
                    className="w-full p-2 mb-2 border border-gray-300 rounded-[25px]" 
                />
                <button
                    type="submit"
                    className="w-full py-2 text-white rounded-[25px] hover:bg-[#8e9afa] bg-[#8b7ae6] hover:bg-blue-600 focus:outline-none"
                >
                    Create Post
                </button>
            </form>
            {posts.map((post) => (
                <Post key={post._id} post={post} onDelete={handleDeletePost} />
            ))}
        </div>
    );
}

export default PostList;
