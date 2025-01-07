

import React, {useEffect, useState} from "react";
import {getProducts} from "../Services/productsServices";


function ListComponent() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const list = await getProducts();
        setProducts(list);

    }
    fetchProducts()

    return(
        <>
            <h1>Danh sách sản phẩm</h1>
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Mô tả</th>
                    <th>Gía</th>
                    <th>Hành động</th>
                </tr>

                </thead>
            </table>
            <tbody>
            {products.map((p,i) => (
                <tr>
                    <td>{p.type}</td>
                    <td>{p.name}</td>
                </tr>

            ))}


            </tbody>
        </>


    )
}

export default ListComponent;


