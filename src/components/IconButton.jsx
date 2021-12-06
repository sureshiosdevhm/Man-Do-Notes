import styles from "./IconButton.module.css";
export default function IconButton({ icon, onClick }) {
  return (
    <button onClick={onClick}>
      <div className={styles.icon_button_card}>{icon}</div>
    </button>
  );
}
