import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { isConnected, getPublicKey, getNetwork } from "@stellar/freighter-api";

import "./App.css";
import Hero from "./pages/home/Hero";
import Header from "./pages/common/Header";
import HomePage from "./pages/home/HomePage";
import StarterFlow from "./pages/home/StarterFlow";
import StakeDashboard from "./pages/participate/StakeDashboard";
import Projects from "./pages/projects/Projects";
import Footer from "./pages/common/Footer";
import Project from "./pages/projects/Project";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [userkey, setUserKey] = useState("");
  const [network, setNetwork] = useState("");

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    async function fetchConnectedUser() {
      const connected = await isConnected();
      const publicKey = await getPublicKey();
      const nt = await getNetwork();
      setUserKey(() => publicKey);
      setNetwork(() => nt);
      setIsWalletInstalled(() => connected);
    }
    fetchConnectedUser();
  }, [userkey, network, isConnected, connecting]);

  return (
    <div className="">
      <Router>
        <Header
          setNetwork={setNetwork}
          setUserKey={setUserKey}
          userKey={userkey}
          isWalletInstalled={isWalletInstalled}
          setConnecting={setConnecting}
          connecting={connecting}
        />
        <ScrollToTop>
          {" "}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={<StakeDashboard userKey={userkey} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/:projectId"
              element={<Project userKey={userkey} />}
            />
          </Routes>
        </ScrollToTop>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
