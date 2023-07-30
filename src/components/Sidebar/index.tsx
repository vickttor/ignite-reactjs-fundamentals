import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./style.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1543258103-a62bdc069871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/vickttorugo.png" />

        <strong>Victor Silva</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} weight="duotone" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
