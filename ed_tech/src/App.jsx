import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from "./pages/student/CourseList"
import CourseDetails from './pages/student/CourseDetails'
import Player from './pages/student/Player'
import MyEnrollment from './pages/student/MyEnrollment'
import Loading from './pages/student/Loading'
import Tutor from './pages/tutor/tutor'
import Dashboard from './pages/tutor/Dashboard'
import MyCourse from './pages/tutor/MyCourse'
import StudentEnrolled from './pages/tutor/StudentEnrolled'
import AddCourse from './pages/tutor/AddCourse'
import Navbar from './components/student/Navbar'
import Enrollment from './pages/student/enrollment'

const App = () => {
  const isEducatorRoute=useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/course-list' element={<CourseList/>}/>
        <Route path='/course-list/:input' element={<CourseList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollment' element={<MyEnrollment/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        <Route path='/enrollment' element={<Enrollment/>}/>
        <Route path='/educator' element={<Tutor/>}>
          <Route path='educator' element={<Dashboard/>}/>
          <Route path='my-courses' element={<MyCourse/>}/>
          <Route path='student-enrolled' element={<StudentEnrolled/>}/>
          <Route path='add-course' element={<AddCourse/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
