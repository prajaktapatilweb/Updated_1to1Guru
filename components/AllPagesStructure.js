import React from 'react'
import { Container, Card } from "reactstrap";


export default function AllPagesStructure({ grade, board, subject }) {
    const AllSyllabus = {
        class8: {
            cbse: {
                math: {
                    item1: 'CBSE Syllabus for Class 8 Math',
                    item2: 'Early start always helps students to perform better in understanding the concepts better and score good marks in the final examination. The subjects like Math, Science and English should be explored for syllabus and thus important concepts in the beginning of the academic year. Therefore, to help students understand the syllabus, we have here provided the CBSE syllabus for Class 8 Math. This CBSE Syllabus for Class 8 will help students in planning their studies in advance. So, in case of difficulties in understanding the concepts, students can ask their teachers to clarify the concepts and score good marks in the exam.',
                    DetailSubjects: ['algebra', 'Geometry'],
                },
                english:
                    ['1. sentence', '2. tense']
            },
            state: {
                math:
                    ['2222algebra', '2222Geometry'],
                english:
                    ['4343. sentence', '3434. tense']
            },
        },
    }
    console.log(grade, board, subject)
    // console.log(AllSyllabus[grade][board][subject])
    return (
        <div>


            {AllSyllabus[grade] ?
                (<>
                    <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
                        <Container>
                            <h5>
                                <span className="font-weight-bold text-warning display-7">
                                    {AllSyllabus[grade][board][subject].item1}
                                </span>{" "}
                                {AllSyllabus[grade][board][subject].item2}

                            </h5>

                            <h1>{subject}            </h1>
                            {AllSyllabus.grade}
                            {AllSyllabus[grade][board][subject].DetailSubjects.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}


                        </Container></section>
                </>) : null
            }


        </div>
    )
}
