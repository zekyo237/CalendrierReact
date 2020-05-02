import React, { useState } from "react";
import Calendar from "react-calendar";
import { render } from "react-dom";
import Composant1 from "./Composant/Composant1";
import Composant2 from "./Composant/Composant2";
import { Login } from "./Composant/login/login";
import { Register } from "./Composant/login/register";
const Calendrier = () => {
  const [date, SetDate] = useState(new Date());

  const onChange = (date) => {
    SetDate(date);
  };

  return (
    <div>
      <div className="calendrier">
        <Calendar showWeekNumbers onChange={onChange} value={date} />
      </div>
      <div className="composant1">
        <Composant1 />
        <Composant2 />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};
render(<Calendrier />, document.querySelector("#root"));
