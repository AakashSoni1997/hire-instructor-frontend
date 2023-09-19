import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

export const TabFourMyProfile = () => {
  return (
    <div className="addavailability-myprofile-tab">
    <div className="addavailability-myprofile-tab-content">
      <Tabs
        defaultActiveKey="monday"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="monday" title="Monday">
          <div className="morning-slot-box">
            <div className="row g-4">
              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="Morning"
                      name="Morning"
                      value="Morning"
                      defaultChecked
                    />
                    <label htmlFor="Morning">
                      <p>Morning</p>
                      <span>(8.00 AM To 12.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="afternoon"
                      name="afternoon"
                      value="Morning"
                    />
                    <label htmlFor="afternoon">
                      <p>Afternoon</p>
                      <span>(12.00 PM To 5.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="evening"
                      name="evening"
                      value="Morning"
                    />
                    <label htmlFor="evening">
                      <p>Evening</p>
                      <span>(5.00 PM To 9.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-slots-box-section">
              <div className="row g-4">
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect1"
                        name="timeselect1"
                        value="Afternoon"
                        defaultChecked
                      />
                      <label htmlFor="timeselect1">
                        12:00 PM - 01:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect2"
                        name="timeselect2"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect2">
                        1:00 PM - 02:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect3"
                        name="timeselect3"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect3">
                        2:00 PM - 03:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect4"
                        name="timeselect4"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect4">
                        3:00 PM - 04:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect5"
                        name="timeselect5"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect5">
                        4:00 PM - 05:00 PM
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        <Tab eventKey="tuesday" title="Tuesday">
          <div className="morning-slot-box">
            <div className="row g-4">
              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="Morning"
                      name="Morning"
                      value="Morning"
                    />
                    <label htmlFor="Morning">
                      <p>Morning</p>
                      <span>(8.00 AM To 12.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="afternoon"
                      name="afternoon"
                      value="Morning"
                      defaultChecked
                    />
                    <label htmlFor="afternoon">
                      <p>Afternoon</p>
                      <span>(12.00 PM To 5.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="evening"
                      name="evening"
                      value="Morning"
                    />
                    <label htmlFor="evening">
                      <p>Evening</p>
                      <span>(5.00 PM To 9.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-slots-box-section">
              <div className="row g-4">
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect1"
                        name="timeselect1"
                        value="Afternoon"
                        defaultChecked
                      />
                      <label htmlFor="timeselect1">
                        12:00 PM - 01:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect2"
                        name="timeselect2"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect2">
                        1:00 PM - 02:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect3"
                        name="timeselect3"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect3">
                        2:00 PM - 03:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect4"
                        name="timeselect4"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect4">
                        3:00 PM - 04:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect5"
                        name="timeselect5"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect5">
                        4:00 PM - 05:00 PM
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="wednesday" title="Wednesday">
          <div className="morning-slot-box">
            <div className="row g-4">
              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="Morning"
                      name="Morning"
                      value="Morning"
                    />
                    <label htmlFor="Morning">
                      <p>Morning</p>
                      <span>(8.00 AM To 12.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="afternoon"
                      name="afternoon"
                      value="Morning"
                    />
                    <label htmlFor="afternoon">
                      <p>Afternoon</p>
                      <span>(12.00 PM To 5.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="evening"
                      name="evening"
                      value="Morning"
                      defaultChecked
                    />
                    <label htmlFor="evening">
                      <p>Evening</p>
                      <span>(5.00 PM To 9.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-slots-box-section">
              <div className="row g-4">
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect1"
                        name="timeselect1"
                        value="Afternoon"
                        defaultChecked
                      />
                      <label htmlFor="timeselect1">
                        12:00 PM - 01:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect2"
                        name="timeselect2"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect2">
                        1:00 PM - 02:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect3"
                        name="timeselect3"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect3">
                        2:00 PM - 03:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect4"
                        name="timeselect4"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect4">
                        3:00 PM - 04:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect5"
                        name="timeselect5"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect5">
                        4:00 PM - 05:00 PM
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="thursday" title="Thursday">
          <div className="morning-slot-box">
            <div className="row g-4">
              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="Morning"
                      name="Morning"
                      value="Morning"
                      defaultChecked
                    />
                    <label htmlFor="Morning">
                      <p>Morning</p>
                      <span>(8.00 AM To 12.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="afternoon"
                      name="afternoon"
                      value="Morning"
                    />
                    <label htmlFor="afternoon">
                      <p>Afternoon</p>
                      <span>(12.00 PM To 5.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="evening"
                      name="evening"
                      value="Morning"
                    />
                    <label htmlFor="evening">
                      <p>Evening</p>
                      <span>(5.00 PM To 9.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-slots-box-section">
              <div className="row g-4">
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect1"
                        name="timeselect1"
                        value="Afternoon"
                        defaultChecked
                      />
                      <label htmlFor="timeselect1">
                        12:00 PM - 01:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect2"
                        name="timeselect2"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect2">
                        1:00 PM - 02:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect3"
                        name="timeselect3"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect3">
                        2:00 PM - 03:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect4"
                        name="timeselect4"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect4">
                        3:00 PM - 04:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect5"
                        name="timeselect5"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect5">
                        4:00 PM - 05:00 PM
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="friday" title="Friday">
          <div className="morning-slot-box">
            <div className="row g-4">
              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="Morning"
                      name="Morning"
                      value="Morning"
                      defaultChecked
                    />
                    <label htmlFor="Morning">
                      <p>Morning</p>
                      <span>(8.00 AM To 12.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="afternoon"
                      name="afternoon"
                      value="Morning"
                    />
                    <label htmlFor="afternoon">
                      <p>Afternoon</p>
                      <span>(12.00 PM To 5.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="evening"
                      name="evening"
                      value="Morning"
                    />
                    <label htmlFor="evening">
                      <p>Evening</p>
                      <span>(5.00 PM To 9.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-slots-box-section">
              <div className="row g-4">
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect1"
                        name="timeselect1"
                        value="Afternoon"
                        defaultChecked
                      />
                      <label htmlFor="timeselect1">
                        12:00 PM - 01:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect2"
                        name="timeselect2"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect2">
                        1:00 PM - 02:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect3"
                        name="timeselect3"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect3">
                        2:00 PM - 03:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect4"
                        name="timeselect4"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect4">
                        3:00 PM - 04:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect5"
                        name="timeselect5"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect5">
                        4:00 PM - 05:00 PM
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="saturday" title="Saturday">
          <div className="morning-slot-box">
            <div className="row g-4">
              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="Morning"
                      name="Morning"
                      value="Morning"
                      defaultChecked
                    />
                    <label htmlFor="Morning">
                      <p>Morning</p>
                      <span>(8.00 AM To 12.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="afternoon"
                      name="afternoon"
                      value="Morning"
                    />
                    <label htmlFor="afternoon">
                      <p>Afternoon</p>
                      <span>(12.00 PM To 5.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="evening"
                      name="evening"
                      value="Morning"
                    />
                    <label htmlFor="evening">
                      <p>Evening</p>
                      <span>(5.00 PM To 9.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-slots-box-section">
              <div className="row g-4">
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect1"
                        name="timeselect1"
                        value="Afternoon"
                        defaultChecked
                      />
                      <label htmlFor="timeselect1">
                        12:00 PM - 01:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect2"
                        name="timeselect2"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect2">
                        1:00 PM - 02:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect3"
                        name="timeselect3"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect3">
                        2:00 PM - 03:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect4"
                        name="timeselect4"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect4">
                        3:00 PM - 04:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect5"
                        name="timeselect5"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect5">
                        4:00 PM - 05:00 PM
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="sunday" title="Sunday">
          <div className="morning-slot-box">
            <div className="row g-4">
              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="Morning"
                      name="Morning"
                      value="Morning"
                      defaultChecked
                    />
                    <label htmlFor="Morning">
                      <p>Morning</p>
                      <span>(8.00 AM To 12.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="afternoon"
                      name="afternoon"
                      value="Morning"
                    />
                    <label htmlFor="afternoon">
                      <p>Afternoon</p>
                      <span>(12.00 PM To 5.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 col-xl-4 col-12">
                <div className="radio-box">
                  <div className="check-box-create">
                    <input
                      required
                      type="checkbox"
                      id="evening"
                      name="evening"
                      value="Morning"
                    />
                    <label htmlFor="evening">
                      <p>Evening</p>
                      <span>(5.00 PM To 9.00 PM)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-slots-box-section">
              <div className="row g-4">
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect1"
                        name="timeselect1"
                        value="Afternoon"
                        defaultChecked
                      />
                      <label htmlFor="timeselect1">
                        12:00 PM - 01:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect2"
                        name="timeselect2"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect2">
                        1:00 PM - 02:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect3"
                        name="timeselect3"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect3">
                        2:00 PM - 03:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect4"
                        name="timeselect4"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect4">
                        3:00 PM - 04:00 PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4 col-sm-6 col-12">
                  <div className="radio-box">
                    <div className="check-box-create">
                      <input
                        required
                        type="checkbox"
                        id="timeselect5"
                        name="timeselect5"
                        value="Afternoon"
                      />
                      <label htmlFor="timeselect5">
                        4:00 PM - 05:00 PM
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  </div>
  )
}
