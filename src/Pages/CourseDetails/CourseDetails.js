import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    // console.log(course)
    return (
        <div className='min-h-screen lg:px-16 m-16'>
            <h1 className='text-3xl font-bold'>{course.title}</h1>
            <p className='text-2xl'>Course Name : {course.name}</p>
            <p>Price: {course.price}</p>
            <img className='w-96 h-96 mt-8' src={course.image} alt="" />
            <p className='mt-3'>{course.description}</p>
            <Link to='/checkout' className='btn  btn-info mt-3'>Get premium access</Link>
        </div>
    );
};

export default CourseDetails;