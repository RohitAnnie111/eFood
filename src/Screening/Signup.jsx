import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Signup() {

const[form,setform] = useState({})

function input(e)
{
  

setform({
    ...form,
    [e.target.name]:e.target.value})

}

const Submit = async (e)=>{

  
  e.preventDefault();
  
  
  const response = await fetch("http://localhost/Home/Signup",{
  
  method: 'POST',
  body:JSON.stringify(form),
  
  headers:{ // aditional type
  
      'Content-Type':'application/json'
  
  }
  
  
  })

}
  
  return (
    <>
          <div className='container'>
    
    <Form onSubmit={Submit}>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={input}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={input} />
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Conform-Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="c_password" onChange={input} />
      </Form.Group>

      <Button variant="success" className="m-3" type="submit">
        Submit
      </Button>

    <Link to="/Login"><Button variant="denger"  className="btn btn-danger m-3">
        I m Already a User
      </Button>
      </Link> 

    
    </Form>

    </div>

    </>

  );
}

export default Signup;