import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "../../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className="containerWidth">
      <div className="row mt-5 d-md-flex d-none">
        <div className="col-xxl-3 col-xl-5 col-md-6">
          <img
            src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg"
            alt="#ImgNotFound"
            className="imgLogo"
          />
          <h5 className="mt-3">Stock analysis and screening tool</h5>
          <h6 className="text-muted mt-3">
            Mittal Analytics Private Ltd © 2009-2024
          </h6>
          <h6 className="text-muted">Made with in India.</h6>
          <p className="fs-6 mt-4">
            Data provided by C-MOTS Internet Technologies Pvt Ltd
          </p>
          <Link href="#" className="text-muted">
            Terms & Privacy.
          </Link>
        </div>
        <div className="col-xxl-4 col-xl-6 col-md-6 offset-xxl-5 offset-xl-1">
          <div className="row">
            <div className="col">
              <h5>Product</h5>
              <p>Premium</p>
              <p className={styles.FooterNavs}>What's new?</p>
              <p className={styles.FooterNavs}>Learn</p>

              <Button
                className={`px-2 py-1 bg-white text-primary border-primary ${styles.FooterNavsBtns}`}
              >
                <i className="fa fa-flash" />
                &nbsp;INSTALL
              </Button>
            </div>
            <div className="col">
              <h5>Product</h5>
              <p>About us</p>
              <p className={styles.FooterNavs}>Support</p>
            </div>
            <div className="col">
              <h5>Team</h5>
              <p>
                <i className="fa fa-sun-o"></i>
                &nbsp;Light
              </p>
              <p className={styles.FooterNavs}>
                <i className="fa fa-moon-o"></i>
                &nbsp;Dark
              </p>
              <p className={styles.FooterNavs}>
                <i className="fa fa-desktop"></i>
                &nbsp;Auto
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 d-md-none d-flex">
        <img
          src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg"
          alt="#ImgNotFound"
          style={{ width: "150px" }}
        />
        <div className="row mb-5 mt-3">
          <div className="col-md col-6 mt-sm-0 mt-3">
            <h5>Theme</h5>
            <p>Premium</p>
            <p className={styles.FooterNavs}>What's new?</p>
            <p className={styles.FooterNavs}>Learn</p>

            <Button
              className={`px-2 py-1 bg-white text-primary border-primary ${styles.FooterNavsBtns}`}
            >
              <i className="fa fa-flash" />
              &nbsp;INSTALL
            </Button>
          </div>
          <div className="col-md col-6 mt-sm-0 mt-3">
            <h5>Product</h5>
            <p>About us</p>
            <p className={styles.FooterNavs}>Support</p>
          </div>
          <div className="col-md col-6 mt-sm-0 mt-3">
            <h5>Product</h5>
            <p>
              <i className="fa fa-sun-o"></i>
              &nbsp;Light
            </p>
            <p className={styles.FooterNavs}>
              <i className="fa fa-moon-o"></i>
              &nbsp;Dark
            </p>
            <p className={styles.FooterNavs}>
              <i className="fa fa-desktop"></i>
              &nbsp;Auto
            </p>
          </div>
        </div>
        <hr />
        <h5 className="mt-3">Stock analysis and screening tool</h5>
        <h6 className="text-muted mt-3">
          Mittal Analytics Private Ltd © 2009-2024
        </h6>
        <h6 className="text-muted">Made with in India.</h6>
        <p className="fs-6 mt-4">
          Data provided by C-MOTS Internet Technologies Pvt Ltd
        </p>
        <Link href="#" className="text-muted">
          Terms & Privacy.
        </Link>
      </div>
      <br />
      <br />
    </div>
  );
}
