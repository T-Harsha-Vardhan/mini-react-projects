import { useEffect, useState } from "react";
import "./load-more.css";

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(0);

  const fetchProducts = async (currentSkip) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${currentSkip}`
      );
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts((prev) => [...prev, ...data.products]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(skip);
  }, [skip]);

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + 10);
  };

  return (
    <div id="load-more">
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
          </div>
        ))}
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p className="btn" onClick={!loading ? handleLoadMore : null}>
        {loading ? "Loading..." : "Load More"}
      </p>
    </div>
  );
};

export default LoadMore;
