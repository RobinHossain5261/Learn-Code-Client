import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='min-h-screen mt-24 pl-24'>
            <img className='w-32 h-32 rounded-full	' src={user?.photoURL} alt="" />
            <h2 className='text-3xl'>Name: {user?.displayName}</h2>
            <p>Email: {user?.email}</p>
            <p>Your Id : {user?.uid}</p>
            <p>Login Time: {user?.metadata?.lastSignInTime}</p>

            <p className='text-green-500 mt-3'>Your access successful.</p>
        </div>
    );
};

export default CheckOut;