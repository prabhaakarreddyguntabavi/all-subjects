import {useEffect} from 'react'
import Cookies from 'js-cookie'
import {useNavigate, Link} from 'react-router-dom'

import './index.css'

const AllSubjects = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      console.log('JWT Token is undefined, redirecting to login...')
      navigate('/login')
    }
  }, [navigate])

  const listOfSubject = [
    {
      id: 1,
      subject: 'English',
    },
    {
      id: 2,
      subject: 'Home Science',
    },
    {
      id: 3,
      subject: 'Mass Communication',
    },
    {
      id: 4,
      subject: 'Data Entry Operations',
    },
    {
      id: 5,
      subject: 'Business Studies',
    },
  ]

  const onClickLogout = () => {
    navigate('/login')
    Cookies.remove('jwt_token')
  }

  return (
    <div className="all-subjects-container">
      <h1 className="all-subjects-heading">My Subjects</h1>
      <div id="all-subjects-list">
        {listOfSubject.map(eachSubject => (
          <Link className="Saved-videos-link" to={`/subject/${eachSubject.id}`}>
            <button
              type="button"
              className="all-subject-btn"
              key={eachSubject.id}
            >
              {eachSubject.subject}
            </button>
          </Link>
        ))}
        <button
          type="button"
          className="all-subject-btn logout-button"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default AllSubjects
