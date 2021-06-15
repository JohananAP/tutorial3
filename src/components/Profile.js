import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Card, Container } from 'react-bootstrap';
import axios from 'axios'

function Profile() {
    const params = useParams();
    const [user, setuser] = useState({});

    useEffect(() => {
        async function fetch() {
            await axios.get("https://tutorial4-api.herokuapp.com/api/users/" + params.id).then((response) => {
                console.log(response)
                setuser(response.data.data)
            });
        }
        fetch();
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={user.picture} fluid />
                        <Card.Body>
                            <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                            <Card.Text>
                                Title : {user.title} <br/>
                                Email contact : {user.email}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile
