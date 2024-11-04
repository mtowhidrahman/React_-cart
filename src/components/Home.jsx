import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

let img1 =
  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204";

let img2 =
  "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPad_Air_2022/DSC0960586.JPG";
let img3 =
  "https://static.chemistwarehouse.com.au/ams/media/pi/83786/3DF_800.jpg";
let img4 =
  "https://cdn.shopify.com/s/files/1/3004/4124/products/DCH-2138-DARKGREEN-VEL-2P_main_600x.jpg?v=1663156417";
let img5 =
  "https://cdn.britannica.com/28/75928-050-66951F06/species-bamboo-islands-Asia-oceans-Pacific-Indian.jpg";

const Home = () => {
  const productList = [
    {
      name: "Iphone",
      price: 600,
      imgSrc: img1,
      id: "igubhuijnikb",
    },
    {
      name: "Ipad",
      price: 1000,
      imgSrc: img2,
      id: "igubhuijcfdenjhbjh",
    },
    {
      name: "Condoms",
      price: 20,
      imgSrc: img3,
      id: "yuhgiliubuv",
    },
    {
      name: "Chair",
      price: 360,
      imgSrc: img4,
      id: "jhbjhbkj",
    },
    {
      name: "Bash",
      price: 69,
      imgSrc: img5,
      id: "gfdfcgvhb",
    },
  ];

  let dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({
      type: "calculatePrice",
    });
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          imgSrc={i.imgSrc}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, imgSrc, price, handler }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, id, price, imgSrc, quantity: 1 })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
