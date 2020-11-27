import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { filter,setVisibilityFiter} = this.props;
    return (
      <div>
        <span>Show:</span>
        <button disabled={filter === "all"} onClick={()=>setVisibilityFiter("all")}>All</button>
        <button disabled={filter === "active"} onClick={()=>setVisibilityFiter("active")}>Active</button>
        <button disabled={filter === "completed"} onClick={()=>setVisibilityFiter("completed")}>Complated</button>
      </div>
    );
  }; 
} 

export default Footer;
