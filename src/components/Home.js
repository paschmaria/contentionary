import React, { Component } from "react";
import Layout from "./Layout/Layout";
import Banner from "../components/Home/Banner";
import RecentExams from "../components/Home/RecentExams";
import ForSchools from "../components/Home/ForSchools";
import CbtSection from "../components/Home/CbtSection";
import Feature from "../components/Home/Feature";
import Industries from "../components/Home/Industries";
import Partner from "../components/Home/Partner";
import Download from "../components/Home/Download";

export default class Home extends Component {
  render() {
    return (
      <>
        <Layout>
          <Banner />
          <RecentExams />
          <ForSchools />
          <CbtSection />
          <Industries />
          <Feature />
          <Partner />
          <Download />
        </Layout>
      </>
    );
  }
}
