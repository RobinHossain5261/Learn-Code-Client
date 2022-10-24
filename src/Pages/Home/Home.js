import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?w=1380&t=st=1666638081~exp=1666638681~hmac=b6fc66ea179fa08dd03390f2fe8755e2822899a241b615b1883a37b926b8bf0f")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">Start learning from the world’s best institutions</h1>
                        <p className="mb-5">Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The eDash can offer you to enjoy the beauty of eLearning!!</p>
                        <Link to='/courses' className="btn btn-info">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;