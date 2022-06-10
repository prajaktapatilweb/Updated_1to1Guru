import React from 'react'
import { Table } from "reactstrap";

export default function Stageshomi() {
    return (
        <div>

            <h5 className="text-danger">
                Stages of Competition -</h5>

            <ul><li>Online theory competition</li><li>
                Online practical competition</li><li>
                    Online General interview</li><li>
                    Online Evaluation and interview on action research project</li><li>
                    Structure of the Competition</li></ul>

            <Table hover className="accortable">
                <tbody>
                    <tr>
                        <td><strong>Phase No.</strong></td>
                        <td><strong>Description of the phase</strong></td>
                        <td><strong>Max<br></br>
                            Marks</strong></td>
                        <td><strong>Duration of exams</strong></td>
                        <td><strong>Selection Procedure</strong></td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Phase I</strong>
                        </td>
                        <td><strong>Written test :</strong><br></br>
                            100 multiple choice questions based on science &amp; General Knowledge in science as per standard
                        </td>
                        <td>
                            100
                        </td>
                        <td>
                            90-min.
                        </td>
                        <td>
                            <ol type="a">
                                <li><strong>Selection for phase II</strong> - Merit wise Top 7.5% students per region per medium will be selected for phase II. They will get Merit Certificate.</li>
                                <li>Remaining passed students will get Passing certificate.</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="5">
                            <strong>Phase II</strong>
                        </td>
                        <td><strong>Practical Test: </strong></td>
                        <td></td>
                        <td></td>
                        <td rowSpan="5">
                            <ol type="a">
                                <li><strong>Selection for phase III</strong> - 30% of the marks obtained in phase I + marks obtained in phase II&nbsp;will be considered.</li>
                                <li>Merit wise Top 10 % students will be selected for phase III and IV</li>
                            </ol>
                        </td>
                    </tr>
                    <tr >
                        <td><strong>For VI std.:</strong><br></br>
                            There will be 5 experiments of 6 marks each based on general science.</td>
                        <td>30</td>
                        <td>30 min.<br></br>
                            (6 min per experiment)</td>
                    </tr>
                    <tr>
                        <td><strong>For IX std. :</strong><br></br>
                            a) Physics: 1 experiment</td>
                        <td>10</td>
                        <td>10 min</td>
                    </tr>
                    <tr>
                        <td>b) Chemistry: 1 experiment</td>
                        <td>10</td>
                        <td>10 min</td>
                    </tr>
                    <tr>
                        <td>c) Biology: 10 questions based on 10 specimens</td>
                        <td>10</td>
                        <td>10 min</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Phase III</strong>
                        </td>
                        <td><strong>General interview</strong></td>
                        <td>
                            30
                        </td>
                        <td>
                            5 to 10 min.
                        </td>
                        <td rowSpan="2">
                            <ol type="a"> <strong>Selection for Medal :</strong> Considering 30% marks of Phase I, + Marks score of (Phase II + Phase III + Phase IV)

                                <li>Merit wise Top 10% candidates will get Gold Medal, certificate and scholarship of Rs. 3000/-.</li>
                                <li>Next 60% candidates will get Silver Medal, certificate and scholarship of Rs. 2000/-</li>
                                <li>Remaining all candidates will get Bronze Medal, certificate and scholarship of Rs. 1000/-</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong> Phase IV</strong>
                        </td>
                        <td><strong>Evaluation of action research project and interview on action research work.</strong></td>
                        <td>30</td>
                        <td>5 to 10 min.</td>
                    </tr>
                </tbody>
            </Table>
            <br></br>

            <h5 className="text-danger">Other Prizes (Separate trophy in following categories for each region)</h5>

            <h6>
                Dr. Vikram Sarabhai Trophy (Lakshvedhi Gunvatta Puraskar ) To School, - For remarkable performance which bags maximum medals.<br></br>
                Vidnyan Jattha Trophy ( Kamal Sahbhag Puraskar ) – To School, For maximum participation.
            </h6>
        </div>
    )
}
