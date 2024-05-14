import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { PostsProvider } from './contexts/PostsContext';
import Login from './Components/Auth/Login';
import PrivateRoute from './Components/Common/PrivateRoute';
import Home from './Home';

function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <AuthProvider>
        <PostsProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            {currentUser ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </PostsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
