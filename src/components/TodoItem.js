import React from 'react';

class TodoList extends React.Component {

    render() {
        return (
            <div key={this.props.item.id}>
                <div key={this.props.item.id} className="row">
                    <div className="col-6">
                        <a className="nav-link" href="#" onClick={this.props.select(this.props.item.id)}>{this.props.item.name}</a>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary">{this.props.item.statetodo}</button>
                    </div>
                    <div className="col-2">{this.props.item.when}</div>
                    <div className="col-2">
                        <a className="nav-link" href="#" >Del</a>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default TodoList