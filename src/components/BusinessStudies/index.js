import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'

import ReviewsBox from '../ReviewsBox'

// import Cookies from 'js-cookie'

import './index.css'

const allSubjectsLessions = [
  {
    id: 'BS-1',
    lesson: '1 - Nature and Scope of Business',
    mainPoints: [
      'Human Activities: Activities undertaken to satisfy needs or wants, classified as economic (for livelihood) and non-economic (for self-satisfaction)',
      'Economic Activities: Regularly engaged activities for earning a livelihood, such as farming, working in a factory, or business.',
      'Occupations: Economic activities on a regular basis, categorized into profession, employment, and business.',
      'Profession: Specialized knowledge and training required, regulated by a professional body, and service-oriented with a fee.',
      'Employment: Working for an employer under contract for a salary or wage, with terms and conditions.',
      'Business: Regular production or trade of goods and services for profit, involving investment and risk.',
      'Importance of Business: Enhances living standards, generates employment, utilizes resources, and contributes to national image and international trade.',
      'Objectives of Business: Include economic, social, human, national, and global goals, such as profit, social welfare, employee welfare, national development, and global competitiveness.',
      'Role of Profits: Essential for survival, growth, incentive, prestige, efficiency, and livelihood in business.',
      'Business Risks: Uncertainties leading to potential losses, caused by natural, economic, political, human, and technical factors.',
      'Industry Classification: Primary (agriculture, mining), secondary (manufacturing), tertiary (services), and other specific types like cottage, agro-based, mineral-based, and marine-based industries.',
      'Commerce: Distribution of goods and services, including trade and auxiliaries like transport, warehousing, insurance, and banking to overcome trade obstacles.',
    ],
  },
  {id: 'BS-2', lesson: '2 - Business Support Services', mainPoints: []},
  {id: 'BS-3', lesson: '3 - Business Environment', mainPoints: []},
  {id: 'BS-4', lesson: '4 - Forms of Business Organisations', mainPoints: []},
  {
    id: 'BS-5',
    lesson: '5 - Company Form of Business Organisation',
    mainPoints: [],
  },
  {id: 'BS-6', lesson: '6 - Fundamentals of Management', mainPoints: []},
  {id: 'BS-7', lesson: '7 - Planning and Organising', mainPoints: []},
  {id: 'BS-8', lesson: '8 - Staffing and Directing', mainPoints: []},
  {id: 'BS-9', lesson: '9 - Co-ordination and Controlling', mainPoints: []},
  {
    id: 'BS-10',
    lesson: '10 - Financial Planning and Management',
    mainPoints: [],
  },
  {id: 'BS-11', lesson: '11 - Short Term Sources of Finance', mainPoints: []},
  {
    id: 'BS-12',
    lesson: '12 - Long-term Sources of Business Finance',
    mainPoints: [],
  },
  {id: 'BS-13', lesson: '13 - The Financial Market', mainPoints: []},
  {id: 'BS-14', lesson: '14 - Introduction to Marketing', mainPoints: []},
  {id: 'BS-15', lesson: '15 - The Marketing Mix', mainPoints: []},
  {id: 'BS-16', lesson: '16 - Advertising and Salesmanship', mainPoints: []},
  {id: 'BS-17', lesson: '17 - Consumer Protection', mainPoints: []},
  {id: 'BS-18', lesson: '18 - Internal Trade', mainPoints: []},
  {id: 'BS-19', lesson: '19 - External Trade', mainPoints: []},
  {id: 'BS-20', lesson: '20 - Self-Employment', mainPoints: []},
  {id: 'BS-21', lesson: '21 - Job Employment', mainPoints: []},
  {id: 'BS-22', lesson: '22 - Skill Development', mainPoints: []},
  {id: 'BS-23', lesson: '23 - Modern Modes of Business', mainPoints: []},
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
                {eachLesson.mainPoints.length > 0 && (
                  <ul className="business-dropdown-content">
                    {eachLesson.mainPoints.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
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
