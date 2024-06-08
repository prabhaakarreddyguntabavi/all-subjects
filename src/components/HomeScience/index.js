import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'

import ReviewsBox from '../ReviewsBox'

// import Cookies from 'js-cookie'

import './index.css'

const allSubjectsLessions = [
  {id: 'HM-1', lesson: '1. Home Family and Home Science'},
  {id: 'HM-2', lesson: '2. Ethics In Daily Life'},
  {id: 'HM-3', lesson: '3. Family Health and Security'},
  {id: 'HM-4', lesson: '4. Food, Nutrition and Health'},
  {id: 'HM-5', lesson: '5. Meal Planning'},
  {id: 'HM-6', lesson: '6. Nutritional Status'},
  {id: 'HM-7', lesson: '7. Purchase and Storage of Food'},
  {id: 'HM-8', lesson: '8. Preparation of Food'},
  {id: 'HM-9', lesson: '9. Food Preservation'},
  {id: 'HM-10', lesson: '10. Family Resources Management'},
  {id: 'HM-11', lesson: '11. Time and Energy Management'},
  {id: 'HM-12', lesson: '12. Space Management'},
  {id: 'HM-13', lesson: '13. Income Management'},
  {id: 'HM-14', lesson: '14. Energy Conservation'},
  {id: 'HM-15', lesson: '15. Environment Management'},
  {id: 'HM-16', lesson: '16. Household Equipment'},
  {id: 'HM-17', lesson: '17. Consumer Education'},
  {id: 'HM-18', lesson: '18. Growth and Development (0-5)'},
  {id: 'HM-19', lesson: '19. Growth and Development (6-11)'},
  {id: 'HM-20', lesson: '20. Adolescence'},
  {id: 'HM-21', lesson: '21. Concerns and Issues in Human Development'},
  {id: 'HM-22', lesson: '22. Introduction to Fabric Sciences'},
  {id: 'HM-23', lesson: "23. Yarn and it's construction"},
  {id: 'HM-24', lesson: '24. Fabric Construction'},
  {id: 'HM-25', lesson: '25. Textile Finishes'},
  {id: 'HM-26', lesson: '26. Selection of Textiles and Clothing'},
  {id: 'HM-27', lesson: '27. Care and Maintenance'},
  {id: 'HM-28', lesson: '28A. Housekeeping Introduction to Housekeeping'},
  {id: 'HM-29', lesson: '29A. Cleaning and Cleaning Materials'},
  {id: 'HM-30', lesson: '30A. Maintenance of Premises'},
  {id: 'HM-31', lesson: '31A. Aesthetics at Home'},
  {id: 'HM-32', lesson: '28B. Creative Hand Embroidery'},
  {id: 'HM-33', lesson: '29B. The Design'},
  {id: 'HM-34', lesson: '30B. Colour'},
  {id: 'HM-35', lesson: '31B. Embroidery Stitches'},
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
        <h1 className="each-lesson-main-heading">My Home Science Subjects</h1>
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
