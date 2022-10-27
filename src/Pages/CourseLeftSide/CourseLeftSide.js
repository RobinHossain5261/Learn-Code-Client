import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseLeftSide = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://learn-code-server-murex.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div>
            <h1 className='text-3xl text-info  font-semibold mb-6 text-center'>All Course List : {courses.length}</h1>
            <div className='rounded-lg'>
                {
                    courses.map(course => <p className=" bg-gray-200 py-3 pl-6 w-56 hover:bg-info" key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.name}</Link>

                    </p>)
                }
            </div>

        </div>
    );
};

export default CourseLeftSide;