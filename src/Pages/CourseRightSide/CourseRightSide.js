import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseRightSide = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://learn-code-server-murex.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 gap-6">

            {
                courses.map(course => <div key={course.id}>
                    <div className="card w-64 bg-base-100 shadow-xl">
                        <figure><img className='h-40 p-3 w-full bg-gray-200' src={course.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.name}</h2>
                            <p className='font-semibold'>{course.title}</p>
                            <p >Price: {course.price}</p>

                            <Link to={`/courses/${course.id}`} className="btn btn-info text-white">Details</Link>

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CourseRightSide;