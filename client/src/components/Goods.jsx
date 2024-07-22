import { useEffect, useState } from "react"

function Goods() {
    let [goods, setGoods] = useState([])

    useEffect(() => {
        const fetchData =  async () => {
            let res = await fetch('http://localhost:5000/api/goods/get-all')
            let data = await res.json()
            setGoods(data)
        }
        fetchData()
    }, [])

    if(goods.length === 0){
        return <h1>EMPTY ARRAY OF GOODS</h1>
    }

    return (
      <section>
        <h1>GOODS</h1>
        <ul>
            {
                goods.map((item) => {
                    return(
                        <li key={item._id}>
                            <p>{item.productName}</p>
                            <p>{item.productDescription}</p>
                            <p>{item.productPrice}</p>
                            <p>{item.storeName}</p>
                        </li>
                    )
                })
            }
        </ul>
      </section>
    )
  }
  
  export default Goods
  