import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'
export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    const [allCourse, setAllCourse] = useState([])
    const [enrolled,setEnrolled]=useState([])
    const [isEducator,setIsEducator]=useState(true);
    const fatchAllCourses = async () => {
        setAllCourse(dummyCourses)
    }
    useEffect(() => {
        fatchAllCourses()
        fetchUserEnrolled()
    }, [allCourse])

    const calculateRating = (course) => {
        if (!course || !course.courseRatings || course.courseRatings.length === 0) {
            return 0;
        }

        let total = 0;

        course.courseRatings.forEach((rating) => {
            total += rating.rating;
        });

        return total / course.courseRatings.length;
    };
     
    // calculate chapter time of course
    const calucateChapterTime=(chapter)=>{
        let time=0;
        chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration)
        return humanizeDuration(time*60*1000,{units:['h','m']});
    }

    //duration for each chapter
    const calculateCourseDuration=(course)=>{
        let time=0
        course.courseContent.map((chapter)=>chapter.chapterContent.map(
            (lecture)=>time+=lecture.lectureDuration
        ))
        return humanizeDuration(time*60*1000,{units:['h','m']})
    }

    //number of lecture
    const calculateNoLecture=(course)=>{
        let totalLecture=0;
        course.courseContent.forEach(chapter=>{
            if(Array.isArray(chapter.chapterContent)){
                totalLecture+=chapter.chapterContent.length;
            }
        });
        return totalLecture;
    }

    //fatch enrolled Courses
    const fetchUserEnrolled=async () => {
        setEnrolled(dummyCourses)
    }
    const value = {
        currency, allCourse, navigate, calculateRating,isEducator,
        setIsEducator,calculateCourseDuration,
        calucateChapterTime,calculateNoLecture,
        fetchUserEnrolled,enrolled
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}