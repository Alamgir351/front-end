import React, { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'

import { axiosWithAuth } from '../utilities/axiosWithAuth'

export default function StudentProfile(props) {
    const [student, setStudent] = useState([])
    useEffect(() => {
      const getStudent = () => {
        axiosWithAuth()
          .get(`https://better-prof-app.herokuapp.com/api/students/${props.match.params.id}`)
          .then(response => {
            console.log(response)
            setStudent(response.data);
          })
          .catch(error => {
            console.error('Server Error', error)
          })
      }

      getStudent();
    }, [props.match.params.id]);

    return (
        <Segment className="studentProfileContainer">
            <Segment className="studentProfileHeaderContainer">
                <h2>{student.name}</h2>
                {/* <img src={student.img} alt='portrait of student' /> */}
            </Segment>
            <Segment className="studentProfileProjectsContainer">
                {student.projects && student.projects.map( project => {
                    return (
                        <Segment>
                            <NavLink to={``}>
                                <h3>{project.name}</h3>
                            </NavLink>
                        </Segment>
                    )
                })}
            </Segment>
        </Segment>
    )
}