import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Carousel from "react-bootstrap/Carousel";
import { Form } from "react-bootstrap";

import Crd from "../Components/Card";

import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]); // ary k andar map lagta hai object k andar for in
  const [fooditem, setFooditem] = useState([]); // ary k andar map lagta hai object k andar for in

  const loaddata = async () => {
    let response = await fetch("http://localhost/fooditems", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setFoodCat(response[1]);
    setFooditem(response[0]);
  };

  useEffect(() => {
    loaddata();
  }, []); // load only once using this empty array

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          {" "}
          <Carousel style={{ objectFit: "contain !importent" }}>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                style={{ height: "65vh", objectFit: "cover" }}
                src="/one.jpg"
                alt="First slide"
              />

              <Carousel.Caption>
                <div className="d-flex justify-content-center">
                  <Form.Control
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    type="search"
                    style={{ backgroundColor: "transparent", color: "white" }}
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ objectFit: "contain !importent" }}>
              <img
                className="d-block w-100 "
                style={{ height: "65vh", objectFit: "cover" }}
                src="/two.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <div className="d-flex">
                  <Form.Control
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    type="search"
                    style={{ backgroundColor: "transparent", color: "white" }}
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ objectFit: "contain !importent" }}>
              <img
                className="d-block w-100 "
                style={{ height: "65vh", objectFit: "cover" }}
                src="/three.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className="d-flex">
                  <Form.Control
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    type="search"
                    style={{ backgroundColor: "transparent", color: "white" }}
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="container-fluid">
          <div className="container">
            {foodCat.length !== 0 ? (
              foodCat.map((data) => (
                <div key={data._id}>
                  {/* mb-3 = margin bottom 3 */}
                  <div className="fs-3 row">
                  <h1 id="category">{data.CategoryName}</h1>
                
                    <hr />
                    {fooditem.length !== 0 ? (
                      fooditem
                        .filter(    
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((filteritem) => (
                          <div
                            className="col-12 col-md-6 col-lg-3 m-2"
                            key={filteritem._id}
                          >
                            <Crd
                              allfooditem={filteritem}
                              options={filteritem.options[0]}
                            ></Crd>
                          </div>
                        ))
                    ) : (
                      <div>Nothing</div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div>Nothing outside</div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
