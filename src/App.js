import React, { useState } from 'react'
import Navabr from './component/Navabr'
import New from './component/New'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const pageSize = 20
  const apiKey = '389c20254874432ca46e824f05e1b34f'
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navabr title="NewsApp" />
        <LoadingBar
          color='#f11946'
          progress={progress} />

        <Switch>
          <Route key="general" exact path="/general">
            <New setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="general" />
          </Route>
          <Route key="bussiness" exact path="/bussiness">
            <New setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="bussiness" />
          </Route>
          <Route key="entertainment" exact path="/entertainment">
            <New setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" />
          </Route>
          <Route key="health" exacte path="/health">
            <New setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="health" />
          </Route>
          <Route key="science" exact path="/science">
            <New setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="science" />
          </Route>
          <Route key="sport" exact path="/sport">
            <New setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="sport" />
          </Route>
          <Route key="technology" exact path="/technology">
            <New setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  )

}
export default App;