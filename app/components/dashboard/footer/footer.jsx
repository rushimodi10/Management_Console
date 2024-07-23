import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.log}>Rushi Modi</div>
      <div className={styles.text}>&copy; All Rights Reserved</div>
    </div>
  );
}
export default Footer