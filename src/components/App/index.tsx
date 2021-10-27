import * as React from 'react';

import { StyledSection } from './App.styles';

const App: React.FC = () => {
  return (
    <StyledSection>
      <div style={{ width: '100%' }}>
        <pearson-header theme="light" name="David ODey" />
      </div>
      <h2 className="gr-h2">Hello from React</h2>
      <button className="gr-btn" type="button">
        Button
      </button>
      <button className="gr-btn" type="button" disabled>
        Button
      </button>
      <br />
      <br />
      <h3 className="gr-h3">Pearson accordion</h3>
      <pearson-accordion>
        <ul slot="buttons">
          <li>Button One</li>
          <li>Button Two</li>
          <li>Button Three</li>
          <li>Button Four</li>
        </ul>
        <div className="panels" slot="panels">
          <div className="panel">Section One</div>
          <div className="panel">Section Two</div>
          <div className="panel">Section Three</div>
          <div className="panel">Section Four</div>
        </div>
      </pearson-accordion>
      <br />
      <br />
      <h3 className="gr-h3">Pearson datepicker</h3>
      <pearson-datepicker />
      <br />
      <br />
      <h3 className="gr-h3">Button toggle</h3>
      <pearson-button-toggle label="Toggle title">
        <button>Value 1</button>
        <button>Value 2</button>
        <button>Value 3</button>
        <button>Value 4</button>
      </pearson-button-toggle>
      <br />
      <br />
      <h3 className="gr-h3">Pagination</h3>
      <pearson-pagination lastpage="10" ellipsisat="5" />
      <br />
      <br />
      <h3 className="gr-h3">Table</h3>
      <div className="gr-table-container selectable">
        <table
          className="gr-table"
          aria-label="Welcome to twin peaks, her are the key players:"
        >
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Position</th>
              <th scope="col">Age</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="selected">
              <th scope="row">Gordon</th>
              <th scope="row">Cole</th>
              <th scope="row">FBI Director</th>
              <th scope="row">70</th>
              <th scope="row">Instructor</th>
            </tr>
            <tr>
              <th scope="row">Dale</th>
              <th scope="row">Cooper</th>
              <th scope="row">Special Agent</th>
              <th scope="row">60</th>
              <th scope="row">Investigator</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <pearson-footer theme="dark" />
      </div>
    </StyledSection>
  );
};

export { App };
