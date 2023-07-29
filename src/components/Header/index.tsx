import style from "./style.module.css";

import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Logotip Ignite" />
    </header>
  );
}
