import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { AppBar } from "../components/AppBar";
import { BalanceDisplay } from "../components/BalanceDisplay";
import { MintToForm } from "../components/MintToForm";
import { CreateTokenAccountForm } from "../components/CreateTokenAccount";
import { CreateMintForm } from "../components/CreateMint";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Token Program</title>
        <meta name="description" content="Solana template" />
      </Head>
      
      <AppBar />

      <div className={styles.content}>
        <form className="bg-teal-900 p-12 rounded max-w-4xl shadow-md">
          <h2 className="text-lg mb-8">Action description</h2>
          <input className="leading6 bg-teal-700 py-2 pl-1 mb-6 rounded-md w-64 focus:ring-2 focus:ring-teal-500 focus:outline-none" type="text" placeholder="Label" />
          <button type="submit" className="px-4 py-2 font-bold rounded-md bg-blue-700 text-teal-100">Submit</button>
        </form>

        <BalanceDisplay />
      </div>

      <div></div>
    </div>
  );
};

export default Home;
