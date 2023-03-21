import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const MailingListModal = ({
    mailingListNotifications,
    saveUserToEmailList,
    updateMailiglistNotification,
}) => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');


    const handleClose = () => {
        updateMailiglistNotification({ type: "ok", notifications: [] });
        setEmail('');
        setName('');
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveUserToEmailList(email, name);
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        e.target.type === 'email' ? setEmail(value) : setName(value);
    }

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
    }

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
                                onChange={(e) => handleChange(e)}
                                value={email}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name" 
                                onChange={(e) => handleChange(e)} 
                                value={name} 
                            />
                        </Form.Group>
                        {showNotifications()}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="secondary-button" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="primary-button" onClick={() => saveUserToEmailList(email, name)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}