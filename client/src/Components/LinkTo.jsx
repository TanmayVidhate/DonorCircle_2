import React, { Children } from 'react'
import { Link } from "react-router";
function LinkTo({ PageName, url, className, children }) {
  // console.log("className Linkto=",className)
  // console.log("url==",url)
  return (
    <div >
      <Link to={url} className={`uppercase text-white text-lg font-semibold mr-10 text-center block ${className}`}>{PageName}{children}</Link>
    </div>
  )
}

export default LinkTo