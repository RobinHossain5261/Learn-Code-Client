import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseLeftSide = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div>
            <h1 className='text-xl mb-3 font-semibold'>All Course List : {courses.length}</h1>
            {
                courses.map(course => <p key={course.id}>
                    <Link>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default CourseLeftSide;