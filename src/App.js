import "./App.css";
import Dates from "./Dates.js";
import React, { useState } from "react";
import Time from "./Time.js";

function App() {
  const [time, settime] = useState(0);
  return (
    <div className="App">
      <table>
        <tr>
          <th>Dates</th> <th>Start Time Stop time</th>
        </tr>
        <tr>
          <td>
            <Dates day={1} />
          </td>
          <td>
            <Time onChange={(e) => settime(e + time)} />
          </td>
        </tr>
        <tr>
          <td>
            <Dates day={2} />
          </td>
          <td>
            <Time onChange={(e) => settime(e + time)} />
          </td>
        </tr>
        <tr>
          <td>
            <Dates day={3} />
          </td>
          <td>
            <Time onChange={(e) => settime(e + time)} />
          </td>
        </tr>
        <tr>
          <td>
            <Dates day={4} />
          </td>
          <td>
            <Time onChange={(e) => settime(e + time)} />
          </td>
        </tr>
        <tr>
          <td>
            <Dates day={5} />
          </td>
          <td>
            <Time onChange={(e) => settime(e + time)} />
          </td>
        </tr>
        <tr>
          <td>
            <Dates day={6} />
          </td>
          <td>
            <Time onChange={(e) => settime(e + time)} />
          </td>
        </tr>
        <tr>
          <td>
            <Dates day={7} />
          </td>
          <td>
            <Time onChange={(e) => settime(e + time)} />
          </td>
        </tr>
      </table>
      <h1>Total Hours: {time}</h1>
    </div>
  );
}

export default App;
