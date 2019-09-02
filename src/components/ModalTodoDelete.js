import React from 'react';
import Modal from 'react-responsive-modal';

class ModalTodoDelete extends React.Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    acepted = () => {
        this.props.executeAcepted(this.props.id);
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <a className="nav-link" href="#" onClick={this.onOpenModal}>
                    <i className="far fa-trash-alt" aria-hidden="true" /></a>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <br />
                    <p>¿Está seguro que desea eliminar?</p>
                    <br />
                    <div className="button-right">
                        <button onClick={this.acepted} className="btn btn-primary">Ok</button>&nbsp;
                        <button onClick={this.onCloseModal} className="btn btn-secondary">Cancel</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalTodoDelete