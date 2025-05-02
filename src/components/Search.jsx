import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import Swal from 'sweetalert2';

const Search = ({sendKeyword}) => {
    

    const [keyword, setKeyword] = useState("");
    const formSubmit = e => {
        e.preventDefault();
        if (!keyword) {
            Swal.fire({
                title: 'fill input!',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }else{
            sendKeyword(keyword);
            setKeyword("");
        }
    }
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <h3 className='my-4'> Search user</h3>
                <Col sm="12" md="5">
                    <form onSubmit={formSubmit} className="input-group mb-3">
                        <input onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter name" />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                    </form>
                </Col>
            </Container>
        </>

    )
}

export default Search