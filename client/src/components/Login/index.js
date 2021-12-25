import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';
import './Login.css';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div>
      <div className="bgLogin">
        <p className="titleStyle">
          CChat
        </p>
        <p className="noteStyle">
          Welcome to our fun chat app. Start to have a new conversation with your friend!
        </p>
      </div>
      <div className="loginComponent">
        <div className="loginBg">
          <p className="loginTitle">
            Login
          </p>
          <hr className="horizonLine" />
          <button
            className="ggBtn"
            onClick={() => handleLogin(googleProvider)}
          >
            Google
          </button>
        </div>
        
      </div>
    </div>
  );
}
