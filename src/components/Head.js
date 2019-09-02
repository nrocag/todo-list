import React, { Component } from "react";

class Head extends Component {
    render() {
        return (
            <div className="container-fluid title">
                <h3><img className="head" alt="My photo" src="messi.jpg" height="42" width="42" />My tasks in apollo enterprises</h3>
            </div>
        );
    }
}

export default Head /* Hace público el componente */