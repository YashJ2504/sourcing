
import Layout from '../Components/Layout'

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { search, likeCandidate, getCandidates, removeCandidate } from '../api';
import { BsHandThumbsUp, HandThumbsUpFill } from 'react-bootstrap-icons';


export default function Dashboard() {

    const [type, setType] = useState(null);
    const [jobTitle, setJobTitle] = useState("");
    const [keywords, setKeywords] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [searchError,setSearchError] = useState("");

    const [result,setResult] = useState([]);

    const [likedCandidates, setLikedCandidates] = useState([]);
    const [validated, setValidated] = useState(false);


    
    const handleUnLike = async (candidate) => {
        console.log(candidate);

        const unLikedCandidate = likedCandidates.find((lc) => lc.title == candidate.title);
        console.log(unLikedCandidate)
        await removeCandidate(unLikedCandidate._id).then(function (res) {
            if (res && res.status == 200) {
                console.log(res.data);
                let allLikedCandidates = likedCandidates.filter((lc) => lc.title != candidate.title);
                setLikedCandidates(allLikedCandidates)

            } else {
                console.log(res);

            }
        })
    }



    useEffect(() => {
        const fetchLikedCandidates = async(dept = null, catg = []) => {
            await getCandidates().then(function (res) {
                if (res && res.status == 200) {
                    setLikedCandidates(res.data.candidates);
                } else {
                    console.log(res);

                }
            })
        }
        
        fetchLikedCandidates();
    },[])
    return (
        <Layout>
            
            {
                likedCandidates && likedCandidates.length > 0 ?
                (
                    <div id="services" className="services section">
                        <div className="container">
                            <div className="row">
                                <Card style={{paddingBottom:"20px"}}>
                                    <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s" style={{marginTop:"20px"}}>
                                        <h4 id="">List of Liked <em>Candidates</em></h4>

                                    </div>
                                    <Row xs={1} md={2} className="g-4">
                                        {
                                            
                                            likedCandidates && likedCandidates.map((val) => (
                                                <Col md={4} >
                                                    <Card style={{maxHeight:"300px",}}>
                                                        
                                                        <Card.Body onClick={() => {
                                                                window.open (val.link, '_ blank');
                                                            }} style={{cursor:"pointer"}}>
                                                            <Card.Title>{val.title}</Card.Title>
                                                            <Card.Text>
                                                                {val.snippet}
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                            {
                                                                
                                                                <>
                                                                <small className="text-muted"> </small><HandThumbsUpFill onClick={() => { handleUnLike(val)}} style={{cursor:"pointer",color:"#47B5EC"}}/>
                                                                <Link href={val.link} target="_blank" style={{color:"#47B5EC",float:"right"}}>
                                                                    <Button style={{backgroundColor:"#47B5EC",borderColor:"#47B5EC"}}> LinkedIn</Button>
                                                                </Link>
                                                                </>
                                                                
                                                            }
                                                            
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                                
                                            ))
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
                                <Card style={{paddingBottom:"10px"}}>
                                    <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s" style={{marginTop:"20px"}}>
                                        <h4 id="">0 Liked <em>Candidates</em></h4>
                                        
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                )
            }
        </Layout>
    )
}