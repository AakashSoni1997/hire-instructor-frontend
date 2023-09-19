import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

export const FaqCardSection = ({ ele }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };



  return (
    
      <div key={ele.id} className="col-lg-6">
        <Accordion.Item eventKey={ele.id} >
          <Accordion.Header >
          {ele.question}
          </Accordion.Header>
          <Accordion.Body><p dangerouslySetInnerHTML={{ __html: ele.answer }}></p></Accordion.Body>
        </Accordion.Item>
      </div>
  );
};
