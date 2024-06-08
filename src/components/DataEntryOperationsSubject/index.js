import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'

import ReviewsBox from '../ReviewsBox'

// import Cookies from 'js-cookie'

import './index.css'

const allSubjectsLessions = [
  {
    id: 'DAO1',
    lesson: '1. Basics of Computer',
  },
  {
    id: 'DAO2',
    lesson: '2. Operating System',
  },
  {
    id: 'DAO3',
    lesson: '3. Basics of Word Processing',
  },
  {
    id: 'DAO4',
    lesson: '4. Formatting Documents',
  },
  {
    id: 'DAO5',
    lesson: '5. Mail Merge',
  },
  {
    id: 'DAO6',
    lesson: '6. Basics of Spreadsheet',
  },
  {
    id: 'DAO7',
    lesson: '7. Formatting Worksheets',
  },
  {
    id: 'DAO8',
    lesson: '8. Formulas, Functions and Charts',
  },
  {
    id: 'DAO9',
    lesson: '9. Creating Presentation',
  },
  {
    id: 'DAO10',
    lesson: '10. Introduction to Internet',
  },
]

const DataEntryOperationsSubject = () => {
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
        <h1 className="each-lesson-main-heading">My English Subjects</h1>
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

export default DataEntryOperationsSubject
