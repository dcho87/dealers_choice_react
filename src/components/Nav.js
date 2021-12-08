import React, { Component } from "react";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      houses: [
        { id: 1, name: "Gryffindor" },
        { id: 2, name: "Hufflepuff" },
        { id: 3, name: "Ravenclaw" },
        { id: 4, name: "Slytherin" },
      ],
    };
  }
  render() {
    const { houses } = this.state;
    const { updateHouse, selectedHouse } = this.props;
    return (
      <nav>
        <div>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
            src="https://burrow.hogwartsishere.com/media/group_covers/harry.png"
          />
          <h2 className="nav"> Harry Potter Character Map </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "left",
            padding: "10px",
          }}
        >
          {houses.map((house) => {
            return (
              <div 
              onClick={()=> updateHouse(house.name)}key={house.id} style={{fontWeight: 'bold'}}>
                {house.name}
              </div>
            );
          })}
        </div>
      </nav>
    );
  }
}

export default Nav;
