import React from "react";

function Form() {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: "REACT_APP_API_KEY" }).base(
    "apppXQI6GNmrOt3Ze"
  );

  base("Address Form").create(
    [
      {
        fields: {
          Name: "Gaje - test ",
          "Address 1": "370 Satan Ave ",
          City: "Lehi ",
          State: "UT",
          "Zip Code": 84043,
          "Total guests in party:": 666,
          "Additional Guest(s) Names": "0"
        }
      },
      {
        fields: {
          Name: "Gaje - test ",
          "Address 1": "370 Satan Ave ",
          City: "Lehi ",
          State: "UT",
          "Zip Code": 84043,
          "Total guests in party:": 666,
          "Additional Guest(s) Names": "0"
        }
      }
    ],
    function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        console.log(record.getId());
      });
    }
  );
  return <h1>hello</h1>;
}

export default Form;
