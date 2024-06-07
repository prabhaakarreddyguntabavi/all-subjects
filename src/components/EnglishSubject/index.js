import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const EnglishSubject = () => {
  const navigate = useNavigate()

  const backToAllSubjects = () => {
    navigate('/subject')
  }

  return (
    <div className="container">
      <div className="header">
        <button type="button" className="back-btn" onClick={backToAllSubjects}>
          Back
        </button>
        <h1>My English Subjects</h1>
      </div>
      <div className="dropdown-container">
        <button className="dropdown-btn">1 - My First Steps</button>
        <ul className="dropdown-content">
          <li>First Point</li>
          <li>First Point</li>
        </ul>

        <button className="dropdown-btn">2 - Leisure</button>
        <div className="dropdown-content">Content for Leisure</div>

        <button className="dropdown-btn">3 - Reading With Understanding</button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">4 - Father, Dear Father</button>
        <div className="dropdown-content">Content for Father, Dear Father</div>

        <button className="dropdown-btn">5 - Fuel of the Future</button>
        <div className="dropdown-content">Content for Fuel of the Future</div>

        <button className="dropdown-btn">6 - My Grandmothers House</button>
        <div className="dropdown-content">
          Content for My Grandmothers House
        </div>

        <button className="dropdown-btn">7 - Reading With Understanding</button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">8 - A Case of Suspicion</button>
        <div className="dropdown-content">Content for A Case of Suspicion</div>

        <button className="dropdown-btn">
          9 - My Son will not a Beggar be
        </button>
        <div className="dropdown-content">
          Content for My Son will not a Beggar be
        </div>

        <button className="dropdown-btn">
          10 - Where the Mind is Without Fear
        </button>
        <div className="dropdown-content">
          Content for Where the Mind is Without Fear
        </div>

        <button className="dropdown-btn">
          11 - Reading With Understanding
        </button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">12 - If I Were You</button>
        <div className="dropdown-content">Content for If I Were You</div>

        <button className="dropdown-btn">13 - The Tiger in the Tunnel</button>
        <div className="dropdown-content">
          Content for The Tiger in the Tunnel
        </div>

        <button className="dropdown-btn">14 - The Road not Taken</button>
        <div className="dropdown-content">Content for The Road not Taken</div>

        <button className="dropdown-btn">
          15 - Reading With Understanding
        </button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">16 - I Must Know the Truth</button>
        <div className="dropdown-content">
          Content for I Must Know the Truth
        </div>

        <button className="dropdown-btn">17 - India-Her Past and Future</button>
        <div className="dropdown-content">
          Content for India-Her Past and Future
        </div>

        <button className="dropdown-btn">18 - Night of the Scorpion</button>
        <div className="dropdown-content">
          Content for Night of the Scorpion
        </div>

        <button className="dropdown-btn">
          19 - Reading With Understanding
        </button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">
          20 - Reading With Understanding
        </button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">
          21 - Reading With Understanding
        </button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">
          22 - Reading With Understanding
        </button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">
          23 - Reading With Understanding
        </button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">
          24 - Reading With Understanding
        </button>
        <div className="dropdown-content">
          Content for Reading With Understanding
        </div>

        <button className="dropdown-btn">25 - Bholi</button>
        <div className="dropdown-content">Content for Bholi</div>

        <button className="dropdown-btn">
          26A - The Reception Desk and You
        </button>
        <div className="dropdown-content">
          Content for The Reception Desk and You
        </div>

        <button className="dropdown-btn">27A - Managing The Telephone</button>
        <div className="dropdown-content">
          Content for Managing The Telephone
        </div>

        <button className="dropdown-btn">
          28A - Analysing Turns in Telephoning
        </button>
        <div className="dropdown-content">
          Content for Analysing Turns in Telephoning
        </div>

        <button className="dropdown-btn">
          29A - Controlling Strategies and Out-Going Calls
        </button>
        <div className="dropdown-content">
          Content for Controlling Strategies and Out-Going Calls
        </div>

        <button className="dropdown-btn">30A - Aids for a Receptionist</button>
        <div className="dropdown-content">
          Content for Aids for a Receptionist
        </div>

        <button className="dropdown-btn">
          26B - Face to face Communication in Business
        </button>
        <div className="dropdown-content">
          Content for Face to face Communication in Business
        </div>

        <button className="dropdown-btn">
          27B - Writing Memos and Letters
        </button>
        <div className="dropdown-content">
          Content for Writing Memos and Letters
        </div>

        <button className="dropdown-btn">28B - Writing e-mails</button>
        <div className="dropdown-content">Content for Writing e-mails</div>

        <button className="dropdown-btn">29B - Writing Reports</button>
        <div className="dropdown-content">Content for Writing Reports</div>

        <button className="dropdown-btn">30B - Writing Job Applications</button>
        <div className="dropdown-content">
          Content for Writing Job Applications
        </div>

        <button className="dropdown-btn">
          31B - Appearing for an Interview
        </button>
        <div className="dropdown-content">
          Content for Appearing for an Interview
        </div>
      </div>
    </div>
  )
}

export default EnglishSubject
