import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {GrEdit} from 'react-icons/gr'
import ReviewsBox from '../ReviewsBox'
import './index.css'

const allSubjectsLessons = [
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
  {
    id: 'BS-2',
    lesson: '2 - Business Support Services',
    mainPoints: [
      "Here's a summary of the main points from the provided document, organized by topic:",
      '### Introduction to Business Support Services',
      '- Meaning and Importance: Business support services are essential for smooth business operations, assisting from the purchase of raw materials to product delivery. These services include banking, insurance, transportation, warehousing, and communication.',
      '### Types of Business Support Services',
      '- Banking: Provides finance, payment facilities, and other financial services.',
      '- Insurance: Offers coverage for various business risks.',
      '- Transportation: Facilitates the physical movement of goods.',
      '- Communication: Ensures information exchange among producers, middlemen, and consumers.',
      '- Warehousing: Provides storage facilities to meet seasonal demand variations.',
      '### Banking',
      '- Definition: Banking involves accepting deposits, granting loans, and providing other financial services. Banks act as intermediaries dealing with public money.',
      '- Importance:',
      '  - Capital formation',
      '  - Services to business',
      '  - Reducing currency use',
      '  - Mobilizing savings',
      '  - Supporting the rural economy',
      '  - Ensuring balanced economic development',
      '  - Developing credit policies',
      '- Types of Banks:',
      '  - Commercial Banks: Serve the general public, offering deposits and loans.',
      '    - Public Sector Banks: Majority stake held by the government.',
      '    - Private Sector Banks: Majority share capital held by private individuals.',
      '    - Foreign Banks: Incorporated in foreign countries, operating branches domestically.',
      '  - Co-operative Banks: Owned and managed by members, focusing on self-help and mutual assistance.',
      '    - Types: Primary credit societies, central co-operative banks, state co-operative banks.',
      '  - Development Banks: Provide long-term credit for capital-intensive investments.',
      '  - Specialized Banks: Focus on specific activities, e.g., EXIM Bank, SIDBI, NABARD.',
      '  - Central Bank: Guides and regulates the banking system, e.g., Reserve Bank of India (RBI).',
      '- Functions of Commercial Banks:',
      '  - Primary Functions:',
      '    - Accepting Deposits: From public, offering various deposit accounts.',
      '    - Lending Money: Providing loans and advances to customers.',
      '  - Secondary Functions:',
      '    - Agency Services: Collection/payment of cheques and bills, purchase/sale of securities, payment of expenses, etc.',
      '    - General Utility Services: Issuing drafts, letters of credit, safe deposit lockers, ATM cards, internet banking, etc.',
      '### Types of Bank Accounts',
      '- Saving Deposit Account: Encourages savings with small initial deposits, limited withdrawals, and lower interest rates.',
      '- Current Deposit Account: Facilitates frequent deposits and withdrawals for businesses, no interest, overdraft facilities.',
      '- Fixed Deposit Account: Fixed sum for a specified period, higher interest rates, no withdrawal during the period.',
      '- Recurring Deposit Account: Regular monthly deposits for a specified period, cumulative interest, no early withdrawals.',
      '### Banking Services',
      '- Issue of Bank Draft: Safe and convenient money transfer from one place to another, involves payment of a sum plus commission, processed through bank branches.',
    ],
  },
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
                  {eachLesson.mainPoints.map((point, index) => {
                    if (point.startsWith('#')) {
                      // Increase font size for headings
                      const level = point.match(/^#+/)[0].length
                      const text = point.slice(level)
                      const fontSize = 24 - level * 4 // Decreasing font size for higher levels
                      return (
                        <span key={index} style={{fontSize: `${fontSize}px`}}>
                          {text}
                        </span>
                      )
                    } else if (point.startsWith('**')) {
                      // Bold text
                      const text = point.slice(2)
                      return (
                        <span key={index} style={{fontWeight: 'bold'}}>
                          {text}
                        </span>
                      )
                    } else if (point.startsWith('-')) {
                      if (point.startsWith('**')) {
                        // Bold text
                        const text = point.slice(2)
                        return (
                          <li key={index} style={{fontWeight: 'bold'}}>
                            {text}
                          </li>
                        )
                      }
                      // List items for points
                      return <li key={index}>{point.slice(2)}</li>
                    } else {
                      // Normal text
                      return <p key={index}>{point}</p>
                    }
                  })}
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
