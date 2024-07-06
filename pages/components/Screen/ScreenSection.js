import Card from "react-bootstrap/Card";
import { Table } from "react-bootstrap";
import styles from "../../../styles/ScreenSection.module.css";

export default function ScreenSection() {
  return (
    <div className={styles.containerBG}>
      <div className={`containerWidth ${styles.screenSectionCard}`}>
        <Card className="rounded-4">
          <Card.Body>
            <div>
              <h1 className="mb-4">
                Low on 10 Year Average Earnings
                <div className={`d-lg-block d-none ${styles.btnFloat}`}>
                  <button type="button" className="btn btn-lg btn-primary">
                    <i className="fa fa-bell"></i>&nbsp; GET EMAIL UPDATES
                  </button>
                </div>
              </h1>
              <p className="fs-5">
                Graham liked to value stocks based on average earnings of
                multiple years. This screen uses 10 year average earnings.
              </p>
              <p className="fs-5">
                by <span className="text-primary">Pratyush</span>
              </p>
              <p className="fs-5">3 results found: Showing page 1 of 1</p>
              <div className="d-lg-none d-block">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-bell"></i>&nbsp; GET EMAIL UPDATES
                </button>
              </div>
            </div>
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
            <div className="mt-4">
              <h5>Search Query</h5>
              <p className="fs-5">You can customize the query below:</p>
              <h5 className="mt-4">Query</h5>
              <div className="row">
                <div className="col-md-8 mt-3">
                  <textarea
                    className={`w-100 form-control ${styles.textAreaStyle}`}
                    rows={7}
                    defaultValue={
                      `Market Capitalization / Average Earnings 10Year &#10003; 15\n` +
                      `AND Average dividend payout 3years &#10003; 20\n` +
                      `AND Debt to equity &#10003; .2\n` +
                      `AND Average return on capital employed 7Years &#10003; 20`
                    }
                  />
                </div>
                <div className="col-md-4 mt-3">
                  <textarea
                    className={`w-100 form-control ${styles.textAreaStyle}`}
                    rows={7}
                    defaultValue={
                      `Custom query example\n` +
                      `Market capitalization > 500 AND\n` +
                      `Price to earning < 15 AND\n` +
                      `Return on capital employed > 22%\n` +
                      `Detailed guide on creating screens\n`
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <input type="checkbox" />
              &nbsp; Only companies with Mar 2024 results
            </div>
            <button type="button" className="btn btn-primary mt-3">
              <i class="fa fa-play"></i>
              &nbsp; RUN THIS QUERY
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
