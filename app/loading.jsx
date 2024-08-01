'use client'
import ClipLoader from 'react-spinners/ClipLoader';

const Override = {
    display:'block',
    margin:'100px auto',
}

const pageLoader = ({loading}) => {
  return (
    <ClipLoader
    color = {"#3b82f6"}
    loading={loading}
    cssOverride={Override}
    size={150}
    aria-label="Loading spinner"
    data-testid = "loader"/>
  )
}

export default pageLoader