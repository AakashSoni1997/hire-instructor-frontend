import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { InputText } from '../../../components/InputText/InputText'

export const TabTwoMyProfile = () => {
  return (
    <div className="qualifications-section">
    <div className="tab-content">
      <div className="myprofilebox2">
        <div className="myprofilebox1 dropdown-select">
          <div className="App">
            <ReactSelect
              // defaultValue={selectedOption}
              // onChange={setSelectedOption}
              // options={options2}
              placeholder="Masters"
            />
          </div>
        </div>

        <div className="myprofilebox1">
          <label className="custom-field one">
            <InputText
              type="text"
              name="school_name"
              placeholder="School/University Name"
              // onChange={handleState}
              // pattern={Regex?.commonRegex}
              formErrors="School/University Name is required !"
              // disabled={false}
              // defaultValue={""}
            />
          </label>
        </div>

        <div className="myprofilebox1">
          <label className="custom-field one">
            <InputText
              type="text"
              name="percentage"
              placeholder="Grade"
              // onChange={handleState}
              // pattern={Regex?.commonRegex}
              formErrors="Grade is required !"
              // disabled={false}
              // defaultValue={""}
            />
          </label>
        </div>

        <div className="myprofilebox1">
          <label className="custom-field one">
            <InputText
              type="text"
              name="subject_name"
              placeholder="Subject"
              // onChange={handleState}
              // pattern={Regex?.commonRegex}
              formErrors="Subject is required !"
              // disabled={false}
              // defaultValue={""}
            />
          </label>
        </div>

        <div className="myprofilebox1">
          <label className="custom-field one">
            <InputText
              name="clg_start_year"
              type="date"
              id="date"
              // onChange={handleState}
              className="form-control date-picker-ab"
              formErrors="Started Date is required!"
              // pattern={Regex?.date}
              placeholder="Year Started"
              // defaultValue={""}
            />
          </label>
        </div>

        <div className="myprofilebox1">
          <label className="custom-field one">
            <InputText
              name="clg_end_year"
              type="date"
              id="date"
              // onChange={handleState}
              className="form-control date-picker-ab"
              formErrors="Completed Date is required!"
              // pattern={Regex?.date}
              placeholder="Year Completed"
              // defaultValue={""}
            />
          </label>
        </div>

        <div className="myprofilebox1 certificate-file-box">
          <div className="drag-image-video">
            <Form.Group controlId="formFileMultiple">
              <Form.Label>Certificate</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </div>
        </div>

        <div className="myprofilebox1">
          <h3>Specialization</h3>
        </div>
        <div className="myprofilebox1 addsubjects">
          <Link className="btn becomaninstructor" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="17.5"
              viewBox="0 0 17.5 17.5"
            >
              <circle
                id="Ellipse_101"
                data-name="Ellipse 101"
                cx="8"
                cy="8"
                r="8"
                transform="translate(0.75 0.75)"
                fill="none"
                stroke="#005eb5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <line
                id="Line_176"
                data-name="Line 176"
                x2="6"
                transform="translate(5.75 8.75)"
                fill="none"
                stroke="#005eb5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <line
                id="Line_177"
                data-name="Line 177"
                y2="6"
                transform="translate(8.75 5.75)"
                fill="none"
                stroke="#005eb5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            Add More Subjects
          </Link>
        </div>

        <div className="myprofilebox1 addmoresubjects-section">
          <div className="myprofilebox3">
            <label className="custom-field one">
              <InputText
                type="text"
                name="subject_name"
                placeholder="Subject"
                // onChange={handleState}
                // pattern={Regex?.commonRegex}
                formErrors="Subject is required !"
                // disabled={false}
                // defaultValue={""}
              />
            </label>
          </div>

          <div className="myprofilebox3 dropdown-select">
            <div className="App">
              <ReactSelect
                // defaultValue={selectedOption}
                // onChange={setSelectedOption}
                // options={options2}
                placeholder="Grade"
              />
            </div>
          </div>

          <div className="myprofilebox3 cros-button-sub">
            <button className="btn becomaninstructor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.687"
                height="26.597"
                viewBox="0 0 20.687 26.597"
              >
                <path
                  id="Icon_material-delete-forever"
                  data-name="Icon material-delete-forever"
                  d="M8.978,28.142A2.964,2.964,0,0,0,11.933,31.1H23.754a2.964,2.964,0,0,0,2.955-2.955V10.41H8.978Zm3.635-10.521L14.7,15.538l3.147,3.133,3.133-3.133,2.083,2.083-3.133,3.133,3.133,3.133L20.976,25.97l-3.133-3.133L14.711,25.97l-2.083-2.083,3.133-3.133Zm10.4-11.644L21.537,4.5H14.149L12.672,5.978H7.5V8.933H28.187V5.978Z"
                  transform="translate(-7.5 -4.5)"
                  fill="#fff"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="myprofilebox1 addmoresubjects-section">
          <div className="myprofilebox3">
            <label className="custom-field one">
              <InputText
                type="text"
                name="subject_name"
                placeholder="Subject"
                // onChange={handleState}
                // pattern={Regex?.commonRegex}
                formErrors="Subject is required !"
                // disabled={false}
                // defaultValue={""}
              />
            </label>
          </div>

          <div className="myprofilebox3 dropdown-select">
            <div className="App">
              <ReactSelect
                // defaultValue={selectedOption}
                // onChange={setSelectedOption}
                // options={options2}
                placeholder="Grade"
              />
            </div>
          </div>

          <div className="myprofilebox3 cros-button-sub">
            <button className="active btn becomaninstructor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.687"
                height="26.597"
                viewBox="0 0 20.687 26.597"
              >
                <path
                  id="Icon_material-delete-forever"
                  data-name="Icon material-delete-forever"
                  d="M8.978,28.142A2.964,2.964,0,0,0,11.933,31.1H23.754a2.964,2.964,0,0,0,2.955-2.955V10.41H8.978Zm3.635-10.521L14.7,15.538l3.147,3.133,3.133-3.133,2.083,2.083-3.133,3.133,3.133,3.133L20.976,25.97l-3.133-3.133L14.711,25.97l-2.083-2.083,3.133-3.133Zm10.4-11.644L21.537,4.5H14.149L12.672,5.978H7.5V8.933H28.187V5.978Z"
                  transform="translate(-7.5 -4.5)"
                  fill="#fff"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="save-button">
        <button className="btn" to="/">
          Save Changes
        </button>
      </div>
    </div>
  </div>
  )
}
