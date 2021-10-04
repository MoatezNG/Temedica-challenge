import { NextComponentType } from "next";
import React from "react";
import logo from "public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: NextComponentType = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div className={styles.header}>
      <Image src={logo} width={80} height={80} layout="fixed" alt="test" />
      <div className={styles.externalLink}>
        <Link href="/">extental link</Link>
      </div>
    </div>
  </div>
);

export default Header;
