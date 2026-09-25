import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube'
import Footer from '../../components/student/footer'
import Rating from '../../components/student/Rating'


const Player = () => {
  const { enrolled, calucateChapterTime,navigate} = useContext(AppContext)
  const { courseId } = useParams()
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({})
  const [playerSection, setPlayerSection] = useState(null)

  const getCourseData = () => {
    enrolled.map((course) => {
      if (course._id === courseId) {
        setCourseData(course);
      }
    })
  }

  const toggleSection = (index) => {
    setOpenSection((prev) => (
      {
        ...prev,
        [index]: !prev[index],
      }))
  }

  useEffect(() => {
    getCourseData(),
      toggleSection()
  }, [enrolled])
  return (
    <>
    <div className='m-2'>
        <button
          onClick={() => navigate('/my-enrollment')}
          className='inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50 cursor-pointer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M7 16l-4-4m0 0l4-4m-4 4h18'
            />
          </svg>

          <span className='ml-1 font-bold text-lg'>
            Back
          </span>
        </button>
      </div>
      <div className='lg:w-240 lg:p-3 p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
        {/*left column */}
        <div className='text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {courseData && courseData.courseContent.map((chapter, index) => (
              <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={() => toggleSection(index)}>
                  <div className='flex items-center gap-2'>
                    <img className={`tranform transition-transform ${openSection[index] ? 'rotate-180' : ''}`} src={assets.down_arrow_icon} alt='arrow_icon' />
                    <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-default'>
                    {chapter.chapterContent.length} lectures - {calucateChapterTime(chapter)}
                  </p>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                    {chapter.chapterContent.map((lecture, i) => (
                      <li
                        key={i}
                        className="flex items-start  gap-2 py-1"
                      >

                        <img
                          src={false ? assets.blue_tick_icon : assets.play_icon}
                          alt="play icon"
                          className="w-4 h-4 mt-1"
                        />

                        <div className='flex item-center justify-between w-full text-gray-800 text-xs md:text-default'>
                          <p>{lecture.lectureTitle}</p>

                          <div className="flex gap-2">
                            {lecture.lectureUrl && (
                              <p onClick={() => setPlayerSection({
                                ...lecture, chapter: index + 1, lecture: i + 1
                              })}
                                className='text-blue-500 cursor-pointer'>
                                watch
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
          <div className='flex items-center gap-2 py-3 mt-10'>
            <h1 className='text-xl font-bold'>Rate This Course:</h1>
            <Rating initailRating={0}/>
          </div>
        </div>
{/* right column */}
<div className="w-full md:mt-10 lg:mt-1 lg:w-250">
          {playerSection ? (
            <div>
              {/* Player section */}
              <YouTube videoId={playerSection.lectureUrl.split('/').pop()} iframeClassName='w-full aspect-video h-120'/>
              <div className='flex justify-between items-center mt-1'>
                <p>
                  {playerSection.chapter}.{playerSection.lecture}.{playerSection.lectureTitle}
                </p>
                <button className='text-blue-600'>{false? 'completed':'Mark Complete'}</button>
              </div>

            </div>
          ) : (
            <img
              src={courseData ? courseData.courseThumbnail : ''}
              alt="" 
              className='lg:h-120 lg:w-250'
            />
          )}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Player
