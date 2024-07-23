import styles from "@/app/components/dashboard/products/addProductPage/addProductPage.module.css";
import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" name="title" placeholder="Title" required/>
        <select name="category" id="category">
          <option value="general">Choose a Category</option>
          <option value="electronics">Electronics</option>
          <option value="devices">Devices</option>
          <option value="appliances">Appliances</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea name="description" placeholder="Description" id="description" rows="16"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default AddProductPage