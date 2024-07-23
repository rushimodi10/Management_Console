import styles from "@/app/components/dashboard/users/addUserPage/addUserPage.module.css";
import { addUser } from "@/app/lib/actions";

const AddUserPage = () => {

  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="text" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="phone" name="phone" placeholder="Phone"/>
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          placeholder="Address"
          id="address"
          rows="16"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddUserPage;
