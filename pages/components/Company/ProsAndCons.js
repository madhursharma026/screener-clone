import { Card } from "react-bootstrap";
import styles from "../../../styles/ScreenSection.module.css";

export default function ProsAndCons() {
  return (
    <div className={styles.containerBG} style={{ marginTop: "-100px" }}>
      <div className={`containerWidth ${styles.screenSectionCard}`}>
        <Card>
          <Card.Body>
            <div className="row">
              <div className="col-lg-6">
                <Card className="border-success h-100">
                  <Card.Body>
                    <h5>PROS</h5>
                    <ul>
                      <li>Company is almost debt free.</li>
                      <li>Company is expected to give good quarter</li>
                      <li>
                        Company has delivered good profit growth of 192% CAGR
                        over last 5 years
                      </li>
                      <li>
                        Company has a good return on equity (ROE) track record:
                        3 Years ROE 131%
                      </li>
                      <li>
                        Company has been maintaining a healthy dividend payout
                        of 49.0%
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-6 mb-lg-0 mb-3">
                <Card className="border-danger h-100 mt-lg-0 mt-3">
                  <Card.Body>
                    <h5>CONS</h5>
                    <ul>
                      <li>Stock is trading at 57.0 times its book value</li>
                      <li>
                        Promoter holding has decreased over last 3 years: -9.08%
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <p>* The pros and cons are machine generated.</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
