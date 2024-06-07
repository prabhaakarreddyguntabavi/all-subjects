import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'

import ReviewsBox from '../ReviewsBox'

// import Cookies from 'js-cookie'

import './index.css'

const allSubjectsLessions = [
  {
    id: 1,
    lesson: '1 - My First Steps',
  },
  {
    id: 2,
    lesson: '2 - Leisure',
  },
  {
    id: 3,
    lesson: '3 - Reading With Understanding',
  },
  {
    id: 4,
    lesson: '4 - Father, Dear Father',
  },
  {
    id: 5,
    lesson: '5 - Fuel of the Future',
  },
  {
    id: 6,
    lesson: '6 - My Grandmothers House',
  },
  {
    id: 7,
    lesson: '7 - Reading With Understanding',
  },
  {
    id: 8,
    lesson: '8 - A Case of Suspicion',
  },
  {
    id: 9,
    lesson: '9 - My Son will not a Beggar be',
  },
  {
    id: 10,
    lesson: '10 - Where the Mind is Without Fear',
  },
  {
    id: 11,
    lesson: '11 - Reading With Understanding',
  },
  {
    id: 12,
    lesson: '12 - If I Were You',
  },
  {
    id: 13,
    lesson: '13 - The Tiger in the Tunnel',
  },
  {
    id: 14,
    lesson: '14 - The Road not Taken',
  },
  {
    id: 15,
    lesson: '15 - Reading With Understanding',
  },
  {
    id: 16,
    lesson: '16 - I Must Know the Truth',
  },
  {
    id: 17,
    lesson: '17 - India-Her Past and Future',
  },
  {
    id: 18,
    lesson: '18 - Night of the Scorpion',
  },
  {
    id: 19,
    lesson: '19 - Reading With Understanding',
  },
  {
    id: 20,
    lesson: '20 - Reading With Understanding',
  },
  {
    id: 21,
    lesson: '21 - Reading With Understanding',
  },
  {
    id: 22,
    lesson: '22 - Reading With Understanding',
  },
  {
    id: 23,
    lesson: '23 - Reading With Understanding',
  },
  {
    id: 24,
    lesson: '24 - Reading With Understanding',
  },
  {
    id: 25,
    lesson: '25 - Bholi',
  },
  {
    id: 26,
    lesson: '26A - The Reception Desk and You',
  },
  {
    id: 27,
    lesson: '27A - Managing The Telephone',
  },
  {
    id: 28,
    lesson: '28A - Analysing Turns in Telephoning',
  },
  {
    id: 29,
    lesson: '29A - Controlling Strategies and Out-Going Calls',
  },
  {
    id: 30,
    lesson: '30A - Aids for a Receptionist',
  },
  {
    id: 31,
    lesson: '26B - Face to face Communication in Business',
  },
  {
    id: 32,
    lesson: '27B - Writing Memos and Letters',
  },
  {
    id: 33,
    lesson: '28B - Writing e-mails',
  },
  {
    id: 34,
    lesson: '29B - Writing Reports',
  },
  {
    id: 35,
    lesson: '30B - Writing Job Applications',
  },
  {
    id: 36,
    lesson: '31B - Appearing for an Interview',
  },
]

const EnglishSubject = () => {
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

  const handleSaveToLocalStorage = key => {
    localStorage.setItem(key, textArea)
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

export default EnglishSubject
