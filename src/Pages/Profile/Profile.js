import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='min-h-screen mt-24 pl-24'>
            <img className='w-32 h-32 rounded-full	' src={user?.photoURL} alt="" />
            <h2 className='text-3xl'>Name: {user?.displayName}</h2>
            <p>Email: {user?.email}</p>
            <p>Login Time: {user?.metadata?.lastSignInTime}</p>
        </div>
    );
};

export default Profile;