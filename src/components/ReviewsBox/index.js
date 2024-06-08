import {useState, useEffect} from 'react'
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
} from 'draft-js'
import 'draft-js/dist/Draft.css'

import './index.css'

const ReviewsBox = ({id}) => {
  const [editorState, setEditorState] = useState(() => {
    const storedContent = localStorage.getItem(`reviewsContent_${id}`)
    if (storedContent) {
      const contentState = convertFromRaw(JSON.parse(storedContent))
      return EditorState.createWithContent(contentState)
    }
    return EditorState.createEmpty()
  })

  const handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const onChange = newEditorState => {
    setEditorState(newEditorState)
  }

  useEffect(() => {
    const storedContent = localStorage.getItem(`reviewsContent_${id}`)
    if (storedContent) {
      const contentState = convertFromRaw(JSON.parse(storedContent))
      setEditorState(EditorState.createWithContent(contentState))
    } else {
      setEditorState(EditorState.createEmpty())
    }
  }, [id])

  const toggleStyle = style => {
    onChange(RichUtils.toggleInlineStyle(editorState, style))
  }

  const saveContentToLocalStorage = () => {
    const contentState = editorState.getCurrentContent()
    const serializedContent = JSON.stringify(convertToRaw(contentState))
    localStorage.setItem(`reviewsContent_${id}`, serializedContent)
  }

  return (
    <div className="reviews-box">
      <div className="reviews-toolbar">
        <div className="all-options">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => toggleStyle('BOLD')}
          >
            B
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => toggleStyle('ITALIC')}
          >
            I
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => toggleStyle('UNDERLINE')}
          >
            U
          </button>
        </div>
        <button
          type="button"
          className="save-btn"
          onClick={saveContentToLocalStorage}
        >
          Save
        </button>
      </div>
      <div className="editor-container">
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          className="text-editor-container"
        />
      </div>
    </div>
  )
}

export default ReviewsBox
