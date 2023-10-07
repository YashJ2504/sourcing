
import Layout from '../Components/Layout'

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { search, likeCandidate, getCandidates, removeCandidate, getNextCandidates } from '../api';
import { HandThumbsUp, HandThumbsUpFill } from 'react-bootstrap-icons';
import Spinner from 'react-bootstrap/Spinner';
import Accordion from 'react-bootstrap/Accordion';

export default function Dashboard() {

    const [type, setType] = useState(null);
    const [jobTitle, setJobTitle] = useState("");
    const [keywords, setKeywords] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [searchError,setSearchError] = useState("");

    const [result,setResult] = useState([]);
    const [serpapiPagination,setSerpApiPagination] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    const [likedCandidates, setLikedCandidates] = useState([]);
    const [validated, setValidated] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const handleLike = async (candidate) => {
        console.log(candidate);

        
        await likeCandidate(candidate).then(function (res) {
            if (res && res.status == 200) {
                console.log(res.data);
                let allLikedCandidates = [];
                likedCandidates.map((lc) => {
                    if(lc.title == res.data.candidate.title)
                    {
                        lc._id = res.data.candidate._id;
                    }
                    allLikedCandidates.push(lc);
                    setLikedCandidates(allLikedCandidates);
                })
                allLikedCandidates.push(res.data.candidate);
                setLikedCandidates(allLikedCandidates);
                let allCandidates = [];
                result.map((r) => {
                    if(r.title == candidate.title)
                    {
                        r.isLiked = true;
                    }
                    allCandidates.push(r);
                    setResult(allCandidates);
                })
                

            } else {
                console.log(res);

            }
        })
    }

    
    const handleUnLike = async (candidate) => {
        console.log(candidate);

        const unLikedCandidate = likedCandidates.find((lc) => lc.title == candidate.title);
        console.log(unLikedCandidate)
        await removeCandidate(unLikedCandidate._id).then(function (res) {
            if (res && res.status == 200) {
                console.log(res.data);
                let allCandidates = [];
                result.map((r) => {
                    if(r.title == candidate.title)
                    {
                        r.isLiked = false;
                    }
                    allCandidates.push(r);
                    setResult(allCandidates);
                })

            } else {
                console.log(res);

            }
        })
    }

    const handleSearch = async (event) => {
        
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();   
        }
        else{
            setIsLoaded(true);
            const values = {
                type,
                jobTitle,
                keywords,
                city,
                country
            };
            await search(values).then(function (res) {
                if (res && res.status == 200) {
                    console.log(res.data.response.organic_results);
                    setResult(res.data.response);
                    if(res.data.response.pagination != undefined){
                        setSerpApiPagination(res.data.response.pagination.api_pagination);
                    }

                    let afterLikedCandidates = [];
                    res.data.response && res.data.response && res.data.response.organic_results && res.data.response.organic_results.length > 0 && res.data.response.organic_results.map((r) => {
                        if(likedCandidates.find(( candi ) => candi.title === r.title)){
                            console.log(r)
                            r.isLiked = true;
                        }
                        afterLikedCandidates.push(r);
                    });
                    console.log(afterLikedCandidates);
                    setResult(afterLikedCandidates);
                    setIsLoaded(false);


                } else {
                    console.log(res);
                    if(res == undefined){
                        setSearchError("Something Went Wrong");
                    }
                    else{
                        setSearchError(res.data.error);
                    }
                    setIsLoaded(false);

                }
            })
        }
        setValidated(true);
    };

    const handleNext = async() => {
        setIsLoaded(true);
        

        const url = new URL(serpapiPagination.next);
        
        const searchParams = url.searchParams;
        setCurrentPage(searchParams.get('page'))
        await getNextCandidates(`?q=${searchParams.get('q')}&id=${searchParams.get('id')}&page=${searchParams.get('page') }`).then(function (res) {
            if (res && res.status == 200) {
                console.log(res.data.response.organic_results);
                setResult(res.data.response);
                if(res.data.response.pagination != undefined){
                    setSerpApiPagination(res.data.response.pagination.api_pagination);
                }

                let afterLikedCandidates = [];
                res.data.response && res.data.response && res.data.response.organic_results && res.data.response.organic_results.length > 0 && res.data.response.organic_results.map((r) => {
                    if(likedCandidates.find(( candi ) => candi.title === r.title)){
                        console.log(r)
                        r.isLiked = true;
                    }
                    afterLikedCandidates.push(r);
                });
                console.log(afterLikedCandidates);
                setResult(afterLikedCandidates);
                setIsLoaded(false);


            } else {
                console.log(res);
                setIsLoaded(false);
                if(res == undefined){
                    setSearchError("Something Went Wrong");
                }
                else{
                    setSearchError(res.data.error);
                }

            }
        })
    }

    const handlePrev = async() => {
        setIsLoaded(true);
        const url = new URL(serpapiPagination.next);
        const searchParams = url.searchParams;
        setCurrentPage(searchParams.get('page') - 2)

        await getNextCandidates(`?q=${searchParams.get('q')}&id=${searchParams.get('id')}&page=${searchParams.get('page') - 2 }`).then(function (res) {
            if (res && res.status == 200) {
                console.log(res.data.response.organic_results);
                // setResult(res.data.response);
                if(res.data.response.pagination != undefined){
                    setSerpApiPagination(res.data.response.pagination.api_pagination);
                }

                let afterLikedCandidates = [];
                res.data.response && res.data.response && res.data.response.organic_results && res.data.response.organic_results.length > 0 && res.data.response.organic_results.map((r) => {
                    if(likedCandidates.find(( candi ) => candi.title === r.title)){
                        console.log(r)
                        r.isLiked = true;
                    }
                    afterLikedCandidates.push(r);
                });
                console.log(afterLikedCandidates);
                setResult(afterLikedCandidates);
                setIsLoaded(false);


            } else {
                console.log(res);
                if(res == undefined){
                    setSearchError("Something Went Wrong");
                }
                else{
                    setSearchError(res.data.error);
                }
                setIsLoaded(false);

            }
        })
    }

    

    useEffect(() => {
        const fetchLikedCandidates = async(dept = null, catg = []) => {
            await getCandidates().then(function (res) {
                if (res && res.status == 200) {
                    console.log(res.data);
                    setLikedCandidates(res.data.candidates)
                    let afterLikedCandidates = [];
                    result && result.length > 0 && result.map((r) => {
                        if(res.data && res.data.candidates.length > 0 &&  res.data.candidates.find(( candi ) => candi.title === r.title)){
                            r.isLiked = true;
                        }
                        afterLikedCandidates.push(r);
                    });
                    console.log(afterLikedCandidates);
                    setResult(afterLikedCandidates);

                } else {
                    console.log(res);

                }
            })
        }
        
        fetchLikedCandidates();
    },[])
    return (
        <>
        {
            !isLoaded ? (
                <Layout>
                    
                    <div>
                        
                        <div id="services" className="services section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Row>

                                            <Col>
                                                <Card >
                                                    <Card.Body>
                                                        <Row>
                                                            <Col md={6}>
                                                                <img src="/assets/images/about-dec-v3.png" frameborder="0" style={{ "border": "0", width: "90%" }} allowfullscreen="" />
                                                            </Col>
                                                            <Col md={6}>
                                                                <Form noValidate validated={validated} onSubmit={handleSearch}>
                                                                    <Row>
                                                                        <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                                                                            <h4 id="">Find the right <em>Candidate</em> for your needs!</h4>

                                                                        </div>
                                                                        <Col md={6}>
                                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                                <Form.Label>Select Site</Form.Label>
                                                                                <Form.Select aria-label="Default select example" onChange={e => setType(e.target.value)} value={type} required>
                                                                                    <option value="">Site</option>
                                                                                    <option value="linkedin">LinkedIn</option>
                                                                                    <option value="github">Github</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                        </Col>
                                                                        <Col md={6}>
                                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                                <Form.Label>Job Title</Form.Label>
                                                                                <Form.Control type="text" placeholder="Job Title" onChange={e => setJobTitle(e.target.value)} value={jobTitle} required />
                                                                            </Form.Group>
                                                                        </Col>
                                                                        <Col md={6}>
                                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                                <Form.Label>Keywords</Form.Label>
                                                                                <Form.Control type="text" placeholder="Keywords" onChange={e => setKeywords(e.target.value)} value={keywords} required />
                                                                            </Form.Group>
                                                                        </Col>
                                                                        <Col md={6}>
                                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                                <Form.Label>City</Form.Label>
                                                                                <Form.Control type="text" placeholder="City" onChange={e => setCity(e.target.value)} value={city} required />
                                                                            </Form.Group>
                                                                        </Col>
                                                                        <Col md={6}>
                                                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                                <Form.Label>Country</Form.Label>
                                                                                <Form.Control type="text" placeholder="Country" onChange={e => setCountry(e.target.value)} value={country} required />
                                                                            </Form.Group>
                                                                        </Col>
                                                                        <Col md={12}>
                                                                            <p className='alert-error'> {searchError} </p>
                                                                        </Col>
                                                                        <Col md={{ span: 8, offset: 3 }}>
                                                                            <Button type="submit" className='col-md-8' style={{ backgroundColor: "#47B5EC", border: 0 }} >Search</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </Form>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        result && result.length > 0 ?
                        (
                            <div id="services" className="services section">
                                <div className="container">
                                    <div className="row">
                                        <Card style={{paddingBottom:"20px"}}>
                                            <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s" style={{marginTop:"20px"}}>
                                                <h4 id="">Best <em>Candidates</em> found as your needs!</h4>

                                            </div>
                                            <Row xs={1} md={2} className="g-4">
                                                {
                                                    
                                                    result && result.map((val) => (
                                                        <Col md={4} >
                                                            <Card >
                                                                
                                                                <Card.Body onClick={() => {
                                                                        window.open (val.link, '_ blank');
                                                                    }} style={{cursor:"pointer"}}>
                                                                    <Card.Title>{val.title}</Card.Title>
                                                                    <Card.Text>
                                                                        {val.snippet}
                                                                    </Card.Text>
                                                                    {/* <Link href={val.link} target="_blank" style={{color:"#47B5EC"}}>{val.link}</Link> */}
                                                                </Card.Body>
                                                                <Card.Footer>
                                                                    {
                                                                        val.isLiked == true ?
                                                                        (
                                                                            <><small className="text-muted"> </small><HandThumbsUpFill onClick={() => { handleUnLike(val)}} style={{cursor:"pointer",color:"#47B5EC"}}/></>
                                                                        ) :
                                                                        (
                                                                            <><small className="text-muted"> </small><HandThumbsUp onClick={() => { handleLike(val)}} style={{cursor:"pointer",color:"#47B5EC"}}/></>
                                                                        )
                                                                    }
                                                                    <Link href={val.link} target="_blank" style={{color:"#47B5EC",float:"right"}}>
                                                                        <Button style={{backgroundColor:"#47B5EC",borderColor:"#47B5EC"}}> LinkedIn</Button>
                                                                    </Link>
                                                                    
                                                                </Card.Footer>
                                                            </Card>
                                                        </Col>
                                                        
                                                    ))
                                                }
                                            </Row>
                                            <Row style={{marginTop:"10px"}}>
                                                {console.log(Object.values(serpapiPagination))}
                                                {
                                                    serpapiPagination && Object.keys(serpapiPagination).length > 0 ?
                                                    (
                                                        
                                                        currentPage == 1 ?
                                                        (
                                                            <>
                                                                
                                                                <Col md={{span:2, offset:10}}>
                                                                    <Button type="submit" className='col-md-8' style={{ backgroundColor: "#47B5EC", border: 0 }} onClick={handleNext}>Next</Button>
                                                                </Col>
                                                            </>
                                                        ) :
                                                        (
                                                            <>
                                                                <Col md={{span:2}}>
                                                                    <Button type="submit" className='col-md-8' style={{ backgroundColor: "#47B5EC", border: 0 }} onClick={handlePrev}>Prev</Button>
                                                                </Col>
                                                                <Col md={{span:2, offset:8}}>
                                                                    <Button type="submit" className='col-md-8' style={{ backgroundColor: "#47B5EC", border: 0 }} onClick={handleNext}>Next</Button>
                                                                </Col>
                                                            </>
                                                        )

                                                        
                                                    ) : null
                                                }
                                                
                                            </Row>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div id="services" className="services section">
                                <div className="container">
                                    <div className="row">
                                        <Card style={{paddingBottom:"20px"}}>
                                            <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s" style={{marginTop:"20px"}}>
                                                        <h4 id="">0 <em>Candidates</em></h4>
                                                        
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Layout>
            ) :
            (
                <>

                <div style={{width: "100px",height: "100px",position: "absolute",top:"0",bottom: "0",left: "0",right: "0",margin: "auto"}}>
                    
                        <Button style={{backgroundColor:"#47B5EC",borderColor:"#47B5EC"}} disabled>
                            <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            />
                            Loading...
                        </Button>
                </div>
                </>
            )
        }
        </>
    )
}