import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import "./Quote.css";
import axios from "axios";

const Quote = (props) => {
  //set intial state
  let [kanye, setKanye] = useState("");
  const [quote, setQuote] = useState("");

  //fetch data from api
  useEffect(() => {
    const kanyeRest = "https://api.kanye.rest/";
    axios.get(kanyeRest).then((response) => {
      setKanye(response.data.quote);
    });
  }, [setKanye]);

  return (
    <div className="quotes">
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader> Quote's from the Goat </ToastHeader>
          <ToastBody>"{kanye}"</ToastBody>{" "}
          {/*<Button outline size="sm" color="danger" className="btn" onClick={() => setKanye(kanye)} >
            What Did Kanye Say?
  </Button>{" "}*/}
        </Toast>
      </div>
    </div>
  );
};

export default Quote;
