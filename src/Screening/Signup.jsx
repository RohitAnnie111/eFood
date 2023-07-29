import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
  
  
  const response = await fetch("http://localhost/Home",{
  
  method: 'POST',
  body:JSON.stringify(form),
  
  headers:{ // aditional type
  
      'Content-Type':'application/json'
  
  }
  
  
  })

}
  
  return (
    
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
   

      <Button variant="success" type="submit">
        login
      </Button>

    
    </Form>
  );
}

export default Signup;