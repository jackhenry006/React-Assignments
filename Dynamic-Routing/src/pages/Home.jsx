import { useContext, useEffect } from "react";
import axios from "axios";
import MyStore from "../context/MyContext";
const Home = () => {
  let { productsData, setProductsData } = useContext(MyStore);
  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Api Error", error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div>
      <h1>this is home page</h1>
    </div>
  );
};

export default Home;
