import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import Articles from "./Articles";
import Article from "./Article"; 
import Books from "./Books";
import People from "./People";
import Help from "./Help";
import NotFound from "./NotFound";

function Main() {
    return(
        <div className="page-content">
            <Switch>
                <Route path="/" exact>
                <Home />
                </Route>
                <Route path="/help">
                <Help />
                </Route>
                <Route path="/articles" exact>
                <Articles />
                </Route>
                <Route path="/people" >
                <People />
                </Route>
                <Route path="/books" >
                <Books />
                </Route>
                <Route path="/articles/:slug">
                <Article />
                </Route>
                <Route path="*" >
                <NotFound />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;