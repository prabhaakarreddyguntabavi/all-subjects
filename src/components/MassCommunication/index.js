import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'

import ReviewsBox from '../ReviewsBox'

// import Cookies from 'js-cookie'

import './index.css'

const allSubjectsLessions = [
  {id: 'MC-1', lesson: '1. Introduction to Communication'},
  {id: 'MC-2', lesson: '2. Mass Communication'},
  {id: 'MC-3', lesson: '3. Role and Impact of Mass Media'},
  {id: 'MC-4', lesson: '4. Development Communication'},
  {id: 'MC-5', lesson: '5. Introduction to Print Media'},
  {id: 'MC-6', lesson: '6. What is News?'},
  {id: 'MC-7', lesson: '7. Reporting and Editing'},
  {id: 'MC-8', lesson: '8. Language Press in India'},
  {id: 'MC-9', lesson: '9. Characteristics of Radio'},
  {id: 'MC-10', lesson: '10. The Radio Station'},
  {id: 'MC-11', lesson: '11. Formats of Radio Programmes'},
  {id: 'MC-12', lesson: '12. Radio Programme Production'},
  {id: 'MC-13', lesson: '13. Television in India'},
  {id: 'MC-14', lesson: '14. Role of Television as a Mass Medium'},
  {id: 'MC-15', lesson: '15. Television Channels'},
  {id: 'MC-16', lesson: '16. Television Program Production'},
  {id: 'MC-17', lesson: '17. Advertising - An Introduction'},
  {id: 'MC-18', lesson: '18. Advertising - An Industry'},
  {id: 'MC-19', lesson: '19. Public Relations - An Introduction'},
  {id: 'MC-20', lesson: '20. Public Relations - Tools'},
  {id: 'MC-21', lesson: '21. Characteristics of New Media'},
  {id: 'MC-22', lesson: '22. New Media: The Industry'},
  {id: 'MC-23', lesson: '23. New Media: Target Audience'},
  {id: 'MC-24', lesson: '24. New Media: Employment Opportunities'},
  {id: 'MC-25A', lesson: '25A. Introduction to Traditional Media'},
  {id: 'MC-25B', lesson: '25B. Introduction to Photography'},
  {id: 'MC-26A', lesson: '26A. Types of Traditional Media'},
  {id: 'MC-26B', lesson: '26B. The Camera'},
  {
    id: 'MC-27A',
    lesson: '27A. Comparison of Traditional Media with Electronic Media',
  },
  {id: 'MC-27B', lesson: '27B. Photojournalism'},
  {id: 'MC-28A', lesson: '28A. Communication through Traditional Media'},
  {id: 'MC-28B', lesson: '28B. Role of a Photojournalist'},
]

const MassCommunication = () => {
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
          My Mass Communication Subjects
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

export default MassCommunication
