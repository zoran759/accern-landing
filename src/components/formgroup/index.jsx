import React, {useState, useContext} from "react";
import { Form } from "react-bootstrap";
import { Context } from "../../context/context";

import "./FormGroup.scss"

const FormGroup = ({className, controlId, as, type, placeholder, required, name}) => {

  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const {userMail, dispatchUserMail} = useContext(Context);

  return (
    <Form.Group className={`${className ? className : ""} ${active ? "active": ""}`} controlId={`${controlId ? controlId : ""}`}>
      <Form.Control as={`${as ? as: ""}`} type={`${type ? type: ""}`} name={name} required={required ? true : false} value={name == "email" ? userMail : value} onChange={(e)=>{name == "email" ? dispatchUserMail({type: "SET_USER_MAIL", data:e.target.value}) : setValue(e.target.value)}} onFocus={()=>setActive(true)} onBlur={()=>setActive(false)} placeholder={`${placeholder ? placeholder : ""}`} />
    </Form.Group>
  );
}

export default FormGroup;