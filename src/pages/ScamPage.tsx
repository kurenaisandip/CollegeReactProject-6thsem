import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


// Define Product interface
interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
}


const ScamPage = () => {
  const [items, setItems] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setTotalPrice(items * product.price);
    }
  }, [items, product]);

  // Increment items count
  const incrementItems = () => {
    setItems(prevItems => prevItems + 1);
  };

  // Decrement items count, with minimum of 0
  const decrementItems = () => {
    if (items > 0) {
      setItems(prevItems => prevItems - 1);
    }
  };

  // Fetch product data (dummy data for now)
  useEffect(() => {
    // In a real application, fetch product data using an API call
    const fakeProductData = {
      name: "Example Product",
      description: "Example Description",
      image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/sakura-vs-truck-kun.jpg",
      price: 9.99,
    };
    setProduct(fakeProductData);
  }, []);

 const buy = () => {
    navigate('/scammed');
 }
  return (
    <div className="border-4 border-red-500 p-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full text-center mb-4">
          <h1 className="text-3xl font-bold">Product</h1>
        </div>
        {product && (
          <>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <h2 className="text-center">Name</h2>
              <input type="text" className="w-full border-2 border-gray-500" value={product.name} readOnly />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <h2 className="text-center">Description</h2>
              <input type="text" className="w-full border-2 border-gray-500" value={product.description} readOnly />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <h2 className="text-center">Price</h2>
              <input type="text" className="w-full border-2 border-gray-500" value={product.price} readOnly />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center flex-col">
              <h2 className="text-center">No. of Items</h2>
              <div className="flex items-center">
                <button className="px-3 py-1 border-2 border-gray-500" onClick={decrementItems}>-</button>
                <span className="mx-3">{items}</span>
                <button className="px-3 py-1 border-2 border-gray-500" onClick={incrementItems}>+</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center flex-col">
              <h2 className="text-center">Total Price</h2>
              <input type="text" className="w-full border-2 border-gray-500" value={totalPrice.toFixed(2)} readOnly />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center flex-col">
              <h2 className="text-center">Image</h2>
              <img src={product.image} alt="Product" className="w-64 h-64 object-contain" />
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center">
  <Button onClick={buy} >Buy</Button>
</div>
      <div className="mt-8 flex flex-col items-center text-center text-red-600">
        <p className="text-lg font-bold mb-4">Beware of scams!</p>
        <p>This is not a scam.</p>
      </div>
   
    </div>
  );
};

export default ScamPage;
