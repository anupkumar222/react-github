import React from "react";
import {Link, withRouter} from "react-router-dom";
import articles from "./data/article.json";

class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            searchTerm: ""
        }
    }

    handleChange = ({target : {value}}) => {
        this.setState({
            searchTerm: value
        })
    }

    render() {
        let filteredArticles = articles.filter((article) => 
        article.title.toLocaleLowerCase().includes(this.state.searchTerm));

        return (
            <>
            <input 
            placeholder="Search"
            className="search"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
            <ul className="articles">
                {filteredArticles.map((article) => (
                    <li>
                        <Link to={"articles/" + article.slug}>
                        <h3>{article.title}</h3>
                        
                        </Link>
                        <small>
                            {article.author}
                        </small>
                    </li>
                ))}
            </ul>
            </>

        )
    }
}


export default withRouter(Articles)