import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'

import ReviewsBox from '../ReviewsBox'

// import Cookies from 'js-cookie'

import './index.css'

const allSubjectsLessions = [
  {id: 'BS-1', lesson: '1 - Nature and Scope of Business'},
  {id: 'BS-2', lesson: '2 - Business Support Services'},
  {id: 'BS-3', lesson: '3 - Business Environment'},
  {id: 'BS-4', lesson: '4 - Forms of Business Organisations'},
  {id: 'BS-5', lesson: '5 - Company Form of Business Organisation'},
  {id: 'BS-6', lesson: '6 - Fundamentals of Management'},
  {id: 'BS-7', lesson: '7 - Planning and Organising'},
  {id: 'BS-8', lesson: '8 - Staffing and Directing'},
  {id: 'BS-9', lesson: '9 - Co-ordination and Controlling'},
  {id: 'BS-10', lesson: '10 - Financial Planning and Management'},
  {id: 'BS-11', lesson: '11 - Short Term Sources of Finance'},
  {id: 'BS-12', lesson: '12 - Long-term Sources of Business Finance'},
  {id: 'BS-13', lesson: '13 - The Financial Market'},
  {id: 'BS-14', lesson: '14 - Introduction to Marketing'},
  {id: 'BS-15', lesson: '15 - The Marketing Mix'},
  {id: 'BS-16', lesson: '16 - Advertising and Salesmanship'},
  {id: 'BS-17', lesson: '17 - Consumer Protection'},
  {id: 'BS-18', lesson: '18 - Internal Trade'},
  {id: 'BS-19', lesson: '19 - External Trade'},
  {id: 'BS-20', lesson: '20 - Self-Employment'},
  {id: 'BS-21', lesson: '21 - Job Employment'},
  {id: 'BS-22', lesson: '22 - Skill Development'},
  {id: 'BS-23', lesson: '23 - Modern Modes of Business'},
]

const BusinessStudies = () => {
  const [showTopics, setSelectedLesson] = useState(-1)
  const [showTextArea, setShowTextArea] = useState(-1)
  const [textArea, setTextArea] = useState('')

  const navigate = useNavigate()

  const backToAllSubjects = () => {
    navigate('/')
  }

  useEffect(() => {
    const storedData = localStorage.getItem(showTopics)
    if (storedData) {
      setTextArea(storedData)
    } else {
      setTextArea('')
    }
  }, [showTopics])

  console.log('TextArea Value:', textArea)

  const onClickCallFunction = id => {
    if (showTopics === id) {
      setSelectedLesson(-1)
    } else {
      setSelectedLesson(id)
    }
  }

  const setShowTextAreaFunction = id => {
    if (showTextArea === id) {
      setShowTextArea(-1)
    } else {
      setShowTextArea(id)
    }
  }

  return (
    <div className="container">
      <div className="header">
        <button type="button" className="back-btn" onClick={backToAllSubjects}>
          Back
        </button>
        <h1 className="each-lesson-main-heading">
          My Business Studies Subjects
        </h1>
      </div>
      <div className="dropdown-container">
        {allSubjectsLessions.map(eachLesson => (
          <div key={eachLesson.id}>
            <div className="dropdown-btn">
              <button
                className="lesson-button-style"
                type="button"
                onClick={() => onClickCallFunction(eachLesson.id)}
              >
                {eachLesson.lesson}
              </button>
              {showTopics === eachLesson.id ? (
                <MdKeyboardArrowUp
                  className="icons-styles"
                  onClick={() => onClickCallFunction(eachLesson.id)}
                />
              ) : (
                <MdKeyboardArrowDown
                  className="icons-styles"
                  onClick={() => onClickCallFunction(eachLesson.id)}
                />
              )}
            </div>
            {showTopics === eachLesson.id && (
              <div className="detailed-container">
                <ul className="dropdown-content">
                  <li>First Point</li>
                  <li>Second Point</li>
                </ul>
                <div className="edit-detailed">
                  <GrEdit
                    onClick={() => setShowTextAreaFunction(eachLesson.id)}
                  />
                </div>
                {showTextArea === eachLesson.id && (
                  <>
                    <ReviewsBox id={eachLesson.id} />
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusinessStudies
