import Link from 'next/link';
import React from 'react'


export default function Teamhome(props) {
    const expert = props.expert;
    return (
        <div>

            <div className="card-box text-center">
                <div className="user-pic">
                    <img
                        src={expert.photo}
                        className="img-fluid"
                        alt="User Pic"
                    />

                </div>
                <h4 style={{ color: "black" }}>{expert.name}
                </h4>
                <h6 style={{ color: "black" }}>{expert.position}</h6>
                <hr></hr>
                <p>
                    {expert.shortinfo}
                </p>
                <hr></hr>
                <Link
                    href={{
                        pathname: `teammembers/${expert.objName}`,
                        // query: { name: expert.objName },
                    }}>

                    <a target="_blank" className="btn btn-card" >Know More</a>

                </Link>


            </div>


        </div>
    )
}
