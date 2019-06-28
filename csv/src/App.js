import React, { Component } from 'react'
import './App.css';
import { CSVLink, CSVDownload } from "react-csv";

const fa1 = [{label: "A", key: "a"}, {label: "BB", key: "b"}, {label: "CCC", key: "c"}];
const fa = ["a", "b", "c"];
// const sa = [{a: 1, b: 1, c: 1}, {a: 2, b: 2, c: 2}, {a: 3, b: 3, c: 3}];
const sa = [[1,2,3], [2,2,2],[3,3,3]];
export default class App extends Component {
    render() {
      const headers = [
        { label: 'First Name', key: 'details.firstName' },
        { label: 'Last Name', key: 'details.lastName' },
        { label: 'Job', key: 'job' },
      ];
       
      const data = [
        { details: { firstName: 'Ahmed', lastName: 'Tomi' }, job: 'manager'},
        { details: { firstName: 'John', lastName: 'Jones' }, job: 'developer'},
      ];

      const h = fa.map(item => item = {label: item, key: item});
      const d = sa.map(item => item = {});
      console.log("header:", fa, "data:", sa)
      // console.log("h: ", h, "fa1:", fa1)
      return (
      <div>
        <CSVLink
          data={sa}
          headers={fa}
          filename={"my-file.csv"}
          className="btn btn-primary"
          target="_blank" >
          Download me
        </CSVLink>

        <button class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i> Edit</button>
      </div>
    );
  }
}
