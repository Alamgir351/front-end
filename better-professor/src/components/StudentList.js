import React, { useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'

import StudentProfile from './StudentProfile'
import { axiosWithAuth } from '../utilities/axiosWithAuth'
import DummyComponent from './DummyComponent'

export default function StudentList() {
    const [students, setStudents] = useState([])
    useEffect(() => {
      const getStudents = () => {
        axiosWithAuth()
          .get('https://better-prof-app.herokuapp.com/api/students')
          .then(response => {
            setStudents(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }

      getStudents();
    }, []);
 

    return (
        <>
        <Segment className="studentListContainer">
            {students.map(student => {
                return (
                    <NavLink exact to={`/students/${student.id}`} key={student.id}>
                        <Segment className="studentListCard">
                            <img src={student.img} alt='portrait of student'/>
                            <h2>{student.name}</h2>
                        </Segment>
                    </NavLink>
                )
            })}
        </Segment>
        <Route exact path="/students/:id" render={props => <StudentProfile {...props}/>} />
        <Route path="/students/:id/project/:project_id" component={DummyComponent} />
        </>
    )
}
