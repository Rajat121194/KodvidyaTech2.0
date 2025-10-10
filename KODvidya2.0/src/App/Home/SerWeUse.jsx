import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

// Web App Development
import node from "../../assets/pictures/node.jpg";
import react from "../../assets/pictures/react.jpg";
import next from "../../assets/pictures/next.png";
import php from "../../assets/pictures/php.png";
import laravel from "../../assets/pictures/laravel.png";
import aspnet from "../../assets/pictures/asp.png";
import csharp from "../../assets/pictures/Chs.png";
import angular from "../../assets/pictures/angular.png";
import vue from "../../assets/pictures/vue.png";
import html from "../../assets/pictures/html.png";
import css from "../../assets/pictures/css.jpg";
import js from "../../assets/pictures/js.png";

// Digital Marketing
import seo from "../../assets/pictures/seo.png";
import contentMarketing from "../../assets/pictures/content.png";
import emailMarketing from "../../assets/pictures/email.png";
import socialMediaMarketing from "../../assets/pictures/socm.png";
import paidMarketing from "../../assets/pictures/paid.png";
import affiliateMarketing from "../../assets/pictures/aff.png";
import audioVideoMarketing from "../../assets/pictures/av.png";

// Mobile Apps Development
import swift from "../../assets/pictures/swift.png";
import kotlin from "../../assets/pictures/kotlin.png";
import java from "../../assets/pictures/java.png";
import flutter from "../../assets/pictures/flutter.png";
import reactNative from "../../assets/pictures/rctnative.png";
import xamarin from "../../assets/pictures/xamarin.png";

// Database Development
import mssql from "../../assets/pictures/microsoft-sql.png";
import mysql from "../../assets/pictures/mysql.png";
import postgresql from "../../assets/pictures/postgresql.png";
import mongodb from "../../assets/pictures/mongo.png";
import amazonRds from "../../assets/pictures/amazonDB.png";
import azureSql from "../../assets/pictures/azure.png";
import cloudSql from "../../assets/pictures/cloudSQL.webp";
import sqlite from "../../assets/pictures/SQLite.png";
import kafka from "../../assets/pictures/kafka.png";

// DevOps & Cloud
import aws from "../../assets/pictures/awsa.jpg";
import msazure from "../../assets/pictures/mazure.jpg";
import gcp from "../../assets/pictures/googlecl.jpg";
import ibmc from "../../assets/pictures/ibmc.jpg";
import oci from "../../assets/pictures/oracle.jpg";
import digitalOcean from "../../assets/pictures/docean.jpg";
import firebase from "../../assets/pictures/firebase.jpg";
import Supabase from "../../assets/pictures/supabase.jpg";

const App = () => {
  const tabs = [
    "Web App Development",
    "Mobile Apps Development",
    "Internet Marketing",
    "Database Development",
    "DevOps & Cloud",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const scrollRef = useRef(null);
  const tweenRef = useRef(null);

  const services = {
    All: [
      { name: "Swift", icon: swift },
      { name: "Kotlin", icon: kotlin },
      { name: "Java", icon: java },
      { name: "Flutter", icon: flutter },
      { name: "React Native", icon: reactNative },
      { name: "Xamarin", icon: xamarin },
      { name: "Node.js", icon: node },
      { name: "React.js", icon: react },
      { name: "Next.js", icon: next },
      { name: "PHP", icon: php },
      { name: "Laravel", icon: laravel },
      { name: "Asp.net", icon: aspnet },
      { name: "C#", icon: csharp },
      { name: "Angular", icon: angular },
      { name: "Vue", icon: vue },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "Search Engine Optimization", icon: seo },
      { name: "Content Marketing", icon: contentMarketing },
      { name: "Email Marketing", icon: emailMarketing },
      { name: "Search Media Marketing", icon: socialMediaMarketing },
      { name: "Paid Marketing", icon: paidMarketing },
      { name: "Affiliate Marketing", icon: affiliateMarketing },
      { name: "Audio & Video Marketing", icon: audioVideoMarketing },
      { name: "Microsoft SQL", icon: mssql },
      { name: "MySQL / MariaDB", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "MongoDB", icon: mongodb },
      { name: "Amazon RDS", icon: amazonRds },
      { name: "Azure SQL Database", icon: azureSql },
      { name: "Cloud SQL", icon: cloudSql },
      { name: "SQLite", icon: sqlite },
      { name: "Kafka", icon: kafka },
      { name: "AWS (Amazon Web Services)", icon: aws },
      { name: "Microsoft Azure", icon: msazure },
      { name: "Google Cloud Platform (GCP)", icon: gcp },
      { name: "IBM Cloud", icon: ibmc },
      { name: "Oracle Cloud Infrastructure (OCI)", icon: oci },
      { name: "DigitalOcean", icon: digitalOcean },
      { name: "Firebase (Google)", icon: firebase },
      { name: "Supabase", icon: Supabase },
    ],
    "Mobile Apps Development": [
      { name: "Swift", icon: swift },
      { name: "Kotlin", icon: kotlin },
      { name: "Java", icon: java },
      { name: "Flutter", icon: flutter },
      { name: "React Native", icon: reactNative },
      { name: "Xamarin", icon: xamarin },
    ],
    "Web App Development": [
      { name: "Node.js", icon: node },
      { name: "React.js", icon: react },
      { name: "Next.js", icon: next },
      { name: "PHP", icon: php },
      { name: "Laravel", icon: laravel },
      { name: "Asp.net", icon: aspnet },
      { name: "C#", icon: csharp },
      { name: "Angular", icon: angular },
      { name: "Vue", icon: vue },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
    ],
    "Internet Marketing": [
      { name: "Search Engine Optimization", icon: seo },
      { name: "Content Marketing", icon: contentMarketing },
      { name: "Email Marketing", icon: emailMarketing },
      { name: "Search Media Marketing", icon: socialMediaMarketing },
      { name: "Paid Marketing", icon: paidMarketing },
      { name: "Affiliate Marketing", icon: affiliateMarketing },
      { name: "Audio & Video Marketing", icon: audioVideoMarketing },
    ],
    "Database Development": [
      { name: "Microsoft SQL", icon: mssql },
      { name: "MySQL / MariaDB", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "MongoDB", icon: mongodb },
      { name: "Amazon RDS", icon: amazonRds },
      { name: "Azure SQL Database", icon: azureSql },
      { name: "Cloud SQL", icon: cloudSql },
      { name: "SQLite", icon: sqlite },
      { name: "Kafka", icon: kafka },
    ],
    "DevOps & Cloud": [
      { name: "AWS (Amazon Web Services)", icon: aws },
      { name: "Microsoft Azure", icon: msazure },
      { name: "Google Cloud Platform (GCP)", icon: gcp },
      { name: "IBM Cloud", icon: ibmc },
      { name: "Oracle Cloud Infrastructure (OCI)", icon: oci },
      { name: "DigitalOcean", icon: digitalOcean },
      { name: "Firebase (Google)", icon: firebase },
      { name: "Supabase", icon: Supabase },
    ],
  };

  useEffect(() => {
    if (scrollRef.current) {
      // Kill previous tween if tab changes
      if (tweenRef.current) tweenRef.current.kill();

      // Reset position
      gsap.set(scrollRef.current, { x: 0 });

      // Animate infinitely
      tweenRef.current = gsap.to(scrollRef.current, {
        x: "-50%", // shift one duplicate set
        duration: 60,
        ease: "linear",
        repeat: -1,
      });
    }
  }, [activeTab]);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 0.3,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 1,
        duration: 1,
        ease: "power1.in",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          @keyframes vibrate {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-1px, 1px); }
            40% { transform: translate(-1px, -1px); }
            60% { transform: translate(1px, 1px); }
            80% { transform: translate(1px, -1px); }
          }
          .hover\\:vibrate:hover {
            animation: vibrate 0.5s linear;
          }
        `}
      </style>

      {/* Title */}
      <div className="text-center pt-10">
        <h2 className="text-6xl font-Bebas text-gold">Services We Use</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-6 gap-2 flex-wrap cursor-pointer">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded text-sm font-Sans cursor-pointer transition hover:vibrate ${
              activeTab === tab
                ? "bg-gold text-chitu border border-blue"
                : "border border-blue text-gold"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Services Carousel */}
      <div className="overflow-hidden mt-2 relative">
        <div
          ref={scrollRef}
          className="flex px-10"
          style={{ width: "max-content" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...services[activeTab], ...services[activeTab]].map(
            (service, i) => (
              <div
                key={i}
                className="relative h-70 w-100 rounded-lg overflow-hidden group flex-shrink-0"
              >
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center cursor-grabbing pb-4">
                  <span className="text-gold text-xl font-Bebas px-2 py-1 rounded shadow">
                    {service.name}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gold text-chitu p-10 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="md:w-2/3">
            <h3 className="text-6xl font-Bebas mb-1">
              Get Details about the Approach to your Project
            </h3>
            <p className="mb-1 text-xl font-Sans">
              Tired of discussing your project with multiple people without
              finding the right approach? One conversation with us will set you
              on the right track.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <Link to="/contact">
              <button className="border-chitu  border bg-blue hover:bg-chitu text-chitu hover:text-blue hover:font-bold px-6 py-3 rounded-lg shadow cursor-pointer transition">
                Request Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
