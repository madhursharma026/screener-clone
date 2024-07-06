import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../../../styles/Header.module.css";
import Link from "next/link";

export default function Header2() {
  return (
    <>
      <Navbar expand="lg" className="bg-white fixed-top">
        <div className={`d-md-none containerWidth d-lg-flex`}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.NavTabs}`}>
              <Link href="/" className="pt-2">
                <img
                  src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg"
                  alt="#ImgNotFound"
                  className="me-5 imgLogo"
                />
              </Link>
              <Link
                className={`pt-2 text-black ${styles.LinkTagStyle}`}
                href="/"
              >
                HOME
              </Link>
              <Link
                className={`mx-5 p-2 text-black ${styles.LinkTagStyle}`}
                href="/screens"
              >
                SCREENS
              </Link>
              <NavDropdown title="TOOLS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#tools/Action1">
                  Action 01
                </NavDropdown.Item>
                <NavDropdown.Item href="#tools/Action2">
                  Action 02
                </NavDropdown.Item>
                <NavDropdown.Item href="#tools/Action3">
                  Action 03
                </NavDropdown.Item>
                <NavDropdown.Item href="#tools/Action4">
                  Action 04
                </NavDropdown.Item>
                <NavDropdown.Item href="#tools/Action5">
                  Action 05
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button
              className={`px-2 mx-3 py-1 bg-white text-black border-primary-subtle ${styles.NavTabsBtns}`}
            >
              <i className="fa fa-user"></i>&nbsp;LOGIN
            </Button>
            <Button
              className={`px-2 py-1 bg-white text-primary border-primary ${styles.NavTabsBtns}`}
            >
              GET FREE ACCOUNT
            </Button>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className={`d-md-block containerWidth py-3`}>
        <img
          src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg"
          alt="#ImgNotFound"
          className="me-5 imgLogo"
        />
      </div>
    </>
  );
}
