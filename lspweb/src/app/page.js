"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { Button, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles["box-banner"]}>
        <div className="container">
          <div className="row">
            <div className="col col-lg-6">
              <div className={styles["banner-img"]}>
                <img src="https://www.crayon.co/hs-fs/hubfs/CRAY_Homepage_13.png?width=366&height=550&name=CRAY_Homepage_13.png" />
              </div>
            </div>
            <div className="col col-lg-6">
              <div className={styles["desc-banner"]}>
                <Typography
                  sx={{
                    fontSize: "52px",
                    fontWeight: 700,
                    paddingBottom: "10px",
                    color: "#040924",
                  }}
                >
                  Win More Business.
                  <br /> Keep More Customers.
                </Typography>
                <Typography sx={{ fontSize: "24px", color: "#040924" }}>
                  Crayon is the #1 competitive intelligence platform that helps
                  you track your competitors and enable your revenue team in
                  real-time.
                </Typography>
                <Button
                  sx={{
                    background: "#2dc3d0",
                    borderRadius: "8px",
                    padding: "17px 30px",
                    color: "#040924",
                    fontWeight: 700,
                    marginTop: "20px",
                    minWidth: "250px",
                    // textTransform: "lowercase !important",
                  }}
                  variant="contained"
                  color="success"
                >
                  See in action
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["inform-section"]}>
        <div className="container">
          <div className="row">
            <div className="col col-lg-6">
              <div className={styles["informsection-img"]}>
                <img src="https://www.crayon.co/hs-fs/hubfs/PMA%20Pulse%202023_HomepageImage.png?width=542&height=450&name=PMA%20Pulse%202023_HomepageImage.png" />
              </div>
            </div>
            <div className="col col-lg-6">
              <div className={styles["desc-informsection"]}>
                <Typography
                  sx={{
                    fontSize: "48px",
                    lineHeight: "1.15",
                    fontWeight: 700,
                  }}
                >
                  We know what it takes to beat the competition
                </Typography>
                <Typography sx={{ fontSize: "24px", paddingTop: "15px" }}>
                  See for yourself why Crayon is a 3x PMA Pulse leader and 11x
                  G2 grid leader. Take a demo to see how our customers use
                  Crayon to beat their competitors.
                </Typography>
                <Button
                  sx={{
                    background: "#2dc3d0",
                    borderRadius: "8px",
                    padding: "17px 30px",
                    color: "#040924",
                    fontWeight: 700,
                    marginTop: "20px",
                    minWidth: "250px",
                    // textTransform: "lowercase !important",
                  }}
                  variant="contained"
                  color="success"
                >
                  Schedule a demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["benefit-box"]}>
        <Typography
          sx={{
            fontWeight: 700,
            color: "white",
            fontSize: "36px",
            textAlign: "center",
            paddingTop: "35px",
            paddingBottom: "35px",
          }}
        >
          Supercharge your competitive intelligence discipline
        </Typography>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={styles["benefit-card"]}>
                <div className={styles["benefit-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/capture-icon.png?width=130&height=130&name=capture-icon.png" />
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#040924",
                    fontWeight: 600,
                    fontSize: "24px",
                    paddingTop: "10px",
                  }}
                >
                  UNPARALLELED INTELLIGENCE
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6F7375",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Outsmart the competition and drive revenue growth with a
                  platform that automatically gathers, organizes, and amplifies
                  crucial data from millions of sources.
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "25px",
                    color: "#2dc3d0",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all .15s ease",
                    fontWeight: 500,
                  }}
                >
                  Learn More
                </Typography>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles["benefit-card"]}>
                <div className={styles["benefit-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/capture-icon.png?width=130&height=130&name=capture-icon.png" />
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#040924",
                    fontWeight: 600,
                    fontSize: "24px",
                    paddingTop: "10px",
                  }}
                >
                  UNPARALLELED INTELLIGENCE
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6F7375",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Outsmart the competition and drive revenue growth with a
                  platform that automatically gathers, organizes, and amplifies
                  crucial data from millions of sources.
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "25px",
                    color: "#2dc3d0",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all .15s ease",
                    fontWeight: 500,
                  }}
                >
                  Learn More
                </Typography>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles["benefit-card"]}>
                <div className={styles["benefit-img"]}>
                  <img src="https://www.crayon.co/hs-fs/hubfs/capture-icon.png?width=130&height=130&name=capture-icon.png" />
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#040924",
                    fontWeight: 600,
                    fontSize: "24px",
                    paddingTop: "10px",
                  }}
                >
                  UNPARALLELED INTELLIGENCE
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#6F7375",
                    fontSize: "20px",
                    paddingTop: "15px",
                  }}
                >
                  Outsmart the competition and drive revenue growth with a
                  platform that automatically gathers, organizes, and amplifies
                  crucial data from millions of sources.
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    paddingTop: "25px",
                    color: "#2dc3d0",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all .15s ease",
                    fontWeight: 500,
                  }}
                >
                  Learn More
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
