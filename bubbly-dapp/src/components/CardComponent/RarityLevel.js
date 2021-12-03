import React from "react";
import rarityLevel from "./CardContents";

const ProgressBar = (props) => {

    const { bgcolor = '#FF1500', completed = rarityLevel } = props;
  
    const containerStyles = {
      height: 12,
      backgroundColor: "grey",
      borderRadius: 50,
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    }
  
    const labelStyles = {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}% Rarity`}</span>
        </div>
      </div>
    );
};
  
export default ProgressBar;
