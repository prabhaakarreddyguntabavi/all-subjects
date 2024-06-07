import {useParams} from 'react-router-dom'

import EnglishSubject from '../EnglishSubject'

const EachSpecificSubjects = () => {
  const {id} = useParams()
  console.log(typeof id)

  return <EnglishSubject />
}

export default EachSpecificSubjects
