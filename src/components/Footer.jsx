import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#F6F9FA] footer-center text-base-content p-4">
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by Kindora Ltd</p>
    </aside>
  </footer>
  )
}

export default Footer