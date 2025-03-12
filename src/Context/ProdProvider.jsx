import React, { createContext, useEffect, useState } from "react";
import "../Util/localStorage";
import { setLocalStorage, getLocalStorage } from "../Util/localStorage";

export const ProdContext = createContext();

const ProdProvider = ({ children }) => {

  const timesStr = localStorage.getItem("times");
  const times = timesStr ? parseInt(timesStr) : 0;
  const [time, setTime] = useState(times);
  const [siteData, setSiteData] = useState({
    booksData: [],
    cartData: [],
  });

  useEffect(() => {
    if (times === 0) {
      setLocalStorage();
      setTime(1);
      localStorage.setItem("times", 1);
    } else {
      const { booksData, cartData } = getLocalStorage();
      setSiteData({ booksData, cartData });
    }
  }, [times]);

  const handleCart = (ele) => {
    const updateCartData = [...siteData.cartData, ele];
    setSiteData({
      ...siteData,
      cartData: updateCartData,
    });
    localStorage.setItem("cartData", JSON.stringify(updateCartData));
  };

  const remove = (ele) => {
    const updateCartData = siteData.cartData.filter(
      (item) => item.id !== ele.id
    );
    setSiteData({ ...siteData, cartData: updateCartData });
    localStorage.setItem("cartData", JSON.stringify(updateCartData));
  };

  return (
    <div>
      <ProdContext.Provider value={{ ...siteData, handleCart, remove }}>
        {children}
      </ProdContext.Provider>
    </div>
  );
};

export default ProdProvider;
