import React from 'react';
import { Link } from "react-router-dom";

import '../styles/Nav.css';

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link className="nav-links" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-links" to="/Summary">
          <li>Summary</li>
        </Link>
        <Link className="nav-links" to="/FinancialData">
          <li>Financial Data</li>
        </Link>
      </ul>
    </nav>
    
  )
}