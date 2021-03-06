import { useEffect, useState } from "react";
import { getAlldata } from "../redux/actions/index";
import { Contact } from "./contact";
import Button from "@mui/material/Button";
import CatAndFilters from "./CatAndFilters";
import Framescards from "./Framescards";
import Slider from "./Slider";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { allProducts } = useSelector((state) => state.manageItems);

  useEffect(() => {
    fetch("http://localhost:4000/product/all")
      .then((res) => res.json())
      .then((result) => {
        dispatch(getAlldata(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [1]);

  return (
    <>
      <Slider />
      {/* <Link className="btn btn-custom btn-lg" to="tryon">
        Try on
      </Link> */}

      <div className="text-center" style={{ marginTop: "70px" }}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            m: 2,
            width: 300,
            height: "5%",
            color: "black",
            borderColor: "grey.500",
          }}
        >
          SHOP EYEGLASSES
        </Button>

        <Button
          variant="outlined"
          size="large"
          sx={{
            m: 2,
            width: 300,
            height: "5%",
            color: "black",
            borderColor: "grey.500",
          }}
        >
          SHOP SUNGLASSES
        </Button>
      </div>

      <CatAndFilters />

      <div className="container">
        <div className="row">
          {allProducts.map((item, index) => {
            return (
              <Framescards
                id={item._id}
                prodIndex={index}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>

      <Contact />
    </>
  );
};
