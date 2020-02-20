import React from 'react'

const Citater = ({citater, deleteCitat}) => {
  const citatList = citater.map(citat => {
    if (citat.citat) {
      return (
        <div className="citat" key={citat.id}>
          <h2>{ citat.overskrift }</h2>
          <div>{ citat.citat }</div>
          <h3>{ citat.kunstner }</h3>
          <div className="citatButton">
            <button onClick={() => {deleteCitat(citat.id)}}>Slet Citat</button>
          </div>
          </div>
      )
    } else {
      return null
    }
  });

  return(
    <div className="citat-list">
      { citatList }
    </div>
  )
}

export default Citater