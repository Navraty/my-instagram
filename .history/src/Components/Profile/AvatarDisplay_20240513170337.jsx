import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const AvatarDisplay = ({ userId }) => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (userId) {
      const unsub = onSnapshot(doc(db, 'users', userId), (doc) => {
        const userData = doc.data();
        if (userData && userData.avatar) {
          setAvatarUrl(userData.avatar);
        } else {
          // Set a default avatar if none is found
          setAvatarUrl('path_to_default_avatar.jpg');
        }
      }, error => {
        console.log("Failed to fetch avatar:", error);
        // Optionally handle the error, e.g., set a default avatar
        setAvatarUrl('path_to_default_avatar.jpg');
      });

      return () => unsub();
    }
  }, [userId]);

  return (
    <div>
      {avatarUrl ? (
        <img src={avatarUrl} alt="User Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      ) : (
        <p>No avatar available</p>  // Display a message or a default image when no avatar is available
      )}
    </div>
  );
};

export default AvatarDisplay;
