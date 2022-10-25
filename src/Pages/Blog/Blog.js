import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl my-6 text-info text-center'>Some question and answer.</h2>
            <div className='px-32 pb-6'>
                <h3 className='text-xl '><span className='font-bold'>Question-1: </span> what is cors?</h3>
                <p><span className='font-bold'>Ans: </span>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
            </div>
            <div className='px-32 pb-6'>
                <h3 className='text-xl '><span className='font-bold'>Question-2: </span> Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p><span className='font-bold'>Ans: </span>Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. <br /> Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div className='px-32 pb-6'>
                <h3 className='text-xl '><span className='font-bold'>Question-3: </span> How does the private route work?</h3>
                <p><span className='font-bold'>Ans: </span>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='px-32 pb-6'>
                <h3 className='text-xl '><span className='font-bold'>Question-4: </span> What is Node? How does Node work?</h3>
                <p><span className='font-bold'>Ans: </span>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>


        </div>
    );
};

export default Blog;