import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  saveProduct,
  listProducts,
  deleteProdcut,
} from "../actions/productActions";

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sold, setSold] = useState("");
  const [origin, setOrigin] = useState("");
  const [category, setCategory] = useState("");
  const [shop_name, setShopName] = useState("");
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setSold(product.sold);
    setOrigin(product.origin);
    setCategory(product.category);
    setShopName(product.shop_name);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        id,
        name,
        price,
        quantity,
        sold,
        origin,
        category,
        shop_name,
      })
    );
  };
  const deleteHandler = (product) => {
    dispatch(deleteProdcut(product.Product_ID));
  };

  return (
    <div className="content content-margined">
      <div className="product-header">
        <h3>Products</h3>
        <button className="button primary" onClick={() => openModal({})}>
          Create Product
        </button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Create Product</h2>
              </li>
              <li>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
              </li>

              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="quantity">quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={quantity}
                  id="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="sold">sold</label>
                <input
                  type="text"
                  name="sold"
                  value={sold}
                  id="sold"
                  onChange={(e) => setSold(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="origin">origin</label>
                <input
                  type="text"
                  name="origin"
                  value={origin}
                  id="origin"
                  onChange={(e) => setOrigin(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="Category">Category</label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="shop_name">shop_name</label>
                <textarea
                  type="text"
                  name="shop_name"
                  value={shop_name}
                  id="shop_name"
                  onChange={(e) => setShopName(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button type="submit" className="button primary">
                  {id ? "Update" : "Create"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Back
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>origin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.Product_ID}>
                <td>{product.Product_ID}</td>
                <td>{product.Name}</td>
                <td>{product.Price}</td>
                <td>{product.Quantity}</td>
                <td>{product.Origin}</td>
                <td>
                  <button className="button" onClick={() => openModal(product)}>
                    Edit
                  </button>{" "}
                  <button
                    className="button"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductsScreen;
