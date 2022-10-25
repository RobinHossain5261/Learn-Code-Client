import React from 'react';
import CourseLeftSide from '../CourseLeftSide/CourseLeftSide';
import CourseRightSide from '../CourseRightSide/CourseRightSide';

const Courses = () => {

    return (
        <div className='my-16 lg:px-16'>
            <div className="flex">

                <div className="flex w-80">
                    <CourseLeftSide></CourseLeftSide>
                </div>

                <div >
                    <h1 className='text-3xl text-info font-semibold mb-6 text-center  '>Our Courses</h1>
                    <CourseRightSide></CourseRightSide>
                </div>
            </div>
        </div >
    );
};

export default Courses;