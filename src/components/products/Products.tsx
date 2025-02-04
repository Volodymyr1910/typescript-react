import { useEffect, useState } from "react";
import style from "./Products.module.css";
import { IProduct } from "./types/types";
import ProductCard from "../productCard/ProductCard";
import { useFormik } from "formik";
import * as yup from "yup";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";

interface IProductForm {
  limit: string;
}

const validationSchema = yup.object().shape({
  limit: yup
    .number()
    .typeError("enter a number, please")
    .min(1, "not less than 1")
    .max(20, "not more than 20"),
});

export default function Products(): JSX.Element {
  const [prLimit, setPrLimit] = useState<number>(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(true);

  const getProducts = async () => {
    if (prLimit > 0) {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products?limit=${prLimit}`
        );
        const data: IProduct[] = await res.json();
        setProducts(data);
        setShowInput(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const formik = useFormik({
    initialValues: { limit: "" } as IProductForm,
    validateOnChange: false,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setPrLimit(Number(values.limit));
      resetForm();
    },
  });

  useEffect(() => {
    getProducts();
  }, [prLimit]);

  return (
    <div className={style.mainContainer}>
      {showInput ? (
        <div className={style.container}>
          <form onSubmit={formik.handleSubmit} className={style.form}>
            <label htmlFor="limit">Product limit</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.limit}
              type="number"
              placeholder="Enter quantity of products"
              name="limit"
              id="limit"
            />
            {formik.errors.limit && <span>{formik.errors.limit}</span>}
            <button type="submit">Send limit</button>
          </form>
        </div>
      ) : (
        <></>
      )}

      {isLoading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
          <div>
            <div>
              <Link to="./Products">Go back</Link>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
