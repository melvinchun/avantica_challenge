import React, { Fragment, useContext, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { AppContext } from '../context/context';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
    const context = useContext(AppContext);
    const { setUser } = context;

    const textInput = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault();
        const value = textInput.current!.value;
        setUser(value);
        history.push('/game')
    }

    return (
        <Fragment>
            <Container className="home-container min-vh-100 d-flex flex-column">
                <Row className="flex-grow-1 align-items-center">
                    <Col 
                        lg={{offset:4, span: 4}} 
                        md={{offset:3, span: 6}} 
                        sm={{offset:2, span: 8}}
                        xs={{offset: 0, span: 12}}
                        className="text-center"
                    >
                        <form onSubmit={submitHandler}>
                            <h1>Hello friend, tell me your name...</h1>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your name here"
                                name='username'
                                ref={textInput}
                            />
                            <button
                                className="btn-go"
                                type="submit"
                            >
                                Let's go →
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Fragment>     
    )
}

export default Home;