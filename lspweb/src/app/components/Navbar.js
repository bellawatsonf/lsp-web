import style from "./navbar.module.css";
export default function Navbar() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5">
            <img src="https://www.crayon.co/hubfs/Logo.svg" />
          </div>
          <div className="col">
            <ul className={`${style.menuList}`}>
              <li className={style["nav-item"]}>Home</li>
              <li className={style["nav-item"]}>Sertifikasi</li>
              <li className={style["nav-item"]}>Asesor</li>
              <li className={style["nav-item"]}>TUK</li>
              <li className={style["nav-item"]}>Tentang</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
