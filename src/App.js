import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route
              render={(props) => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/Billiards Table" />}
              />

              <Route
                path="/Billiards Table"
                render={() => <Item searchTerm="Billiards Table" />}
              />
              <Route
                path="/Call Of Duty"
                render={() => <Item searchTerm="Call Of Duty" />}
              />

              <Route
                path="/Cold drinks"
                render={() => <Item searchTerm="Cold drinks" />}
              />

              <Route
                path="/Basketball court"
                render={() => <Item searchTerm="Basketball court" />}
              />
              <Route
                path="/Go karts"
                render={() => <Item searchTerm="Go karts" />}
              />

              <Route
                path="/search/:searchInput"
                render={(props) => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
