import { useState } from "react";

function GoodsComponent({
  setGoods,
  goods,
  productName,
  productDescription,
  productPrice,
  storeName,
  _id,
  deleteGoods,
}) {
  let [flag, setFlag] = useState(false);
  let [productNameChange, setProductNameChange] = useState("");
  let [productDescriptionChange, setProductDescriptionChange] = useState("");
  let [productPriceChange, setProductPriceChange] = useState(null);
  let [storeNameChange, setStoreNameChange] = useState("");

  const changeGoods = async (id) => {
    event.preventDefault();
    let obj = {
      productName: productNameChange,
      productDescription: productDescriptionChange,
      productPrice: productPriceChange,
      storeName: storeNameChange,
    };
    let res = await fetch(
      `http://localhost:5000/api/goods/change-goods/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    let data = await res.json();
    console.log(data);

    let newArr = [...goods];
    let goodsIndex = newArr.findIndex((item) => item._id === id);
    newArr[goodsIndex] = data;
    setGoods(newArr);
  };

  return (
    <li>
      <p>{productName}</p>
      <p>{productDescription}</p>
      <p>{productPrice}</p>
      <p>{storeName}</p>
      <button onClick={() => deleteGoods(_id)}>DELETE</button>
      <button onClick={() => setFlag(!flag)}>Change</button>
      {flag && (
        <form onSubmit={() => changeGoods(_id)}>
          <input
            type="text"
            placeholder="NAME"
            onChange={(ev) => setProductNameChange(ev.target.value)}
          />
          <input
            type="text"
            placeholder="DESCRIPTION"
            onChange={(ev) => setProductDescriptionChange(ev.target.value)}
          />
          <input
            type="text"
            placeholder="PRICE"
            onChange={(ev) => setProductPriceChange(ev.target.value)}
          />
          <input
            type="text"
            placeholder="STORE NAME"
            onChange={(ev) => setStoreNameChange(ev.target.value)}
          />
          <button>UPDATE</button>
        </form>
      )}
    </li>
  );
}

export default GoodsComponent;
