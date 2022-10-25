import React from 'react';
import CourseLeftSide from '../CourseLeftSide/CourseLeftSide';

const Courses = () => {

    return (
        <div className='min-h-screen lg:px-16'>

            <h1 className='text-3xl text-info my-3 text-center'>Our Courses</h1>
            <div className="flex ">

                <div className="flex w-80 ">
                    <CourseLeftSide></CourseLeftSide>
                </div>

                <div className="flex-auto bg-green-400 ">
                    03
                </div>
            </div>
        </div>
    );
};

export default Courses;