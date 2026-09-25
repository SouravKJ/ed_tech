import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Footer from '../../components/student/footer'


const MyEnrollment = () => {

  const { enrolled, calculateCourseDuration, navigate } = useContext(AppContext)

  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLecture: 4 },
    { lectureCompleted: 1, totalLecture: 5 },
    { lectureCompleted: 3, totalLecture: 6 },
    { lectureCompleted: 4, totalLecture: 4 },
    { lectureCompleted: 0, totalLecture: 3 },
    { lectureCompleted: 5, totalLecture: 7 },
    { lectureCompleted: 6, totalLecture: 8 },
    { lectureCompleted: 2, totalLecture: 6 },
    { lectureCompleted: 4, totalLecture: 10 },
    { lectureCompleted: 3, totalLecture: 5 },
    { lectureCompleted: 7, totalLecture: 7 },
    { lectureCompleted: 1, totalLecture: 4 },
    { lectureCompleted: 0, totalLecture: 2 },
    { lectureCompleted: 5, totalLecture: 5 }
  ])

  return (
    <>
      {/* Back Button */}
      <div className='m-4'>
        <button
          onClick={() => navigate('/course-list')}
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

      <div className='md:px-36 px-8 pt-10'>

        <h1 className='text-2xl font-semibold'>
          My Enrollment
        </h1>

        <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>

          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
            <tr>
              <th className='px-4 py-3 font-semibold truncate'>
                Course
              </th>

              <th className='px-4 py-3 font-semibold truncate'>
                Duration
              </th>

              <th className='px-4 py-3 font-semibold truncate'>
                Completed
              </th>

              <th className='px-4 py-3 font-semibold truncate'>
                Status
              </th>
            </tr>
          </thead>

          <tbody className='text-gray-700'>

            {enrolled.map((course, index) => {

              // Calculate progress percentage
              const progress = progressArray[index]

              const percentage = progress
                ? (progress.lectureCompleted / progress.totalLecture) * 100
                : 0

              return (
                <tr
                  key={index}
                  className='border-b border-gray-500/20'
                >

                  {/* Course */}
                  <td className='md:px-4 pl-2 md:pl-4 py-3'>

                    <div className='lg:flex items-center space-x-3'>

                      <img
                        src={course.courseThumbnail}
                        alt='thumbnail'
                        className='w-14 sm:w-20 md:w-24'
                      />

                      <div className='flex-1'>
                        <p className='mb-1 max-sm:text-sm'>
                          {course.courseTitle}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Duration */}
                  <td className='px-4 py-3 max-sm:hidden'>
                    {calculateCourseDuration(course)}
                  </td>

                  {/* Completed */}
                  <td className='px-4 py-3 max-sm:hidden'>
                    {progress
                      ? `${progress.lectureCompleted} / ${progress.totalLecture}`
                      : '0 / 0'
                    }

                    <span> Lectures</span>
                  </td>

                  {/* Status */}
                  <td className='px-4 py-3 max-sm:text-right'>

                    <div className='flex items-center gap-3 justify-end'>

                      {/* Progress Circle */}
                      <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'>
                        <CircularProgressbar
                          value={percentage}
                          text={`${Math.round(percentage)}%`}
                        />
                      </div>

                      {/* Status Button */}
                      <button
                        className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 text-white max-sm:text-xs rounded-lg cursor-pointer'
                        onClick={() => navigate('/player/' + course._id)}
                      >
                        {progress &&
                          progress.lectureCompleted === progress.totalLecture
                          ? 'Completed'
                          : 'Ongoing'
                        }
                      </button>

                    </div>

                  </td>

                </tr>
              )
            })}

          </tbody>

        </table>

      </div>
      <Footer/>
    </>
  )
}

export default MyEnrollment