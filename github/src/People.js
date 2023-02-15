import React from "react";
import people from "./data/got.json"

class People extends React.Component {
state = {
    searchTerm: ""
}
handleChange = ({target: {value}}) => {
    this.setState ( {
        searchTerm: value
    })
}
    render() {
        let allPeople = people.reduce((acc, cv) => {
            acc = acc.concat(cv.people)
            return acc
        }, [])
        let filteredPeople = allPeople.filter((person) => 
            person.name.toLowerCase().includes(this.state.searchTerm)
        );
        return (
        <>
            <input 
            placeholder="Search"
            className="search"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />

        <ul className="people">
          {filteredPeople.map((sp) => (
             <li className="card">
             <div className="info">
               <img src={sp.image} alt={sp.name} />
               <h2>{sp.name}</h2>
             </div>
             <p>{sp.description}</p>
             <a href={sp.wikiLink}>Learn More!</a>
           </li>
          ))}
        </ul>
        </>
        )
    }
}


export default People