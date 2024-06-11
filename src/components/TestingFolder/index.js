import {useState, useEffect} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './index.css'

const TextEditor = ({id}) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/fg7rkrt0xkrvk')
      .then(response => response.json())
      .then(data => {
        const find_id = data.findIndex(each => each.id === id)
        console.log(find_id)
        console.log(data[find_id])
        if (find_id >= 0) {
          setValue(data[find_id].points)
        } else {
          createNewEntry()
        }
      })
  }, [id])

  const createNewEntry = () => {
    fetch('https://sheetdb.io/api/v1/fg7rkrt0xkrvk', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [
          {
            id,
            points: '',
          },
        ],
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Successfully Created', data)
      })
      .catch(error => console.error('Error creating new entry:', error))
  }

  const handleChange = newValue => {
    setValue(newValue)
  }

  const handleUpdate = () => {
    if (!id) {
      console.error('No ID found.')
      return
    }

    fetch(`https://sheetdb.io/api/v1/fg7rkrt0xkrvk/id/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          points: value,
        },
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error updating entry:', error))
  }

  const modules = {
    toolbar: [
      [{header: [1, 2, 3, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
      ['link', 'image'],
      ['clean'],
    ],
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ]

  return (
    <div className="text-editor-container">
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Start typing here..."
        className="text-editor"
      />
      <div className="text-editor-actions">
        <button type="button" onClick={() => setValue('')}>
          Clear
        </button>
        <button type="button" onClick={handleUpdate}>
          Save
        </button>
      </div>
    </div>
  )
}

export default TextEditor
