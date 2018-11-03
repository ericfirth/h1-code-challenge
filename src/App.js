import React, { Component } from 'react';

import './App.css';
import data from './loan-data.json';
import Chart from './Chart';
import Panel from './Panel';
import { averageFrom, loanAmountsAndAnnualIncomesBy } from './helpers';

const CATEGORIES = {
  byState: 'addr_state',
  byEmploymentLength: 'emp_length',
  byHomeownership: 'home_ownership',
};

class App extends Component {
  state = {
    category: CATEGORIES.byState,
    whatIMadePanelOpened: false,
    whatIdDoDifferentOpened: false,
  };

  changeCategory = e => this.setState({ category: CATEGORIES[e.target.value] });

  dataForCurrentCategory = () => {
    const { category } = this.state;
    const byCategory = data.reduce(loanAmountsAndAnnualIncomesBy(category), {});

    const categories = Object.keys(byCategory).sort();
    return {
      categories,
      series: [
        {
          name: 'Average Loan Amount',
          data: categories.map(category =>
            averageFrom(byCategory[category].loanAmounts)
          ),
        },
        {
          name: 'Average Annual Income',
          data: categories.map(category =>
            averageFrom(byCategory[category].annualIncome)
          ),
        },
      ],
    };
  };

  render() {
    return (
      <div className="App">
        <Panel
          opened={this.state.whatIMadePanelOpened}
          toggleOpen={() =>
            this.setState(state => ({
              whatIMadePanelOpened: !state.whatIMadePanelOpened,
            }))
          }
          title="What I Made"
          text="I opened the CSV and looked at the data I"
        />
        <Panel
          opened={this.state.whatIdDoDifferentOpened}
          toggleOpen={() =>
            this.setState(state => ({
              whatIdDoDifferentOpened: !state.whatIdDoDifferentOpened,
            }))
          }
          title="What I'd Do Different"
          text="..."
        />
        <form>
          <fieldset>
            <legend>Choose a category to slice data by</legend>
            <label>
              By State
              <input
                onChange={this.changeCategory}
                type="radio"
                name="category"
                value="byState"
                checked={this.state.category === CATEGORIES.byState}
              />
            </label>
            <label>
              By Employment Length
              <input
                onChange={this.changeCategory}
                type="radio"
                name="category"
                value="byEmploymentLength"
                checked={this.state.category === CATEGORIES.byEmploymentLength}
              />
            </label>
            <label>
              By Homeownership
              <input
                onChange={this.changeCategory}
                type="radio"
                name="category"
                value="byHomeownership"
                checked={this.state.category === CATEGORIES.byHomeownership}
              />
            </label>
          </fieldset>
        </form>

        <Chart {...this.dataForCurrentCategory()} />
      </div>
    );
  }
}

export default App;
