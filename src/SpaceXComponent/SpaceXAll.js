import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function AllData() {
    const [rocket, setRocket] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.get("https://api.spacexdata.com/v3/launches?limit=100")
            .then(response => {
                setRocket(response.data)
                setLoading(false)
            })
    }, [])
     
    return (
        <div className="container">
            <div>{loading && <Spinner />}</div>
            <div className="row mt-3 ">
                <div className="col-12 my-5">
                    <div className="d-flex flex-wrap flex-row">
                        {
                              !loading && rocket.map((item, index) => {
                             return   <div style={{width:'200px'}} className="card m-5" key={index}>
                                <img alt="Image" className='card-image-top card-header'  src={item.links.mission_patch} height="200"  />
                                <div className="card-body" >
                                 <h6>Mission: {item.mission_name}</h6>
                                 <h6>Launch Year: {item.launch_year}</h6>
                                 <h6>Successful Lauch: {item.launch_success?'true':'false'}</h6>
                                 <h6>Land Success: {item.land_success?'':'false'}</h6>
                                </div> 
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}