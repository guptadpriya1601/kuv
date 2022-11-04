import React from "react";
import styles from "../../styles/CareersList.module.scss";
import Link from "next/link";

const CareersList = () => {
  const careers = [
    {
      title: "Arts",
      body: "Curated guide and resources to becoming a arts student.",
      comingSoon: false,
      inProgress: false,
      link: "/careers/arts",
    },
    {
      title: "Science",
      body: "Curated guide and resources to becoming a science student.",
      comingSoon: false,
      inProgress: false,
      link: "/careers/backend",
    },
    {
      title: "Commerce",
      body: "Curated guide and resources to becoming a technical writer.",
      comingSoon: false,
      inProgress: false,
      link: "/careers/commerce",
    },
    {
      title: "Diploma",
      body: "Curated guide and resources to becoming a diploma student.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "Engineering",
      body: "Curated guide and resources to becoming a engineering student.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "Medical",
      body: "Curated guide and resources to becoming a medical studentr.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "Architecture",
      body: "Curated guide and resources to becoming a architecture student.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "Animation & Graphics",
      body: "Curated guide and resources to becoming a animation and graphics student.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "B.Com",
      body: "Curated guide and resources to becoming a b.com student.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "BMS",
      body: "Curated guide and resources to becoming a frontend developer.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "Bachelors of Arts",
      body: "Curated guide and resources to becoming a bachelors of arts student.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
    {
      title: "Bachelor of Hotel Management",
      body: "Curated guide and resources to becoming a bachelors of hotel management student.",
      comingSoon: true,
      inProgress: false,
      link: "#",
    },
  ];
  return (
    <section className={styles.careers}>
      <h2 className="heading">Career After 10 & 12</h2>

      <div className={styles.careers__cards}>
        {careers.map((career) => (
          <div
            key={career.title}
            className={`${styles.careers__cardLink} ${career.comingSoon} ? ${styles.disabled} : ""`}>
            <Link href={career.link}>
              <a>
                {career.comingSoon && (
                  <p className={styles.comingSoon}>
                    <span>{`${
                      career.inProgress ? "In Progress" : "Coming Soon"
                    }`}</span>
                  </p>
                )}
                <div className={styles.careers__card}>
                  <h3>{career.title}</h3>
                  <p>{career.body}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareersList;
