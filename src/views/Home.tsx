import React, { Fragment, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { AppContext } from '../context/context';

const Home: React.FC<RouteComponentProps> = ({history}) => {
    const context = useContext(AppContext);
    const { user, setUser } = context;

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const value = e.currentTarget.value as string;
        setUser(value);
    };

    const onClick = (): void => {
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
                        <h1>Hello friend, tell me your name...</h1>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your name here"
                            name='username'
                            value={user}
                            onChange={onChange}
                        />
                        <button
                            className="btn-go"
                            onClick={onClick}
                        >
                            Let's go →
                        </button>
                    </Col>
                </Row>
            </Container>
        </Fragment>     
    )
}

export default Home;