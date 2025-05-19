import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BackButtom = () => {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; BACK
    </Button>
  );
};

export default BackButtom;
