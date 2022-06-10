import React, {useEffect} from 'react'
import {Button,Col} from 'reactstrap'
import Aos from 'aos'

export default function Servicesbutton(props) {
    useEffect(() => {
        Aos.init({duration:1000});
     
       }, []);
    return (
        <>
        <Col lg="4" className="py-3" data-aos="zoom-in">
            <Button 
                className={`btn-icon btn-3 ml-1 bg-gradient-${props.color}`}
                type="button"
                size="lg"
                style={{width:"100%", height:"70px"}}
            >
                <span className={`btn-inner--icon mr-1 text-${props.tcolor}`}>
                <i className={`ni ni-${props.iconname}`} />
                </span>
                <span className={`btn-inner--text text-${props.tcolor}`} style={{fontSize:"16px"}}>{props.servicename} </span>
            </Button>
            </Col>
        </>
    )
}

