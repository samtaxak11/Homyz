import React from 'react'
import { useEffect, useState } from "react";
import { connectWallet, getAccount } from '../../utils/wallet';
import './Header.css'

const Header = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      const activeAccount = await getAccount();
      setAccount(activeAccount);
    })();
  }, []);

  const onConnectWallet = async() => {
    await connectWallet();
    const activeAccount = await getAccount();
    setAccount(activeAccount);
  };

  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <img src="./logo.png" alt="logo" width={100} />

            <div className="fleCenter h-menu">
                <button onClick={onConnectWallet} className="button">
                  {account !== "" ? account : "Connect Wallet"}
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header