import Card from "react-bootstrap/Card";
import { Table } from "react-bootstrap";
import styles from "../../../styles/ScreenSection.module.css";

export default function Comparison() {
  return (
    <div className={styles.containerBG} style={{ marginTop: "-100px" }}>
      <div className={`containerWidth ${styles.screenSectionCard}`}>
        <Card className="rounded-4">
          <Card.Body>
            <h3>Peer comparison</h3>
            <main className="d-flex flex-column align-items-center">
              <div className={styles.tableContainer}>
                <Table
                  striped
                  hover
                  responsive
                  className={`${styles.scrollableTable} mt-3`}
                >
                  <thead style={{ fontSize: "15px" }}>
                    <tr>
                      <th className={styles.th}>S.No.</th>
                      <th className={styles.th}>Name</th>
                      <th className={styles.th}>CMP Rs.</th>
                      <th className={styles.th}>P/E</th>
                      <th className={styles.th}>Mar Cap Rs.Cr.</th>
                      <th className={styles.th}>Div Yld %</th>
                      <th className={styles.th}>NP Qtr Rs.Cr.</th>
                      <th className={styles.th}>Qtr Profit Var %</th>
                      <th className={styles.th}>Sales Qtr Rs.Cr. ?</th>
                      <th className={styles.th}>Qtr Sales Var %</th>
                      <th className={styles.th}>ROCE %</th>
                      <th className={styles.th}>Avg PAT 10Yrs Rs.Cr.</th>
                      <th className={styles.th}>Avg Div Payout 3Yrs %</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "15px" }}>
                    <tr>
                      <td className={styles.td}>1.</td>
                      <td className={styles.td}>NMDC</td>
                      <td className={styles.td}>252.28</td>
                      <td className={styles.td}>12.82</td>
                      <td className={styles.td}>73950.96</td>
                      <td className={styles.td}>2.62</td>
                      <td className={styles.td}>1409.78</td>
                      <td className={styles.td}>0.97</td>
                      <td className={styles.td}>6489.31</td>
                      <td className={styles.td}>10.90</td>
                      <td className={styles.td}>31.92</td>
                      <td className={styles.td}>4965.01</td>
                      <td className={styles.td}>39.49</td>
                    </tr>
                    <tr>
                      <td className={styles.td}>2.</td>
                      <td className={styles.td}>NMDC</td>
                      <td className={styles.td}>252.28</td>
                      <td className={styles.td}>12.82</td>
                      <td className={styles.td}>73950.96</td>
                      <td className={styles.td}>2.62</td>
                      <td className={styles.td}>1409.78</td>
                      <td className={styles.td}>0.97</td>
                      <td className={styles.td}>6489.31</td>
                      <td className={styles.td}>10.90</td>
                      <td className={styles.td}>31.92</td>
                      <td className={styles.td}>4965.01</td>
                      <td className={styles.td}>39.49</td>
                    </tr>
                    <tr>
                      <td className={styles.td}>3.</td>
                      <td className={styles.td}>NMDC</td>
                      <td className={styles.td}>252.28</td>
                      <td className={styles.td}>12.82</td>
                      <td className={styles.td}>73950.96</td>
                      <td className={styles.td}>2.62</td>
                      <td className={styles.td}>1409.78</td>
                      <td className={styles.td}>0.97</td>
                      <td className={styles.td}>6489.31</td>
                      <td className={styles.td}>10.90</td>
                      <td className={styles.td}>31.92</td>
                      <td className={styles.td}>4965.01</td>
                      <td className={styles.td}>39.49</td>
                    </tr>
                    <tr>
                      <td className={styles.td}>4.</td>
                      <td className={styles.td}>NMDC</td>
                      <td className={styles.td}>252.28</td>
                      <td className={styles.td}>12.82</td>
                      <td className={styles.td}>73950.96</td>
                      <td className={styles.td}>2.62</td>
                      <td className={styles.td}>1409.78</td>
                      <td className={styles.td}>0.97</td>
                      <td className={styles.td}>6489.31</td>
                      <td className={styles.td}>10.90</td>
                      <td className={styles.td}>31.92</td>
                      <td className={styles.td}>4965.01</td>
                      <td className={styles.td}>39.49</td>
                    </tr>
                    <tr>
                      <td className={styles.td}></td>
                      <td className={styles.td}>NMDC</td>
                      <td className={styles.td}>252.28</td>
                      <td className={styles.td}>12.82</td>
                      <td className={styles.td}>73950.96</td>
                      <td className={styles.td}>2.62</td>
                      <td className={styles.td}>1409.78</td>
                      <td className={styles.td}>0.97</td>
                      <td className={styles.td}>6489.31</td>
                      <td className={styles.td}>10.90</td>
                      <td className={styles.td}>31.92</td>
                      <td className={styles.td}>4965.01</td>
                      <td className={styles.td}>39.49</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </main>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
