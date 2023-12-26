import React from 'react'

export default function Navbar() {
  return (
    <><nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary header">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Optica</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        More Information
      </a>
      <ul className="dropdown-menu dropdown-menu-end"> 
        <li><a className="dropdown-item" href="/">A</a></li>
        <li><a className="dropdown-item" href="/">B</a></li> 
        <li><a className="dropdown-item" href="/">C</a></li>
      </ul>
    </li>
  </ul>
</div>

      </div>
    </div>
  </nav></>
  )
}
