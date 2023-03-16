import React, { useState, useContext } from 'react';
// component
import Product from "../components/Product"

import { ProductContext } from "../contexts/ProductContext"

const Home = () => {
  const [search, setSearch] = useState("")
  console.log(search, "")
  const { products } = useContext(ProductContext)
  console.log(products, "ooooooo")

  const fillteredProducts = products.filter((item) => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })

  // const searchItem = fillteredProducts.filter((item) => {
  //   if (search == "") {
  //     return item
  //   }
  //   else if (item.title.toLowerCase().includes(search.toLocaleLowerCase())) {
  //     return item
  //   }

  // })
  console.log("search item: ",)

  // console.log(fillteredProducts, "filter")

  return (
    <div>
      <section className='py-16'>
        {/* <div className='py-14 flex justify-center'>
          <input onChange={(e) => setSearch(e.target.value)} className='z-20 border' type="text" />
        </div> */}
        <div className='container mx-auto'>
          {/* grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-sm md:max-w-none md:mx-0'>
            {fillteredProducts.map((product) => {
              return (

                <Product product={product} key={product.id} />

              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
