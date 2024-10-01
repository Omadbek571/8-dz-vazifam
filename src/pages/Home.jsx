import React, { useEffect, useState } from 'react'

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://auth-rg69.onrender.com/api/products/all')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                setProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">HOME PAGES</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 && products.map((value, index) => (
                    <div key={index} className="border rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img src="https://www.adsimple.at/wp-content/uploads/2019/03/Bildportale.jpg" alt="Img" />
                        <h3 className="text-xl font-bold mb-2">ID: {value.name}</h3>
                        <h3 className="text-xl font-bold mb-2">Price: {value.price}</h3>

                        <p className="text-green-400">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
