import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a
            href="https://www.youtube.com/@VitorFerreira-lk2wm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className={styles.youtube} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/vfeereira/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.facebook} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/vfeereira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.instagram} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vitor-ferreira-6b6980235/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.linkedin} />
          </a>
        </li>
      </ul>

      <p className={styles.copy_rigth}>
        <span>Costs</span> &copy; 2026
      </p>
    </footer>
  );
}

export default Footer;
