import Card from "react-bootstrap/Card";
import { Button, Table } from "react-bootstrap";
import styles from "../../../styles/ScreenSection.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Details() {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showKeyPoints, setShowKeyPoints] = useState(false);
  const [wantToEditRatio, setWantToEditRatio] = useState(false);
  const [showSales, setShowSales] = useState(false);
  const [showOPM, setShowOPM] = useState(false);
  const [showProfitAfterTax, setShowProfitAfterTax] = useState(false);
  const [showProfitAfterTaxLatestQuarter, setShowProfitAfterTaxLatestQuarter] =
    useState(false);
  const [showMarketCapitalization, setShowMarketCapitalization] =
    useState(false);
  const [showSalesLatestQuater, setShowSalesLatestQuater] = useState(false);
  const [showYOYQuarterlySalesGrowth, setShowYOYQuarterlySalesGrowth] =
    useState(false);
  const [showYOYQuarterlyProfitGrowth, setShowYOYQuarterlyProfitGrowth] =
    useState(false);
  const [showPriceToEarning, setShowPriceToEarning] = useState(false);
  const [showDividendYield, setShowDividendYield] = useState(false);
  const [showPriceToBookValue, setShowPriceToBookValue] = useState(false);
  const [showReturnOnCapitalEmployes, setShowReturnOnCapitalEmployes] =
    useState(false);
  const [showReturnOnAssets, setShowReturnOnAssets] = useState(false);
  const [showDebtToEquity, setShowDebtToEquity] = useState(false);
  const [showReturnToEquity, setShowReturnToEquity] = useState(false);
  const [showEPS, setShowEPS] = useState(false);
  const [showDebt, setShowDebt] = useState(false);
  const [showPromoterHolding, setShowPromoterHolding] = useState(false);
  const [showChangeInPromoterHolding, setShowChangeInPromoterHolding] =
    useState(false);
  const [showEarningYield, setShowEarningYield] = useState(false);
  const [showPledgedPercentage, setShowPledgedPercentage] = useState(false);
  const [showIndustryPE, setShowIndustryPE] = useState(false);
  const [showSalesGrowth, setShowSalesGrowth] = useState(false);
  const [showProfitGrowth, setShowProfitGrowth] = useState(false);
  const [showCurrentPrice, setShowCurrentPrice] = useState(false);
  const [showPriceToSales, setShowPriceToSales] = useState(false);
  const [showPriceToFreeCashFlow, setShowPriceToFreeCashFlow] = useState(false);
  const [showEVEBITDA, setShowEVEBITDA] = useState(false);
  const [showEnterpirseValue, setShowEnterpirseValue] = useState(false);
  const [showCurrentRatio, setShowCurrentRatio] = useState(false);
  const [showInterestCoverageRatio, setShowInterestCoverageRatio] =
    useState(false);
  const [showPEGRatio, setShowPEGRatio] = useState(false);
  const [showReturnOver3Months, setShowReturnOver3Months] = useState(false);
  const [showReturnOver6Months, setShowReturnOver6Months] = useState(false);
  const [showSalesGrowth3Years, setShowSalesGrowth3Years] = useState(false);
  const [showSalesGrowth5Years, setShowSalesGrowth5Years] = useState(false);
  const [showProfitGrowth3Years, setShowProfitGrowth3Years] = useState(false);
  const [showProfitGrowth5Years, setShowProfitGrowth5Years] = useState(false);
  const [showAverageReturnOnEquity5Years, setShowAverageReturnOnEquity5Years] =
    useState(false);
  const [showAverageReturnOnEquity3Years, setShowAverageReturnOnEquity3Years] =
    useState(false);
  const [showReturnOver1Year, setShowReturnOver1Year] = useState(false);
  const [showReturnOver3Year, setShowReturnOver3Year] = useState(false);
  const [showReturnOver5Year, setShowReturnOver5Year] = useState(false);

  function showMoreAboutFunc() {
    setShowKeyPoints(false);
    setShowMoreAbout(true);
  }

  function showMoreKeyPointsFunc() {
    setShowMoreAbout(false);
    setShowKeyPoints(true);
  }

  function wantToEditRatioFunc() {
    setWantToEditRatio(!wantToEditRatio);
  }

  const additionalData = [
    showSales ? { label: "Sales", value: "₹ 500 Cr." } : null,
    showOPM ? { label: "OPM", value: "20%" } : null,
    showProfitAfterTax
      ? { label: "Profit after tax", value: "₹ 200 Cr." }
      : null,
    showProfitAfterTaxLatestQuarter
      ? { label: "Profit after tax (Latest Quarter)", value: "₹ 50 Cr." }
      : null,
    showMarketCapitalization
      ? { label: "Market Capitalization", value: "₹ 1500 Cr." }
      : null,
    showSalesLatestQuater
      ? { label: "Sales (Latest Quarter)", value: "₹ 100 Cr." }
      : null,
    showYOYQuarterlySalesGrowth
      ? { label: "YOY Quarterly Sales Growth", value: "10%" }
      : null,
    showYOYQuarterlyProfitGrowth
      ? { label: "YOY Quarterly Profit Growth", value: "15%" }
      : null,
    showPriceToEarning ? { label: "Price to Earning", value: "25" } : null,
    showDividendYield ? { label: "Dividend Yield", value: "2%" } : null,
    showPriceToBookValue ? { label: "Price to Book Value", value: "3" } : null,
    showReturnOnCapitalEmployes
      ? { label: "Return on Capital Employed", value: "18%" }
      : null,
    showReturnOnAssets ? { label: "Return on Assets", value: "10%" } : null,
    showDebtToEquity ? { label: "Debt to Equity", value: "0.5" } : null,
    showReturnToEquity ? { label: "Return to Equity", value: "12%" } : null,
    showEPS ? { label: "EPS", value: "₹ 50" } : null,
    showDebt ? { label: "Debt", value: "₹ 200 Cr." } : null,
    showPromoterHolding ? { label: "Promoter Holding", value: "50%" } : null,
    showChangeInPromoterHolding
      ? { label: "Change in Promoter Holding", value: "5%" }
      : null,
    showEarningYield ? { label: "Earning Yield", value: "6%" } : null,
    showPledgedPercentage ? { label: "Pledged Percentage", value: "1%" } : null,
    showIndustryPE ? { label: "Industry PE", value: "30" } : null,
    showSalesGrowth ? { label: "Sales Growth", value: "12%" } : null,
    showProfitGrowth ? { label: "Profit Growth", value: "20%" } : null,
    showCurrentPrice ? { label: "Current Price", value: "₹ 1,155" } : null,
    showPriceToSales ? { label: "Price to Sales", value: "4" } : null,
    showPriceToFreeCashFlow
      ? { label: "Price to Free Cash Flow", value: "15" }
      : null,
    showEVEBITDA ? { label: "EV/EBITDA", value: "12" } : null,
    showEnterpirseValue
      ? { label: "Enterprise Value", value: "₹ 2000 Cr." }
      : null,
    showCurrentRatio ? { label: "Current Ratio", value: "2" } : null,
    showInterestCoverageRatio
      ? { label: "Interest Coverage Ratio", value: "5" }
      : null,
    showPEGRatio ? { label: "PEG Ratio", value: "1.5" } : null,
    showReturnOver3Months
      ? { label: "Return Over 3 Months", value: "5%" }
      : null,
    showReturnOver6Months
      ? { label: "Return Over 6 Months", value: "10%" }
      : null,
    showSalesGrowth3Years
      ? { label: "Sales Growth (3 Years)", value: "15%" }
      : null,
    showSalesGrowth5Years
      ? { label: "Sales Growth (5 Years)", value: "20%" }
      : null,
    showProfitGrowth3Years
      ? { label: "Profit Growth (3 Years)", value: "25%" }
      : null,
    showProfitGrowth5Years
      ? { label: "Profit Growth (5 Years)", value: "30%" }
      : null,
    showAverageReturnOnEquity5Years
      ? { label: "Average Return on Equity (5 Years)", value: "18%" }
      : null,
    showAverageReturnOnEquity3Years
      ? { label: "Average Return on Equity (3 Years)", value: "20%" }
      : null,
    showReturnOver1Year ? { label: "Return Over 1 Year", value: "8%" } : null,
    showReturnOver3Year ? { label: "Return Over 3 Years", value: "15%" } : null,
    showReturnOver5Year ? { label: "Return Over 5 Years", value: "25%" } : null,
  ].filter((item) => item !== null);

  const tableData = [
    { label: "Market Cap", value: "₹ 1,370 Cr." },
    { label: "Current Price", value: "₹ 1,155" },
    { label: "High / Low", value: "₹ 1,468 / 899" },
    { label: "Stock P/E", value: "40.0" },
    { label: "Book Value", value: "₹ 20.3" },
    { label: "Dividend Yield", value: "1.69 %" },
    { label: "ROCE", value: "197 %" },
    { label: "ROE", value: "147 %" },
    { label: "Face Value", value: "₹ 10.0" },
    ...additionalData,
  ];

  return (
    <div className={styles.containerBG}>
      <div className={`containerWidth ${styles.screenSectionCard}`}>
        {!wantToEditRatio ? (
          <Card className="rounded-4">
            <Card.Body>
              <h1>
                Ksolves India Ltd{" "}
                <span className="fs-6">
                  ₹ 1,155 <span className="text-success">2.04%</span>{" "}
                </span>
                <div className={`d-lg-block d-none ${styles.btnFloat}`}>
                  <Button
                    className={`me-3 bg-white text-black border-primary-subtle ${styles.NavTabsBtns}`}
                  >
                    <i className="fa fa-download"></i>&nbsp;EXPORT TO EXCEL
                  </Button>
                  <Button variant="primary" className={`${styles.NavTabsBtns}`}>
                    <i className="fa fa-plus"></i>&nbsp;FOLLOW
                  </Button>
                </div>
              </h1>
              <div className="my-3">
                <Link
                  href="#"
                  className="fs-5"
                  style={{ textDecoration: "none" }}
                >
                  <i class="fa fa-external-link text-primary" />{" "}
                  &nbsp;ksolves.com
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
                <Link
                  href="#"
                  className="fs-5 text-secondary"
                  style={{ textDecoration: "none" }}
                >
                  <i class="fa fa-external-link text-primary" /> &nbsp;BSE:
                  543599
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
                <Link
                  href="#"
                  className="fs-5 text-secondary"
                  style={{ textDecoration: "none" }}
                >
                  <i class="fa fa-external-link text-primary" /> &nbsp;NSE:
                  KSOLVES
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </div>
              <div className="d-lg-none d-block">
                <Button
                  className={`me-3 bg-white text-black border-primary-subtle ${styles.NavTabsBtns}`}
                >
                  <i className="fa fa-download"></i>&nbsp;EXPORT TO EXCEL
                </Button>
                <Button variant="primary" className={`${styles.NavTabsBtns}`}>
                  <i className="fa fa-plus"></i>&nbsp;FOLLOW
                </Button>
              </div>

              <div className="mt-4">
                <div className="row">
                  <div className="col-xxl-4 mt-3 order-xxl-2">
                    <div className="h-100">
                      <h5>ABOUT</h5>
                      <p className="fs-6">
                        Services <br />
                        The company provides software services such as
                        Salesforce, Machine learning, Javascript,
                        {showMoreAbout
                          ? "and Penetration Testing, and also provides development of Odoo apps, Magento apps, Salesforce apps, and other iOS/Android apps. The company’s big data division provides services such as Apache Nifi, Spark, Kafka, and Cassandra. [1]"
                          : ""}
                      </p>
                      {!showMoreAbout ? (
                        <div
                          className="text-center"
                          style={{ marginTop: "-10px", cursor: "pointer" }}
                        >
                          <i
                            class="fa fa-angle-down"
                            onClick={() => showMoreAboutFunc()}
                          ></i>
                        </div>
                      ) : (
                        ""
                      )}

                      <h5>KEY POINTS</h5>
                      <p className="fs-6">
                        Ksolves India Ltd, incorporated in 2014, is engaged in
                        software development, enterprise solutions
                        {showKeyPoints
                          ? "to companies across sectors such as Real Estate, E-commerce, Finance, Telecom and Healthcare etc. Ksolves curate & develop the best possible software solutions. It is servicing clients across several counties with 410+ in-house technology experts. Ksolves is a 360-degree software solution provider, known in the industry for its expertise in Big Data (Apache Kafka, Apache NiFi, Apache Spark, Apache Cassandra), Data Science (Artificial Intelligence & Machine Learning), Salesforce, DevOps, Java & Microservices, OpenShift, Penetration Testing etc."
                          : ""}
                      </p>
                      {!showKeyPoints ? (
                        <div
                          className="text-center"
                          style={{ marginTop: "-10px", cursor: "pointer" }}
                        >
                          <i
                            class="fa fa-angle-down"
                            onClick={() => showMoreKeyPointsFunc()}
                          ></i>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="col-xxl-8 mt-3">
                    <div className="h-100 border rounded p-xxl-4 p-2">
                      <div className="d-lg-flex d-none">
                        <Table striped>
                          <tbody>
                            {tableData
                              .reduce((rows, item, index) => {
                                if (index % 3 === 0) {
                                  rows.push([]);
                                }
                                rows[rows.length - 1].push(item);
                                return rows;
                              }, [])
                              .map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {row.map((item, colIndex) => (
                                    <td key={colIndex}>
                                      <div className="row">
                                        <div className="col-6">
                                          {item.label}
                                        </div>
                                        <div
                                          className="col-6"
                                          style={{ textAlign: "right" }}
                                        >
                                          {item.value}
                                        </div>
                                      </div>
                                    </td>
                                  ))}
                                  {row.length < 3 &&
                                    [...Array(3 - row.length)].map(
                                      (_, colIndex) => (
                                        <td key={`empty-${colIndex}`}></td>
                                      )
                                    )}
                                </tr>
                              ))}
                          </tbody>
                        </Table>
                      </div>
                      <div className="d-lg-none d-block">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-6">Market Cap</div>
                              <div
                                className="col-6"
                                style={{ textAlign: "right" }}
                              >
                                ₹ 1,370 Cr.
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-6">Current Price</div>
                              <div
                                className="col-6"
                                style={{ textAlign: "right" }}
                              >
                                ₹ 1,370 Cr.
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-6">High / Low</div>
                              <div
                                className="col-6"
                                style={{ textAlign: "right" }}
                              >
                                ₹ 1,370 Cr.
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-6">Market Cap</div>
                              <div
                                className="col-6"
                                style={{ textAlign: "right" }}
                              >
                                ₹ 1,370 Cr.
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-6">Current Price</div>
                              <div
                                className="col-6"
                                style={{ textAlign: "right" }}
                              >
                                ₹ 1,370 Cr.
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-6">High / Low</div>
                              <div
                                className="col-6"
                                style={{ textAlign: "right" }}
                              >
                                ₹ 1,370 Cr.
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-6">Market Cap</div>
                              <div
                                className="col-6"
                                style={{ textAlign: "right" }}
                              >
                                ₹ 1,370 Cr.
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-6">Current Price</div>
                              <div
                                className="col-6"
                                style={{ textAlign: "right" }}
                              >
                                ₹ 1,370 Cr.
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item">
                            <div className="row">
                              <div className="col-6">High / Low</div>
                              <div
                                className="col-6"
                                style={{ textAlign: "right" }}
                              >
                                ₹ 1,370 Cr.
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="row mt-3">
                        <div className="col-lg-10">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                              Add ratio to table
                            </label>
                            <input
                              type="email"
                              class="form-control w-50 d-lg-block d-none"
                              id="exampleInputEmail1"
                              placeholder="eg. Promoter holding"
                            />
                            <input
                              type="email"
                              class="form-control w-100 d-lg-none d-block"
                              id="exampleInputEmail1"
                              placeholder="eg. Promoter holding"
                            />
                          </div>
                        </div>
                        <div
                          className="col-lg-2"
                          style={{ textAlign: "right" }}
                        >
                          <h6
                            className="text-primary mt-lg-4 pt-lg-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => wantToEditRatioFunc()}
                          >
                            <i className="fa fa-pencil" />
                            &nbsp; EDIT RATIOS
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        ) : (
          <Card>
            <Card.Body>
              <h1>Manage quick_ratios</h1>
              <Button
                variant="primary"
                className={`me-3 ${styles.NavTabsBtns}`}
                onClick={() => wantToEditRatioFunc()}
              >
                SAVE QUICK_RATIOS
              </Button>
              <Button
                className={`bg-white text-black border-primary-subtle ${styles.NavTabsBtns}`}
                onClick={() => wantToEditRatioFunc()}
              >
                Cancel
              </Button>

              <div className="row mt-5 p-3 fs-5">
                <ul className="row">
                  <div className="col-xl-4 mt-3">
                    <h4>RECENT</h4>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowSales(!showSales)}
                        checked={showSales}
                        id="Sales"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Sales"
                      >
                        Sales
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowOPM(!showOPM)}
                        checked={showOPM}
                        id="OPM"
                      />
                      <label class="form-check-label stretched-link" for="OPM">
                        OPM
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowProfitAfterTax(!showProfitAfterTax)
                        }
                        checked={showProfitAfterTax}
                        id="Profit after tax"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Profit after tax"
                      >
                        Profit after tax
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowMarketCapitalization(!showMarketCapitalization)
                        }
                        checked={showMarketCapitalization}
                        id="Market Capitalization"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Market Capitalization"
                      >
                        Market Capitalization
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowSalesLatestQuater(!showSalesLatestQuater)
                        }
                        id="Sales latest quarter"
                        checked={showSalesLatestQuater}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Sales latest quarter"
                      >
                        Sales latest quarter
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowProfitAfterTaxLatestQuarter(
                            !showProfitAfterTaxLatestQuarter
                          )
                        }
                        id="Profit after tax latest quarter"
                        checked={showProfitAfterTaxLatestQuarter}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Profit after tax latest quarter"
                      >
                        Profit after tax latest quarter
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowYOYQuarterlySalesGrowth(
                            !showYOYQuarterlySalesGrowth
                          )
                        }
                        id="YOY Quarterly sales growth"
                        checked={showYOYQuarterlySalesGrowth}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="YOY Quarterly sales growth"
                      >
                        YOY Quarterly sales growth
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowYOYQuarterlyProfitGrowth(
                            !showYOYQuarterlyProfitGrowth
                          )
                        }
                        id="YOY Quarterly profit growth"
                        checked={showYOYQuarterlyProfitGrowth}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="YOY Quarterly profit growth"
                      >
                        YOY Quarterly profit growth
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowPriceToEarning(!showPriceToEarning)
                        }
                        id="Price to Earning"
                        checked={showPriceToEarning}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Price to Earning"
                      >
                        Price to Earning
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowDividendYield(!showDividendYield)
                        }
                        id="Dividend yield"
                        checked={showDividendYield}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Dividend yield"
                      >
                        Dividend yield
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowPriceToBookValue(!showPriceToBookValue)
                        }
                        id="Price to book value"
                        checked={showPriceToBookValue}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Price to book value"
                      >
                        Price to book value
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowReturnOnCapitalEmployes(
                            !showReturnOnCapitalEmployes
                          )
                        }
                        id="Return on capital employed"
                        checked={showReturnOnCapitalEmployes}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Return on capital employed"
                      >
                        Return on capital employed
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowReturnOnAssets(!showReturnOnAssets)
                        }
                        id="Return on assets"
                        checked={showReturnOnAssets}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Return on assets"
                      >
                        Return on assets
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowDebtToEquity(!showDebtToEquity)}
                        id="Debt to equity"
                        checked={showDebtToEquity}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Debt to equity"
                      >
                        Debt to equity
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowReturnToEquity(!showReturnToEquity)
                        }
                        id="Return on equity"
                        checked={showReturnToEquity}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Return on equity"
                      >
                        Return on equity
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowEPS(!showEPS)}
                        id="EPS"
                        checked={showEPS}
                      />
                      <label class="form-check-label stretched-link" for="EPS">
                        EPS
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowDebt(!showDebt)}
                        checked={showDebt}
                        id="Debt"
                      />
                      <label class="form-check-label stretched-link" for="Debt">
                        Debt
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowPromoterHolding(!showPromoterHolding)
                        }
                        checked={showPromoterHolding}
                        id="Promoter holding"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Promoter holding"
                      >
                        Promoter holding
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowChangeInPromoterHolding(
                            !showChangeInPromoterHolding
                          )
                        }
                        checked={showChangeInPromoterHolding}
                        id="Change in promoter holding"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Change in promoter holding"
                      >
                        Change in promoter holding
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowEarningYield(!showEarningYield)}
                        checked={showEarningYield}
                        id="Earnings yield"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Earnings yield"
                      >
                        Earnings yield
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowPledgedPercentage(!showPledgedPercentage)
                        }
                        checked={showPledgedPercentage}
                        id="Pledged percentage"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Pledged percentage"
                      >
                        Pledged percentage
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowIndustryPE(!showIndustryPE)}
                        id="Industry PE"
                        checked={showIndustryPE}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Industry PE"
                      >
                        Industry PE
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowSalesGrowth(!showSalesGrowth)}
                        id="Sales growth"
                        checked={showSalesGrowth}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Sales growth"
                      >
                        Sales growth
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowProfitGrowth(!showProfitGrowth)}
                        id="Profit growth"
                        checked={showProfitGrowth}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Profit growth"
                      >
                        Profit growth
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowCurrentPrice(!showCurrentPrice)}
                        id="Current price"
                        checked={showCurrentPrice}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Current price"
                      >
                        Current price
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowPriceToSales(!showPriceToSales)}
                        id="Price to Sales"
                        checked={showPriceToSales}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Price to Sales"
                      >
                        Price to Sales
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowPriceToFreeCashFlow(!showPriceToFreeCashFlow)
                        }
                        id="Price to Free Cash Flow"
                        checked={showPriceToFreeCashFlow}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Price to Free Cash Flow"
                      >
                        Price to Free Cash Flow
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowEVEBITDA(!showEVEBITDA)}
                        checked={showEVEBITDA}
                        id="EVEBITDA"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="EVEBITDA"
                      >
                        EVEBITDA
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowEnterpirseValue(!showEnterpirseValue)
                        }
                        checked={showEnterpirseValue}
                        id="Enterprise Value"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Enterprise Value"
                      >
                        Enterprise Value
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowCurrentRatio(!showCurrentRatio)}
                        checked={showCurrentRatio}
                        id="Current ratio"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Current ratio"
                      >
                        Current ratio
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowInterestCoverageRatio(
                            !showInterestCoverageRatio
                          )
                        }
                        id="Interest Coverage Ratio"
                        checked={showInterestCoverageRatio}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Interest Coverage Ratio"
                      >
                        Interest Coverage Ratio
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() => setShowPEGRatio(!showPEGRatio)}
                        id="PEG Ratio"
                        checked={showPEGRatio}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="PEG Ratio"
                      >
                        PEG Ratio
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowReturnOver3Months(!showReturnOver3Months)
                        }
                        id="Return over 3months"
                        checked={showReturnOver3Months}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Return over 3months"
                      >
                        Return over 3months
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowReturnOver6Months(!showReturnOver6Months)
                        }
                        checked={showReturnOver6Months}
                        id="Return over 6months"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Return over 6months"
                      >
                        Return over 6months
                      </label>
                    </li>
                  </div>
                  <div className="col-xl-4 mt-3">
                    <h4>PRECEDING</h4>
                  </div>
                  <div className="col-xl-4 mt-3">
                    <h4>HISTORICAL</h4>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowSalesGrowth3Years(!showSalesGrowth3Years)
                        }
                        id="Sales growth 3Years"
                        checked={showSalesGrowth3Years}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Sales growth 3Years"
                      >
                        Sales growth 3Years
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowSalesGrowth5Years(!showSalesGrowth5Years)
                        }
                        id="Sales growth 5Years"
                        checked={showSalesGrowth5Years}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Sales growth 5Years"
                      >
                        Sales growth 5Years
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowProfitGrowth3Years(!showProfitGrowth3Years)
                        }
                        id="Profit growth 3Years"
                        checked={showProfitGrowth3Years}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Profit growth 3Years"
                      >
                        Profit growth 3Years
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowProfitGrowth5Years(!showProfitGrowth5Years)
                        }
                        id="Profit growth 5Years"
                        checked={showProfitGrowth5Years}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Profit growth 5Years"
                      >
                        Profit growth 5Years
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowAverageReturnOnEquity5Years(
                            !showAverageReturnOnEquity5Years
                          )
                        }
                        checked={showAverageReturnOnEquity5Years}
                        id="Average return on equity 5Years"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Average return on equity 5Years"
                      >
                        Average return on equity 5Years
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowAverageReturnOnEquity3Years(
                            !showAverageReturnOnEquity3Years
                          )
                        }
                        id="Average return on equity 3Years"
                        checked={showAverageReturnOnEquity3Years}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Average return on equity 3Years"
                      >
                        Average return on equity 3Years
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowReturnOver1Year(!showReturnOver1Year)
                        }
                        checked={showReturnOver1Year}
                        id="Return over 1year"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Return over 1year"
                      >
                        Return over 1year
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowReturnOver3Year(!showReturnOver3Year)
                        }
                        id="Return over 3years"
                        checked={showReturnOver3Year}
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Return over 3years"
                      >
                        Return over 3years
                      </label>
                    </li>
                    <li class="list-group-item mt-3">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        onChange={() =>
                          setShowReturnOver5Year(!showReturnOver5Year)
                        }
                        checked={showReturnOver5Year}
                        id="Return over 5years"
                      />
                      <label
                        class="form-check-label stretched-link"
                        for="Return over 5years"
                      >
                        Return over 5years
                      </label>
                    </li>
                  </div>
                </ul>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}
