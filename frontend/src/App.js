

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';  // Import the Footer component
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PostList from './components/Forum/PostList';
import SearchResults from './components/SearchResults';
import PostDetails from './components/PostDetails';
import ReportPage from './components/ReportPage';  // Import the ReportPage component

function App() {
    return (
        <Router>
            <Header />  {/* Header should be above Routes */}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<PostList />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/report" element={<ReportPage />} /> {/* Add this line */}
            </Routes>
            <Footer />  {/* Footer at the bottom */}
        </Router>
    );
}

export default App;
