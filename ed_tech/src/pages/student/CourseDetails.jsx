import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import parse from 'html-react-parser'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Footer from '../../components/student/footer'
import Youtube from 'react-youtube'
import YouTube from 'react-youtube'

const CourseDetails = () => {


  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openSection,setOpenSection]=useState({})
  const [isAlready,setIsAlready]=useState(false)
  const [playerData,setPlayerData]=useState(null)
  const { navigate,allCourse,currency, calculateRating, calculateCourseDuration, calucateChapterTime, calculateNoLecture } = useContext(AppContext)

  useEffect(() => {
    console.log("USE EFFECT RUNNING")
    console.log("ID:", id)
    console.log("ALL COURSES:", allCourse)

    if (allCourse?.length > 0) {
      console.log("Calling fetchCourseData...")
      fetchCourseData()
    }
  }, [allCourse, id])

  const fetchCourseData = () => {
    console.log("FETCH COURSE DATA RUNNING")

    const findCourse = allCourse?.find(
      course => course._id.toString() === id
    )

    console.log("FOUND COURSE:", findCourse)

    setCourseData(findCourse)
  }

  const toggleSection=(index)=>{
    setOpenSection((prev)=>(
      {...prev,
        [index]:!prev[index],
    }))
  }

  // Data is not available yet
  if (!courseData) {
    return <div>Loading course...</div>
  }

  return (
    <>
    <div className='m-4'>
          <button onClick={()=>{navigate('/')}}
        className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
            </path>
        </svg>
        <span class="ml-1 font-bold text-lg">Back</span>
    </button>
        </div>
    <div className="relative flex md:flex-row flex-col-reverse gap-10 items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">

      <div className="absolute top-0 left-0 w-full h-section-height -z-10 bg-gradient-to-b from-cyan-100/70"></div>

      <div className='max-w-xl z-10 text-gray-500'>
        <h1 className='md:text-course-details-heading-large 
        text-course-details-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>


        {/* <p>{parse(courseData.CourseDetails)}</p> */}
        <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>
        <div className='flex items-center space-x-2 pt-3 pb-1 text-sm '>

          <p>{calculateRating(courseData)}</p>

          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank}
                alt=''
                className='w-3.5 h-3.5'
              />
            ))}
          </div>

          <p className='text-blue-600'>{courseData.courseRatings.length}</p>
          <p>{courseData.enrolledStudents.length}{courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
        </div>
        <p className='text-sm'>Course by <span className='text-blue-600 underline'>ed_tech</span></p>
        <div className='pt-8 text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {courseData.courseContent.map((chapter, index) => (
              <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'onClick={()=>toggleSection(index)}>
                  <div className='flex items-center gap-2'>
                    <img className={`tranform transition-transform ${openSection[index]?'rotate-180':''}`} src={assets.down_arrow_icon} alt='arrow_icon' />
                    <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-default'>
                    {chapter.chapterContent.length} lectures - {calucateChapterTime(chapter)}
                  </p>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96':'max-h-0'}`}>
                  <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                    {chapter.chapterContent.map((lecture, i) => (
                      <li
                        key={i}
                        className="flex items-start  gap-2 py-1"
                      >
                        
                          <img
                            src={assets.play_icon}
                            alt="play icon"
                            className="w-4 h-4 mt-1"
                          />

                          <div className='flex item-center justify-between w-full text-gray-800 text-xs md:text-default'>
                            <p>{lecture.lectureTitle}</p>

                            <div className="flex gap-2">
                              {lecture.isPreviewFree && (
                                <p onClick={()=>setPlayerData({
                                  videoId: lecture.lectureUrl.split('/').pop()
                                })}
                                 className='text-blue-500 cursor-pointer'>
                                  Preview
                                </p>
                              )}

                              <span>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ['h', 'm'] }
                                )}
                              </span>
                            </div>
                          </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            ))}
          </div>
        </div>

        <div className='py-20 text-sm md:text-default'>
            <h3 className='text-xl font-semibold text-gray-800'>
              Course Description
            </h3>
            <p className='pt-3 rich-text' dangerouslySetInnerHTML={{ __html: courseData.courseDescription}}></p>

        </div>
      </div>

      <div className='max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px] rounded'>
        {
                playerData? 
                  <YouTube videoId={playerData.videoId} opts={{playerVars:{autoplay:1}}} iframeClassName='w-full aspect-video rounded-lg h-70'/>
                :<img src={courseData.courseThumbnail} alt='' className='rounded-lg'/>
        }
       <div className='p-5'>
            <div className='flex gap-2'>
              <img className='w-3.5' src={assets.time_left_clock_icon} alt='time-left icon'/>
              
          
              <p className='text-red-500'><span className='font-medium'>5 days</span> left at this price!</p>
            </div>
            <div className='flex gap-3 items-center pt-2'>
              <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>
                {currency}{(courseData.coursePrice -courseData.discount * courseData.coursePrice /100).toFixed(2)}
              </p>
              <p className='md:text-lg text-gray-500 line-through'>
                {currency}{courseData.coursePrice}
              </p>
              <p className='md:text-lg text-gray-500'>{courseData.discount}% off</p>
            </div>
            <div className='flex item-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500'>
                <div className='flex items-center gap-1'>
                  <img src={assets.star} alt="star icon"/>
                  <p>{calculateRating(courseData)}</p>
                </div>
                <div className='h-4 w-px bg-gray-500/40'></div>
                <div className='flex items-center gap-1'>
                  <img src={assets.time_clock_icon} alt="clock icon"/>
                  <p>{calculateCourseDuration(courseData)}</p>
                </div>
                <div className='h-4 w-px bg-gray-500/40'></div>
                <div className='flex items-center gap-1'>
                  <img src={assets.lesson_icon} alt="lesson icon"/>
                  <p>{calculateNoLecture(courseData)}</p>
                </div>

            </div>
            <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-mwdium cursor-pointer' onClick={()=>navigate('/enrollment')}>{isAlready ? "Enrolled":"Enroll Now"}</button>
            <div className='pt-6'>
              <p className='md:text-xl text-lg font-medium text-gray-800'>what's in the course?</p>
              <ul className='ml-4 pt-2 text-sm md:text-default list-disc test-gray-500'>
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knownledge.</li>
                <li>Certification of Completion.</li>
              </ul>
            </div>
       </div>
      </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default CourseDetails