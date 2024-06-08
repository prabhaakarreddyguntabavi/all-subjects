import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'

import ReviewsBox from '../ReviewsBox'

// import Cookies from 'js-cookie'

import './index.css'

const allSubjectsLessions = [
  {id: 'HM-1', lesson: 'Ethics In Daily Life'},
  {id: 'HM-2', lesson: 'Family Health and Security'},
  {id: 'HM-3', lesson: 'Food, Nutrition and Health'},
  {id: 'HM-4', lesson: 'Meal Planning'},
  {id: 'HM-5', lesson: 'Nutritional Status'},
  {id: 'HM-6', lesson: 'Purchase and Storage of Food'},
  {id: 'HM-7', lesson: 'Preparation of Food'},
  {id: 'HM-8', lesson: 'Food Preservation'},
  {id: 'HM-9', lesson: 'Family Resources Management'},
  {id: 'HM-10', lesson: 'Time and Energy Management'},
  {id: 'HM-11', lesson: 'Space Management'},
  {id: 'HM-12', lesson: 'Income Management'},
  {id: 'HM-13', lesson: 'Energy Conservation'},
  {id: 'HM-14', lesson: 'Environment Management'},
  {id: 'HM-15', lesson: 'Household Equipment'},
  {id: 'HM-16', lesson: 'Consumer Education'},
  {id: 'HM-17', lesson: 'Growth and Development (0-5)'},
  {id: 'HM-18', lesson: 'Growth and Development (6-11)'},
  {id: 'HM-19', lesson: 'Adolescence'},
  {id: 'HM-20', lesson: 'Concerns and Issues in Human Development'},
  {id: 'HM-21', lesson: 'Introduction to Fabric Sciences'},
  {id: 'HM-22', lesson: "Yarn and it's construction"},
  {id: 'HM-23', lesson: 'Fabric Construction'},
  {id: 'HM-24', lesson: 'Textile Finishes'},
  {id: 'HM-25', lesson: 'Selection of Textiles and Clothing'},
  {id: 'HM-26', lesson: 'Care and Maintenance'},
  {
    id: 'HM-27',
    lesson: 'Optional Module (Choose any one of the following two)',
  },
  {id: 'HM-28', lesson: 'A. Housekeeping Introduction to Housekeeping'},
  {id: 'HM-29', lesson: 'Cleaning and Cleaning Materials'},
  {id: 'HM-30', lesson: 'Maintenance of Premises'},
  {id: 'HM-31', lesson: 'Aesthetics at Home'},
  {id: 'HM-32', lesson: 'Creative Hand Embroidery'},
  {id: 'HM-33', lesson: 'The Design'},
  {id: 'HM-34', lesson: 'Colour'},
  {id: 'HM-35', lesson: 'Embroidery Stitches'},
]

const HomeScience = () => {
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

export default HomeScience
