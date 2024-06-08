import {useEffect} from 'react'
import Cookies from 'js-cookie'
import {useParams, useNavigate} from 'react-router-dom'

import EnglishSubject from '../EnglishSubject'
import DataEntryOperationsSubject from '../DataEntryOperationsSubject'
import HomeScience from '../HomeScience'
import MassCommunication from '../MassCommunication'
import BusinessStudies from '../BusinessStudies'

const EachSpecificSubjects = () => {
  const {id} = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      navigate('/login')
    }
  }, [navigate])

  const getEachSubjectSpecificData = () => {
    switch (id) {
      case '1':
        return <EnglishSubject />
      case '2':
        return <HomeScience />
      case '3':
        return <MassCommunication />
      case '4':
        return <DataEntryOperationsSubject />
      case '5':
        return <BusinessStudies />
      default:
        return <h1>Coming Soon</h1>
    }
  }

  return <>{getEachSubjectSpecificData()}</>
}

export default EachSpecificSubjects
