import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'
import ReviewsBox from '../ReviewsBox'
import TextEditor from '../TestingFolder'
import './index.css'

const allSubjectsLessons = [
  {
    id: 'BS-1',
    lesson: '1 - Nature and Scope of Business',
  },
  {
    id: 'BS-2',
    lesson: '2 - Business Support Services',
  },
  {id: 'BS-3', lesson: '3 - Business Environment'},
  {id: 'BS-4', lesson: '4 - Forms of Business Organisations'},
  {
    id: 'BS-5',
    lesson: '5 - Company Form of Business Organisation',
    mainPoints: [],
  },
  {id: 'BS-6', lesson: '6 - Fundamentals of Management'},
  {id: 'BS-7', lesson: '7 - Planning and Organising'},
  {id: 'BS-8', lesson: '8 - Staffing and Directing'},
  {id: 'BS-9', lesson: '9 - Co-ordination and Controlling'},
  {
    id: 'BS-10',
    lesson: '10 - Financial Planning and Management',
    mainPoints: [],
  },
  {id: 'BS-11', lesson: '11 - Short Term Sources of Finance'},
  {
    id: 'BS-12',
    lesson: '12 - Long-term Sources of Business Finance',
    mainPoints: [],
  },
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
  // Add other lessons as needed
]

const BusinessStudies = () => {
  const [showTopics, setShowTopics] = useState(-1)
  const [showTextArea, setShowTextArea] = useState(-1)

  const navigate = useNavigate()

  const backToAllSubjects = () => {
    navigate('/')
  }

  const onClickToggleLesson = id => {
    setShowTopics(prevId => (prevId === id ? -1 : id))
  }

  const onClickToggleTextArea = id => {
    setShowTextArea(prevId => (prevId === id ? -1 : id))
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
        {allSubjectsLessons.map(eachLesson => (
          <div key={eachLesson.id}>
            <div className="dropdown-btn">
              <button
                className="lesson-button-style"
                type="button"
                onClick={() => onClickToggleLesson(eachLesson.id)}
              >
                {eachLesson.lesson}
              </button>
              {showTopics === eachLesson.id ? (
                <MdKeyboardArrowUp
                  className="icons-styles"
                  onClick={() => onClickToggleLesson(eachLesson.id)}
                />
              ) : (
                <MdKeyboardArrowDown
                  className="icons-styles"
                  onClick={() => onClickToggleLesson(eachLesson.id)}
                />
              )}
            </div>
            {showTopics === eachLesson.id && (
              <div className="detailed-container">
                <div className="business-dropdown-content">
                  <TextEditor id={eachLesson.id} />
                </div>
                <div className="edit-detailed">
                  <GrEdit
                    onClick={() => onClickToggleTextArea(eachLesson.id)}
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
