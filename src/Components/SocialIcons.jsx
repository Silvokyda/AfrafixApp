import React from 'react'
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";



function SocialIcons() {
  return (
    <>
    <ul className="list-unstyled d-flex my-4">
      <li><a href='#' className="me-3 footer-icons text-decoration-none" alt="X-icon" ><XIcon /></a></li>
      <li><a href='#' className="me-3 footer-icons text-decoration-none" alt="facebook-icon" ><FacebookIcon /></a></li>
      <li><a href='#' className="me-3 footer-icons text-decoration-none" alt="instagram-icon" ><InstagramIcon /></a></li>
      <li><a href='#' className="me-3 footer-icons text-decoration-none" alt="linkedin-icon" ><LinkedInIcon /></a></li>
    </ul>
    
    </>
  )
}

export default SocialIcons