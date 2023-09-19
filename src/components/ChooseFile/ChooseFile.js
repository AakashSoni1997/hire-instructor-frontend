import { useState } from "react";
import { Form } from "react-bootstrap";

export const ChooseFile = ({
  label,
  handleFileChoose,
  error,
  Size,
  accept,
  name,
  value
}) => {
  const [handleError, setHandleError] = useState(false);
  const handleChange = ({ target }) => {
    let file = target.files[0]
    if (target.files[0].size / 1024 > Size) {
      setHandleError(true);
    } else if (!accept.includes(target.files[0].name.split(".").pop())) {
      setHandleError(true);
    } else {
      setHandleError(false);
      handleFileChoose({ [name]: file });
    }
  };

  return (
    <Form.Group  controlId="formFileMultiple">
      <Form.Label>{label}</Form.Label>
      <Form.Control defaultValue={value}  type="file" name={name} multiple onChange={handleChange} />
      {handleError && <span className="validation-text">{error}</span>}
    </Form.Group>
  );
};
