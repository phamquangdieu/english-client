'use client';
import GoogleOAuthProvider from '@react-oauth/google';

const GoogleAuthContext = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId="348301153253-lq1n07v0ocs7oba7rbnmkse21qmuav4p.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthContext;
