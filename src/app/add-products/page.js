"use client";

import { imageUpload } from "@/utils/imageUpload";
import useAxiosPublic from "@/utils/useAxiosPublic";
import Swal from "sweetalert2";
// import { useState } from "react";

const AddProducts = () => {

    const axiosPublic = useAxiosPublic();

  const handleAddProducts = async(e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const newI = await imageUpload(form.thumbnail_image.files[0]);
    const thumbnail_image = newI.data.display_url
    const imageI = await imageUpload(form.image.files[0]);
    const image = imageI.data.display_url
    const product = {
      product_name,
      category,
      price,
      quantity,
      description,
      thumbnail_image,
      image,
    };
    // console.log(product);
    axiosPublic.post('/products', product)
    .then(res => {
        if(res.data.insertedId){
            Swal.fire("Product Added Successfully!");
            form.reset();
            console.log('success');
        }
    })
  };

  return (
    <div className="lg:py-5 bg-gray-200">
      <div className=" mx-auto text-white">
        <form
          onSubmit={handleAddProducts}
          className="lg:w-3/4 mx-auto bg-gradient-to-r from-purple-700 to-blue-500 py-5 lg:p-5 lg:rounded-lg"
        >
          <h1 className="py-5 text-4xl font-bold text-center">Add Products</h1>
          <div className="px-5 md:flex justify-center items-center gap-5">
            <div className="mb-4 w-full md:w-1/2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="product_name"
              >
                Product Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product_name"
                type="text"
                placeholder="Product Name"
                name="product_name"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-1/2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                type="text"
                placeholder="Category"
                name="category"
                required
              />
            </div>
          </div>
          <div className="px-5 md:flex justify-center items-center gap-5">
            <div className="mb-4 w-full md:w-1/2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="price"
              >
                Product Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="Product Price"
                name="price"
                required
              />
            </div>
            <div className="mb-4 w-full md:w-1/2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quantity"
                type="number"
                placeholder="Quantity"
                name="quantity"
                required
              />
            </div>
          </div>
          <div className="px-5 md:flex justify-center items-center gap-5">
            <div className="w-full md:w-1/2">
              <div className="mb-4 w-full ">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="thumbnail_image"
                >
                  Thumbnail Image
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="thumbnail_image"
                  type="file"
                  placeholder="Product Name"
                  name="thumbnail_image"
                  required
                />
              </div>
              <div className="mb-4 w-full ">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Product Image
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="image"
                  type="file"
                  name="image"
                  required
                />
              </div>
            </div>
            <div className="mb-4 w-full md:w-1/2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Enter description here"
                name="description"
                rows="6"
              ></textarea>
            </div>
          </div>
          {/* Add similar input fields for other data such as price, size, quantity, image, thumbnail_img, description */}
          <div className="mb-4 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
