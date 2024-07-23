import styles from "@/app/components/dashboard/products/singleProductPage/singleProductPage.module.css";
import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Image from "next/image";

const SingleProductPage = async ({params}) => {

  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="number" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <input type="text" name="size" placeholder={product.size} />
          <label>Category</label>
          <select name="category" id="category">
            <option
              value="electronics"
            >
              Electronics
            </option>
            <option value="devices">
              Devices
            </option>
            <option value="appliances">
              Appliances
            </option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            placeholder={product.description}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
export default SingleProductPage