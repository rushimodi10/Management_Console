import Searchbar from "@/app/components/dashboard/searchbar/searchbar"
import styles from "@/app/components/dashboard/users/users.module.css"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/components/dashboard/pagination/pagination"
import { fetchUsers } from "@/app/lib/data"
import { deleteUser } from "@/app/lib/actions"

const UsersPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, users} = await fetchUsers(q, page);
  

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Searchbar placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    alt=""
                    src={user.img || "/noavatar.png"}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}
export default UsersPage