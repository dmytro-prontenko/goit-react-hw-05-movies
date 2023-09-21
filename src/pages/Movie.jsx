import React from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
      Movie
    </div>
  )
}

export default Movie
