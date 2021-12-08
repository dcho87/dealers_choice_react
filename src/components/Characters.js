import React from "react";

const Character = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      {data
        .filter((character) => character.house === props.selectedHouse && character.image !== '')
        .map((character) => {
          return (
            <div
              key={character.name}
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <img
                style={{
                  borderRadius: "4px",
                  padding: "5px",
                  width: "150px",
                }}
                src={character.image}
              />
              <div>
              <small> {character.name} </small>
                  </div>

            </div>
          );
        })}
    </div>
  );
};

export default Character;
