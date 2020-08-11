import React from "react";
import Layout from "./Layout/Layout";
import Banner from "../components/MarketPlace/Banner";
import RatedCenter from "../components/MarketPlace/RatedCenter";
import Download from "../components/Home/Download";

export default function MarketPlace() {
  return (
    <div>
      <Layout>
        <Banner />
        <RatedCenter />
        <Download />
      </Layout>
    </div>
  );
}
