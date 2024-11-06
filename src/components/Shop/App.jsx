import React from "react";
import ProductCard from "./ProductPage";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
function App() {
  const products = [
    {
      id: 1,
      name: "Lithium-ion Battery",
      description:
        "Reliable and long-lasting battery for various electric applications.",
      price: "$299.99",
      image: p1,
    },
    {
      id: 2,
      name: "Nickel-metal Hydride Battery",
      description:
        "High-energy-density rechargeable battery for hybrid electric vehicles.",
      price: "$199.99",
      image: p2,
    },
    {
      id: 3,
      name: "Lead-acid Battery",
      description: "Traditional battery technology for electric vehicles.",
      price: "$149.99",
      image: p3,
    },
    {
      id: 4,
      name: "Tesla Model S Charger",
      description: "High-speed charger designed for Tesla Model S.",
      price: "$499.99",
      image: p4,
    },

    // Add more products here
  ];

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
