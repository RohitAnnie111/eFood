// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

import { useDispatchCart, useCart } from "./ContextReducer";

import { useEffect, useState } from "react";
import { useRef } from "react";

function Crd(props) {
  let options = props.options;
  let priceOptions1 = Object.keys(options);
  let priceOptions = priceOptions1.slice(1); // because id was comming
  let dispatch = useDispatchCart();

  let dta = useCart();

  const [qty, setQty] = useState(1);
  const [size, setsize] = useState("");
  const priceRef = useRef();

  // let foodItem = props.allfooditem
  {
    console.log(props.allfooditem.img);
  }
  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.allfooditem._id,
      name: props.allfooditem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    console.log("hello");
    setsize(priceRef.current.value);
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.allfooditem.img} />
      <Card.Body>
        <Card.Title>{props.allfooditem.name}</Card.Title>
        <Card.Text>
          <select
            className="m-2 h-100 bg-success rounded"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select
            className="m-2 h-100 bg-success rounded"
            ref={priceRef}
            onChange={(e) => setsize(e.target.value)}
          >
            {priceOptions.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
          <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          <hr></hr>

          <button
            className={"btn btn-success justify-center ms-2"}
            onClick={handleAddToCart}
          >
            Add to Cart{" "}
          </button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Crd;
