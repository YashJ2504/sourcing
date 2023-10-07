
import Layout from '../Components/Layout'
import { GetCoursesPublic, GetCourseById } from '../api';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Courses() {
    const router = useRouter()

    const [course,setCourse] = useState([]);

    const fetchData = async(course) => {

        
        await GetCourseById(course)
        .then(function(res) {
            if(res && res.status == 200) {
                setCourse(res.data.details);
                console.log(res.data.details);
            } else {
                
            }
        })
        
    }

    useEffect(() => {
        if(router && router.query && router.query.id)
        {
            fetchData(router.query.id)
        }
        
    },[router.query])
    return (
        <Layout>
            
            <div className="container">
                <div className="row pt-12">
                    <div className="col-lg-12 mb-12 mb-lg-12">
                        

                        <div className="mb-8">
                            <h3 className="mb-5">{course.name}</h3>

                            <div id="accordionCurriculum">

                                
                                <div className="border rounded shadow mb-6 overflow-hidden">
                                    <div className="d-flex align-items-center" id="curriculumheadingOne">
                                        <h5 className="mb-0 w-100">
                                            <button className="d-flex align-items-center p-5 min-height-80 text-dark fw-medium collapse-accordion-toggle line-height-one" type="button" data-bs-toggle="collapse" data-bs-target="#Introduction" aria-expanded="true" aria-controls="Introduction">
                                                <span className="me-4 text-dark d-flex">
                                                    
                                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="15" height="2" fill="currentColor"/>
                                                    </svg>

                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                        <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                    </svg>

                                                </span>

                                                Introduction
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="Introduction" className="collapse show" aria-labelledby="curriculumheadingOne" data-parent="#accordionCurriculum">
                                        
                                        <div className="border-top px-5 py-4 min-height-70 d-md-flex align-items-center">
                                            
                                            <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                        
                                                
                                                <div className="ms-4">
                                                <span dangerouslySetInnerHTML={{__html: course.introduction}}/>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="border rounded shadow mb-6 overflow-hidden">
                                    <div className="d-flex align-items-center" id="curriculumheadingOne">
                                        <h5 className="mb-0 w-100">
                                            <button className="d-flex align-items-center p-5 min-height-80 text-dark fw-medium collapse-accordion-toggle line-height-one" type="button" data-bs-toggle="collapse" data-bs-target="#Task" aria-expanded="false" aria-controls="Task">
                                                <span className="me-4 text-dark d-flex">
                                                    
                                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="15" height="2" fill="currentColor"/>
                                                    </svg>

                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                        <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                    </svg>

                                                </span>

                                                Task
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="Task" className="collapse" aria-labelledby="curriculumheadingOne" data-parent="#accordionCurriculum">
                                        <div className="border-top px-5 py-4 min-height-70 d-md-flex align-items-center">
                                            <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                        

                                                <div className="ms-4">
                                                <span dangerouslySetInnerHTML={{__html: course.task}}/>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="border rounded shadow mb-6 overflow-hidden">
                                    <div className="d-flex align-items-center" id="curriculumheadingOne">
                                        <h5 className="mb-0 w-100">
                                            <button className="d-flex align-items-center p-5 min-height-80 text-dark fw-medium collapse-accordion-toggle line-height-one" type="button" data-bs-toggle="collapse" data-bs-target="#Process" aria-expanded="false" aria-controls="Process">
                                                <span className="me-4 text-dark d-flex">
                                                    
                                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="15" height="2" fill="currentColor"/>
                                                    </svg>

                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                        <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                    </svg>

                                                </span>

                                                Process
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="Process" className="collapse" aria-labelledby="curriculumheadingOne" data-parent="#accordionCurriculum">
                                        <div className="border-top px-5 py-4 min-height-70 d-md-flex align-items-center">
                                            <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                        

                                                <div className="ms-4">
                                                <span dangerouslySetInnerHTML={{__html: course.process}}/>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="border rounded shadow mb-6 overflow-hidden">
                                    <div className="d-flex align-items-center" id="curriculumheadingOne">
                                        <h5 className="mb-0 w-100">
                                            <button className="d-flex align-items-center p-5 min-height-80 text-dark fw-medium collapse-accordion-toggle line-height-one" type="button" data-bs-toggle="collapse" data-bs-target="#learningObjectives" aria-expanded="false" aria-controls="learningObjectives">
                                                <span className="me-4 text-dark d-flex">
                                                    
                                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="15" height="2" fill="currentColor"/>
                                                    </svg>

                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                        <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                    </svg>

                                                </span>

                                                Learning Objectives
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="learningObjectives" className="collapse" aria-labelledby="curriculumheadingOne" data-parent="#accordionCurriculum">
                                        <div className="border-top px-5 py-4 min-height-70 d-md-flex align-items-center">
                                            <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                        

                                                <div className="ms-4">
                                                <span dangerouslySetInnerHTML={{__html: course.learningObjectives}}/>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="border rounded shadow mb-6 overflow-hidden">
                                    <div className="d-flex align-items-center" id="curriculumheadingOne">
                                        <h5 className="mb-0 w-100">
                                            <button className="d-flex align-items-center p-5 min-height-80 text-dark fw-medium collapse-accordion-toggle line-height-one" type="button" data-bs-toggle="collapse" data-bs-target="#Conclusion" aria-expanded="false" aria-controls="Conclusion">
                                                <span className="me-4 text-dark d-flex">
                                                    
                                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="15" height="2" fill="currentColor"/>
                                                    </svg>

                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 7H15V9H0V7Z" fill="currentColor"/>
                                                        <path d="M6 16L6 8.74228e-08L8 0L8 16H6Z" fill="currentColor"/>
                                                    </svg>

                                                </span>

                                                Conclusion
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="Conclusion" className="collapse" aria-labelledby="curriculumheadingOne" data-parent="#accordionCurriculum">
                                        <div className="border-top px-5 py-4 min-height-70 d-md-flex align-items-center">
                                            <div className="d-flex align-items-center me-auto mb-4 mb-md-0">
                                        

                                                <div className="ms-4">
                                                <span dangerouslySetInnerHTML={{__html: course.conclusion}}/>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
        </Layout>
    )
}