import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const EditableField = ({ cellData, onItemizedItemEdit }) => {
  return (
    <InputGroup className="my-1 flex-nowrap">
      {cellData.leading && (
        <InputGroup.Text className="bg-light fw-bold border-0 text-secondary px-2">
          <span className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small" style={{ width: 20, height: 20 }}>
            {cellData.leading}
          </span>
        </InputGroup.Text>
      )}
      <Form.Control
        className={cellData.textAlign}
        type={cellData.type}
        {...cellData}
        onChange={onItemizedItemEdit}
        required
      />
    </InputGroup>
  );
};

export default EditableField;