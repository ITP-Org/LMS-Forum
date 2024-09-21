
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ReportPage() {
//     const [report, setReport] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchReport = async () => {
//             try {
//                 const response = await axios.get('/api/posts/admin/report', {
//                     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//                 });
//                 setReport(response.data.report);
//             } catch (error) {
//                 setError('Failed to fetch report');
//                 console.error(error);
//             }
//         };

//         fetchReport();
//     }, []);

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!report) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="container p-4 mx-auto">
//             <h2 className="mb-4 text-2xl font-bold">Forum Report</h2>

//             {/* Number of Posts per User */}
//             <h3 className="text-xl font-bold">Posts by User</h3>
//             <ul>
//                 {report.postsByUser && report.postsByUser.map((user, index) => (
//                     <li key={index}>{user.username}: {user.postCount} posts</li>
//                 ))}
//             </ul>

//             {/* Check if mostActiveUsers exists before rendering */}
//             {report.mostActiveUsers && (
//                 <>
//                     <h3 className="mt-4 text-xl font-bold">Most Active Users</h3>
//                     <ul>
//                         {report.mostActiveUsers.map((user, index) => (
//                             <li key={index}>{user.username}: {user.activityCount} posts and replies</li>
//                         ))}
//                     </ul>
//                 </>
//             )}

//             {/* Top Replies */}
//             {report.mostVotedReply && (
//                 <>
//                     <h3 className="mt-4 text-xl font-bold">Top Replies</h3>
//                     <p>{report.mostVotedReply.content} - {report.mostVotedReply.votes} votes</p>
//                     <p>By: {report.mostVotedReply.author.username}</p>
//                 </>
//             )}

//             {/* Add other sections based on available report data */}
//         </div>
//     );
// }

// export default ReportPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ReportPage() {
//     const [report, setReport] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchReport = async () => {
//             try {
//                 const response = await axios.get('/api/posts/admin/report', {
//                     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//                 });
//                 setReport(response.data.report);
//             } catch (error) {
//                 setError('Failed to fetch report');
//                 console.error(error);
//             }
//         };

//         fetchReport();
//     }, []);

//     if (error) {
//         return <div className="mt-8 text-center text-red-500">{error}</div>;
//     }

//     if (!report) {
//         return <div className="mt-8 text-center text-gray-500">Loading...</div>;
//     }

//     return (
//         <div className="container p-6 mx-auto mt-8 mb-8 bg-white rounded-lg shadow-lg">
//             <h2 className="pb-2 mb-6 text-3xl font-bold text-gray-800 border-b">Forum Report</h2>

//             {/* Number of Posts per User */}
//             <div className="mb-8">
//                 <h3 className="mb-4 text-2xl font-semibold text-gray-700">Posts by User</h3>
//                 <ul className="space-y-2">
//                     {report.postsByUser && report.postsByUser.map((user, index) => (
//                         <li key={index} className="p-4 border border-blue-200 rounded-md bg-blue-50">
//                             <span className="font-medium text-gray-800">{user.username}</span>: {user.postCount} posts
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Most Active Users */}
//             {report.mostActiveUsers && (
//                 <div className="mb-8">
//                     <h3 className="mb-4 text-2xl font-semibold text-gray-700">Most Active Users</h3>
//                     <ul className="space-y-2">
//                         {report.mostActiveUsers.map((user, index) => (
//                             <li key={index} className="p-4 border border-green-200 rounded-md bg-green-50">
//                                 <span className="font-medium text-gray-800">{user.username}</span>: {user.activityCount} posts and replies
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}

//             {/* Top Replies */}
//             {report.mostVotedReply && (
//                 <div className="mb-8">
//                     <h3 className="mb-4 text-2xl font-semibold text-gray-700">Top Replies</h3>
//                     <div className="p-4 border border-yellow-200 rounded-md bg-yellow-50">
//                         <p className="mb-2 text-lg text-gray-800">"{report.mostVotedReply.content}"</p>
//                         <p className="mb-1 text-gray-600">Votes: <span className="font-bold">{report.mostVotedReply.votes}</span></p>
//                         <p className="text-gray-600">By: <span className="font-medium">{report.mostVotedReply.author.username}</span></p>
//                     </div>
//                 </div>
//             )}

//             {/* Additional Statistics and Information */}
//             {/* Add other sections as needed based on available report data */}
//         </div>
//     );
// }

// export default ReportPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReportPage() {
    const [report, setReport] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await axios.get('/api/posts/admin/report', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                console.log('Report Data:', response.data.report);  // Log full report data
                console.log('Most Voted Reply:', response.data.report.mostVotedReply);  // Log mostVotedReply specifically
                setReport(response.data.report);
            } catch (error) {
                setError('Failed to fetch report');
                console.error('Error fetching report:', error);
            }
        };

        fetchReport();
    }, []);

    if (error) {
        return <div className="mt-8 text-center text-red-500">{error}</div>;
    }

    if (!report) {
        return <div className="mt-8 text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="container p-6 mx-auto mt-8 mb-8 bg-white rounded-lg shadow-lg">
            <h2 className="pb-2 mb-6 text-3xl font-bold text-gray-800 border-b">Forum Report</h2>

            {/* Number of Posts per User */}
            <div className="mb-8">
                <h3 className="mb-4 text-2xl font-semibold text-gray-700">Posts by User</h3>
                <ul className="space-y-2">
                    {report.postsByUser && report.postsByUser.map((user, index) => (
                        <li key={index} className="p-4 border border-blue-200 rounded-md bg-blue-50">
                            <span className="font-medium text-gray-800">{user.username}</span>: {user.postCount} posts
                        </li>
                    ))}
                </ul>
            </div>

            {/* Most Active Users */}
            {report.mostActiveUsers && (
                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-700">Most Active Users</h3>
                    <ul className="space-y-2">
                        {report.mostActiveUsers.map((user, index) => (
                            <li key={index} className="p-4 border border-green-200 rounded-md bg-green-50">
                                <span className="font-medium text-gray-800">{user.username}</span>: {user.activityCount} posts and replies
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Top Replies */}
            {report.mostVotedReply && report.mostVotedReply.author ? (  // Ensure mostVotedReply and its author are not null
                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-700">Top Replies</h3>
                    <div className="p-4 border border-yellow-200 rounded-md bg-yellow-50">
                        <p className="mb-2 text-lg text-gray-800">"{report.mostVotedReply.content}"</p>
                        <p className="mb-1 text-gray-600">Votes: <span className="font-bold">{report.mostVotedReply.votes}</span></p>
                        <p className="text-gray-600">By: <span className="font-medium">{report.mostVotedReply.author.username}</span></p>
                    </div>
                </div>
            ) : (
                <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-700">Top Replies</h3>
                    <p className="p-4 text-gray-700 rounded-md bg-yellow-50">No voted replies available.</p>
                </div>
            )}

            {/* Additional Statistics and Information */}
            {/* Add other sections as needed based on available report data */}
        </div>
    );
}

export default ReportPage;
