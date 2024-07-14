import React, { useState } from "react";
import SalesCard from "./SalesCard";
import { getProjectId, projectList } from "./project-list";
import IDOParticipationCard from "./IDOParticipationCard";
import StellarJarBanner from "../../assets/StellarJarBanner2.svg";

export default function ProjectDetails({ projectId, userKey }) {
  const selectedProject = projectList.find(
    (project) => getProjectId(project?.name) === projectId
  );

  return (
    <div className="  text-gray-200 text-start">
      <div className=" mx-auto p-6  shadow-md rounded-lg mt-10">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Project Type:</h2>
          <p className="text-lg">Web3 Noncustodial Wallet</p>
        </section>
        <img className="w-full p-0" src={StellarJarBanner} alt="" />

        <section className="my-6 ">
          <h2 className="text-2xl font-semibold mb-2">Project Summary:</h2>
          <p className="text-lg">
            StellarJarBanner is a cutting-edge noncustodial wallet designed for
            users of Stellar Lumens (XLM) and Soroban tokens. The wallet not
            only ensures secure and independent management of digital assets but
            also provides seamless access to decentralized applications (dApps)
            directly from the wallet interface. Additionally, StellarJarBanner
            offers the convenience of creating wallet accounts using social
            media profiles, making it easier for users to onboard and manage
            their assets.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Noncustodial Wallet:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  <strong>Full Control:</strong> Users have complete control
                  over their private keys and assets.
                </li>
                <li>
                  <strong>Security:</strong> Enhanced security measures to
                  ensure the safety of digital assets without relying on
                  third-party custodians.
                </li>
              </ul>
            </li>
            <li>
              <strong>Support for Stellar Lumens and Soroban Tokens:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  <strong>Multi-Asset Support:</strong> Seamlessly manage both
                  Stellar Lumens (XLM) and Soroban tokens.
                </li>
                <li>
                  <strong>Easy Transactions:</strong> Smoothly send, receive,
                  and store XLM and Soroban tokens within a single wallet.
                </li>
              </ul>
            </li>
            <li>
              <strong>Integrated Access to dApps:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  <strong>dApp Browser:</strong> Directly access and interact
                  with decentralized applications from within the wallet.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> An intuitive and
                  user-friendly interface to explore and use various dApps.
                </li>
              </ul>
            </li>
            <li>
              <strong>Social Media Integration for Account Creation:</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  <strong>Social Media Login:</strong> Users can create and
                  access their wallet accounts using their social media profiles
                  (e.g., Facebook, Google, Twitter).
                </li>
                <li>
                  <strong>Ease of Use:</strong> Simplifies the onboarding
                  process, making it accessible for non-technical users.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Benefits:</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Enhanced Security:</strong> By being noncustodial,
              StellarJarBanner ensures users retain full control over their
              private keys, reducing the risk of hacks and unauthorized access.
            </li>
            <li>
              <strong>Convenience:</strong> The ability to create accounts using
              social media profiles and access dApps directly from the wallet
              enhances user convenience and accessibility.
            </li>
            <li>
              <strong>Broad Utility:</strong> Support for both Stellar Lumens
              and Soroban tokens allows users to manage a diverse portfolio of
              assets within a single wallet.
            </li>
            <li>
              <strong>Community Engagement:</strong> Integration with dApps
              fosters a vibrant ecosystem where users can engage with various
              decentralized services and applications.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Target Audience:</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Stellar Lumens (XLM) Users:</strong> Individuals and
              entities holding and transacting with Stellar Lumens.
            </li>
            <li>
              <strong>Soroban Token Holders:</strong> Users interested in
              managing Soroban tokens alongside their Stellar assets.
            </li>
            <li>
              <strong>Web3 Enthusiasts:</strong> Users looking for a secure and
              convenient noncustodial wallet with integrated dApp access.
            </li>
            <li>
              <strong>New Users:</strong> Individuals new to cryptocurrency who
              can benefit from the ease of social media account integration.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Future Developments:</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Enhanced dApp Ecosystem:</strong> Continuous integration
              of new and popular dApps to expand user engagement.
            </li>
            <li>
              <strong>Advanced Security Features:</strong> Implementation of
              cutting-edge security protocols and measures to further safeguard
              user assets.
            </li>
            <li>
              <strong>Cross-Chain Compatibility:</strong> Exploring support for
              additional blockchain networks and tokens to provide a more
              versatile wallet experience.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Conclusion:</h2>
          <p className="text-lg">
            StellarJarBanner aims to revolutionize the way users manage their
            Stellar Lumens and Soroban tokens by providing a secure,
            user-friendly, and feature-rich noncustodial wallet. With integrated
            dApp access and social media account creation, StellarJarBanner
            stands out as a comprehensive solution for both seasoned
            cryptocurrency users and newcomers alike.
          </p>
        </section>
      </div>
    </div>
  );
}
