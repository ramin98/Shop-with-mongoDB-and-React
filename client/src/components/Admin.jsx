import { useState, useEffect } from "react";
import GoodsComponent from "./GoodsComponent";

function Admin() {
  let [productName, setProductName] = useState("");
  let [productDescription, setProductDescription] = useState("");
  let [productPrice, setProductPrice] = useState(null);
  let [storeName, setStoreName] = useState("");
  let [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:5000/api/goods/get-all");
      let data = await res.json();
      setGoods(data);
    };
    fetchData();
  }, []);

  const addGoods = async (ev) => {
    ev.preventDefault();
    let obj = {
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      storeName: storeName,
    };
    let res = await fetch("http://localhost:5000/api/goods/add-to-goods", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await res.json();
    console.log(data);

    let newArr = [...goods];
    newArr.push(data)
    setGoods(newArr);
    console.log(data);
  };

  const deleteGoods = async (id) => {
    event.preventDefault();

    let newArr = [...goods];
    let goodsIndex = newArr.findIndex((item) => item._id === id);
    newArr.splice(goodsIndex, 1);
    setGoods(newArr);

    let res = await fetch(
      `http://localhost:5000/api/goods/delete-goods/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await res.json();
    console.log(data);
  };

  return (
    <section>
      <h1>Admin</h1>
      <form onSubmit={addGoods}>
        <input
          type="text"
          placeholder="NAME"
          onChange={(ev) => setProductName(ev.target.value)}
        />
        <input
          type="text"
          placeholder="DESCRIPTION"
          onChange={(ev) => setProductDescription(ev.target.value)}
        />
        <input
          type="text"
          placeholder="PRICE"
          onChange={(ev) => setProductPrice(ev.target.value)}
        />
        <input
          type="text"
          placeholder="STORE NAME"
          onChange={(ev) => setStoreName(ev.target.value)}
        />
        <button>ADD</button>
      </form>

      <ul>
        {goods.map((item) => <GoodsComponent goods={goods} setGoods={setGoods} key={item._id} deleteGoods={deleteGoods} {...item}/>)}
      </ul>
    </section>
  );
}

export default Admin;
