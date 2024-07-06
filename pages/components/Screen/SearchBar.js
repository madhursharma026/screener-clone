import styles from "../../../styles/Home.module.css";

export default function SearchBar() {
  return (
    <>
      <div className="containerWidth">
        <div className={styles.searchBarContainerHeight}>
          <div className={styles.searchBarContainerWeight}>
            <div className="text-center">
              <img
                src="https://cdn-static.screener.in/img/logo-black.f44abb4998d1.svg"
                alt="#ImgNotFound"
                style={{ maxWidth: "350px" }}
              />
              <p className="fs-5 mt-3">
                Stock analysis and screening tool for investors in India.
              </p>
              <div className="input-group mt-4 input-group-lg mb-3">
                <span className="input-group-text bg-white" id="basic-addon1">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Search for a company"
                  aria-label="Search for a company"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="px-sm-2">
                <h6 className={`m-2 d-inline`}>Or analyse: </h6>
                <button className={`btn m-2 ${styles.companyName}`}>
                  Sandur Manganese
                </button>
                <button className={`btn m-2 ${styles.companyName}`}>
                  Shilchar Tech
                </button>
                <button className={`btn m-2 ${styles.companyName}`}>
                  Kovai Medical
                </button>
                <button className={`btn m-2 ${styles.companyName}`}>
                  NGL Fine Chem
                </button>
                <button className={`btn m-2 ${styles.companyName}`}>
                  Permanent Magnet
                </button>
                <button className={`btn m-2 ${styles.companyName}`}>
                  Pix Transmission
                </button>
                <button className={`btn m-2 ${styles.companyName}`}>
                  RACL Geartech
                </button>
                <button className={`btn m-2 ${styles.companyName}`}>
                  Rossell India
                </button>
                <button className={`btn m-2 ${styles.companyName}`}>
                  Shivalik Bimetal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
