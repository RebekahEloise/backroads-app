import React from 'react'


const Title = ({word1, word2}) => {
  return (
    <div className="section-title">
    <h2>{word1} <span>{word2}</span></h2>
  </div>
  )
}

export default Title;