import React from "react";

var datetime = () => {
  var showdate = new Date();
  var displaytodaysdate = showdate.getDate() + "/" + showdate.getFullYear();
  var dt = showdate.toDateString();
  var displaytime =
    showdate.getHours() +
    ":" +
    showdate.getMinutes() +
    ":" +
    showdate.getSeconds();
  return (
    <div>
      <center>
        <input
          type="text"
          style={{ display: "none" }}
          value={displaytodaysdate}
          readOnly="true"
        />
        {dt} - {displaytime}
      </center>
    </div>
  );
};

export default datetime;
