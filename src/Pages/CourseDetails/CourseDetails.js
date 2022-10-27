import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";



const CourseDetails = () => {
    const course = useLoaderData();
    const ref = createRef();
    // console.log(course)
    return (
        <div className='min-h-screen lg:px-16 m-16'>
            <div >
                <div className='flex justify-end'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                </div>
                <div ref={ref}>
                    <h1 className='text-3xl font-bold'>{course.title}</h1>
                    <p className='text-2xl'>Course Name : {course.name}</p>
                    <p>Price: {course.price}</p>
                    <img className='w-96 h-96 mt-8' src={course.image} alt="" />
                    <p className='mt-3'>{course.description}</p>
                    <Link to='/checkout' className='btn  btn-info mt-3'>Get premium access</Link>
                </div>
            </div>



        </div>
    );
};

export default CourseDetails;