import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'

function Users() {
    const [users, setusers] = useState([]);
    const [searchusers, setsearchusers] = useState(users);
    const [keyword, setkeyword] = useState("");
    const history = useHistory();

    const search = event => {
        setkeyword(event.target.value)
        console.log(keyword)
        if (keyword !== "") {
            setsearchusers(users.filter(user => (user.firstName.startsWith(keyword) || user.lastName.startsWith(keyword))))
        }
        else {
            setsearchusers(users)
        }
        console.log(searchusers)
    }

    function profile(id) {
        console.log(id)
        history.push("/profile/"+id)
    }

    useEffect(() => {
        async function fetch() {
            await axios.get("https://tutorial4-api.herokuapp.com/api/users/").then((response) => {
                setusers(response.data.data);
                setsearchusers(users);
            });
        }
        fetch();
    }, []);

    return (
        <Container fliud>
            <Row><Col> <h1> Welcome </h1></Col></Row>
            <Row><Col> <input type="text" name="search" placeholder="Search by First/Last Name" onChange={search}></input></Col></Row>
        <Row xs={1} md={5} className="g-4">
            {users.filter(user => (user.firstName.startsWith(keyword) || user.lastName.startsWith(keyword))).map((user) => (
                <Col>
                <a style={{ cursor: 'pointer' }} onClick={ () => profile(user.id)}>
                    <Card className="shadow p-3 mb-5 bg-white rounded">
                        <Card.Img variant="top" src={user.picture} />
                        <Card.Body>
                            <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                            <Card.Text>
                                Click to find out more!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </a>
                </Col>
            ))}
        </Row>
        </Container>
    )
}

export default Users
