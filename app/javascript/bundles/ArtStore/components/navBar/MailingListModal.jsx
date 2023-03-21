import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const MailingListModal = ({
    mailingListNotifications,
    saveUserToEmailList,
    updateMailiglistNotification,
}) => {
    const [show, setShow] = useState(false);
    const newFanDetailRef = {
        name: useRef(),
        email: useRef(),
    };

    const handleShow = () => setShow(true);
    
    const handleClose = () => {
        updateMailiglistNotification({ type: "ok", notifications: [] });
        setShow(false);
    };

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveUserToEmailList(newFanDetailRef.email.current.value, newFanDetailRef.name.current.value);
        }
    };

    const showNotifications = () => {
        if (mailingListNotifications.notifications.length > 0) {
            return (
                <div>
                    {mailingListNotifications.notifications.map((notification, idx) => {
                        return (
                                <div key={idx} className={`alert-${mailingListNotifications.type}`}>
                                    {notification}
                                    <br />
                                </div>
                                )

                        }
                    )}
                </div>
            )
        }
    };

    return (
        <>
            <li className='nav-option-link' onClick={handleShow}>
                MAILING LIST
            </li>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>JOIN THE MAILING LIST</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                className="input"
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                onKeyDown={(e) => handleSubmit(e)}
                                ref={newFanDetailRef.email}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name" 
                                ref={newFanDetailRef.name}
                            />
                        </Form.Group>
                        {showNotifications()}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="secondary-button" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="primary-button" onClick={() => saveUserToEmailList(newFanDetailRef.email.current.value, newFanDetailRef.name.current.value)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

MailingListModal.propTypes = {
    mailingListNotifications: PropTypes.object.isRequired,
    saveUserToEmailList: PropTypes.func.isRequired,
    updateMailiglistNotification: PropTypes.func.isRequired,
}
