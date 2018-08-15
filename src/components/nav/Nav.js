import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <div className="navMaster">
      <Link to="/form"><button>Form</button></Link>
      <Link to="/"><button>Cards</button></Link>
    </div>
  )
}
