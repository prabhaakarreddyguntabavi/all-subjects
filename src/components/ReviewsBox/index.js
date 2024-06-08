import {useState} from 'react'
import './index.css'

const ReviewsBox = ({id}) => {
  const [googleDocsLink, setGoogleDocsLink] = useState(() => {
    const savedLink = localStorage.getItem(id)
    return savedLink || ''
  })

  const handleSaveClick = () => {
    localStorage.setItem(id, googleDocsLink)
  }

  return (
    <div className="reviews-box">
      <div className="input-element-link-container">
        <input
          type="text"
          className="reviews-input"
          placeholder="Enter your Google Docs link here..."
          value={googleDocsLink}
          onChange={event => setGoogleDocsLink(event.target.value)}
        />
        <button
          type="button"
          className="google-link-save-button"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
      {googleDocsLink && (
        <iframe
          title="Google Docs Viewer"
          src={googleDocsLink}
          className="google-docs-iframe"
          frameBorder="0"
        />
      )}
    </div>
  )
}

export default ReviewsBox
