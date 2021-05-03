import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './Resource.css';

function UseQuery() {
  let search = window.location.search;
  return new URLSearchParams(search);
}

export default function resource() {
  let query = UseQuery();
  return (
    <div id='resource-img-container'>
      <div id="card-index">{query.get('index')}</div>
      <Router>
        <Switch>
          <Route exact path="/resources/back">
            <ResourceBack />
          </Route>
          <Route exact path="/resources/front">
            <ResourceFront />
          </Route>
        </Switch>
      </Router>
      <ResourceFooter/>
    </div>
  )
}

function ResourceBack()
{
  let query = UseQuery();
  return (
    <div id="contents">
      <div id="back-color" class={"square " + query.get('type-sm')}></div>
      <img width="500" height="500" alt="back" src="/images/resources/back.png"></img>
    </div>
  )
}

function ResourceFront()
{
  let query = UseQuery();
  if (!query.get('double')) {
    return (
      <div id="contents">
        <div id="name">{query.get('name')}</div>
        <div id="front-single-color" class={"square " + query.get('type-sm')}></div>
        <img width="500" height="500" alt="back" src="/images/resources/front1.png"></img>
      </div>
    )
  }

  return (
    <div id="contents">
      <div id="name">{query.get('name')}</div>
      <div id="front-double-1" class={"square " + query.get('type-sm')}></div>
      <div id="front-double-2" class={"square " + query.get('double')}></div>
      <img width="500" height="500" alt="back" src="/images/resources/front2.png"></img>
    </div>
  )
}

function ResourceFooter(props) {
  let query = UseQuery();
  let footer = query.get('footer');
  if (footer === '-1') {
    return (
      <div id="footer" class="negative">
        -1 <div class='square'>any</div>
      </div>
    )
  }
  
  if (footer === ':)') {
    return (
      <div id="footer">
        <img alt="footer" src={"/images/happy.png"}></img>
      </div>
    )
  }

  if (footer=== ':(') {
    return (
      <div id="footer">
        <img alt="footer" src={"/images/sad.png" }></img>
      </div>
    )
  }

  return (
    <div></div>
  )
}