import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // snapshot real-time
    const unsubscribe = onSnapshot(
      collection(db, "Products"),
      (querySnapshot) => {
        const prods = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          prods.push({
            id: doc.id,
            name: data.name,
            image: data.imageUrl,
            price: data.discountPrice
              ? `${data.discountPrice} EGP`
              : `${data.price} EGP`,
            discountPrice: data.discountPrice ? `${data.price} EGP` : null,
            category: data.category,
            details: data.description,
          });
        });
        setProducts(prods);
      },
      (error) => {
        console.error("Snapshot error:", error);
      }
    );

    return () => unsubscribe(); // clean up
  }, []);

  function toggleFavorite(id) {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue/20 to-darkBlue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-blue/10 to-darkBlue/10 rounded-full blur-2xl animate-float-1"></div>
        </div>

        <motion.h2
          className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-darkBlue text-center leading-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Products
        </motion.h2>

        <motion.p
          className="text-center mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          These products open a space to connect with God and journey with Him
        </motion.p>

        <div className="flex justify-center mt-4 sm:mt-6">
          <div className="w-20 sm:w-24 h-1 rounded-full bg-blue/40" />
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />

                <button
                  aria-label={
                    favorites[product.id] ? "Remove favorite" : "Add favorite"
                  }
                  aria-pressed={!!favorites[product.id]}
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 bg-white/95 p-2 rounded-full shadow hover:scale-105 transform transition border border-transparent hover:border-red-100"
                >
                  {favorites[product.id] ? (
                    <AiFillHeart className="h-6 w-6 text-orange" />
                  ) : (
                    <AiOutlineHeart className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                <div className="absolute left-4 bottom-4 bg-blue text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-darkBlue">
                  {product.name}
                </h3>
                <p className="text-darkBlue/70 mt-3 text-base leading-relaxed italic">
                  {product.details}
                </p>

                <div className="flex items-center justify-between mt-6 gap-4">
                  <div className="text-lg font-bold text-orange">
                    {product.discountPrice ? (
                      <>
                        <span className="line-through mr-2 text-gray-400">
                          {product.discountPrice}
                        </span>
                        {product.price}
                      </>
                    ) : (
                      product.price
                    )}
                  </div>

                  <button className="ml-auto bg-gradient-to-r from-orange to-orange/90 text-white py-2 px-4 rounded-lg font-semibold hover:from-orange/95 hover:to-orange/80 transition-colors shadow">
                    Add To Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
