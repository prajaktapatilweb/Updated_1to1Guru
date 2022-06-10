import React from 'react'
import { Badge } from "reactstrap";
import { FaCheck } from 'react-icons/fa';

export default function E1li(props) {
    return (
        <div>
            <li className="py-2">
                <div className="d-flex align-items-center">
                     <div>
                        <Badge className="badge-circle mr-3" color="success">
                            {/* <i className="fa fa-check" /> */}
                            <FaCheck />
                        </Badge>
                    </div> 
                    <div>
                        <h5 className="mb-0" >
                        {props.text1}
                            <span className="font-weight-bold"> {props.texth} </span>
                            {props.text2}
                        </h5>
                    </div>
                </div>
            </li>

        </div>
    )
}
