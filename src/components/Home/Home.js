import axios from "../../config/axios";
import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Body from "./Body/Body";

function Home() {
  const [getImg, setGetImg] = useState();

  useEffect(() => {
    const getImg = async () => {
      const resGetImg = await axios.get("/banner");
      console.log("@resGetImg:", resGetImg);
      setGetImg(resGetImg.data.result[0].image);
    };
    getImg();
  }, []);

  return (
    <>
      <Banner getImg={getImg} />
      <Body />
    </>
  );
}

export default Home;
