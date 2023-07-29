// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Crd() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?tikka" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        <select className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (e,i)=>{

                return(
                    <option key={i+ 1} value={i+ 1}>{i+1}</option>
                )

            })}
        </select>

        <select className="m-2 h-100 bg-success rounded">
            <option value={"half"}>Half</option>
            <option value={"full"}>Full</option>
        </select>
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default Crd;

       


