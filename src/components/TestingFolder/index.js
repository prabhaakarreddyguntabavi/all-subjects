import {useState, useEffect} from 'react'

import axios from 'axios'

function TextEditor() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data')
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>{data ? <div>Display your data here</div> : <p>Loading...</p>}</div>
  )
}

export default TextEditor
