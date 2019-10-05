import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="md:fixed top-0 left-0 z-10 p-8 pb-0 md:p-12 lg:p-16">
      <div className="flex flex-wrap md:block">
        <h1>
          <Link className="uppercase font-sans font-bold tracking-widest mb-6 block" to="/">
            Mat Hayward
          </Link>
        </h1>

        <nav className="ml-auto md:ml-0 text-right md:text-left">
          <ul>
            <li>
              <Link
                activeClassName="is--active"
                className="nav-item"
                to="/">
                  Biography
              </Link>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="nav-item"
                to="/photography">
                  Photography
              </Link>
            </li>
            <li>
              <a
                className="nav-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/mathaywarduk">
                  Instagram
                </a>
              </li>
            <li>
              <a
                className="nav-item"
                href="mailto:hello@mathayward.co.uk">
                  Contact
              </a>
            </li>
            <li>
              <Link
                activeClassName="is--active"
                className="nav-item"
                to="/journal">
                  Journal
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div className="hidden md:block fixed top-0 right-0 z-10 p-8 md:p-12 lg:p-16 ">
      <span className="text-xs uppercase font-sans meta-date">
        2016
        <span className="block">2019</span>
      </span>
    </div>
  </header>
)

export default Header
