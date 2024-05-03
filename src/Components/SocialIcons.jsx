import React from 'react'
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";



function SocialIcons() {
  return (
    <>
    <ul className="list-unstyled d-flex my-4">
      <a href='#' className="me-3 text-decoration-none"><li><XIcon /></li></a>
      <a href='#'className="me-3 text-decoration-none"><li><FacebookIcon /></li></a>
      <a href='#'className="me-3 text-decoration-none"><li><InstagramIcon /></li></a>
      <a href='#'className="me-3 text-decoration-none"><li><LinkedInIcon /></li></a>

    </ul>
    
    </>
  )
}

export default SocialIcons