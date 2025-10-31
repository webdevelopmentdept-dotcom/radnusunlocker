import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "./assets/comingsoonimage.png"; // 🌌 background image
import rocketImage from "./assets/rocketimg2.png"; // 🚀 rocket image
import logo from "./assets/logo.png"; // 🪐 logo
import "./App.css";

function Radnuscomingsoon() {
  const targetDate = new Date("2025-12-01T00:00:00");

  const calculateTimeLeft = () => {
    const diff = targetDate - new Date();
    if (diff <= 0) return { over: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTimeLeft());
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // 🌟 Rotating messages
  const messages = [
    "We’re building something amazing for you!",
    "Hang tight! Exciting updates are on the way.",
    "A fresh digital experience is coming soon.",
    "Innovation in progress stay tuned!",
  ];
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessage((prev) => {
        const nextIndex = (messages.indexOf(prev) + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 3000);
    return () => clearInterval(msgInterval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div
      className="text-white vh-100 vw-100 position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {/* 🌐 Top Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark position-absolute w-100 px-4"
        style={{
          top: 0,
          left: 0,
          zIndex: 5,
        }}
      >
        <div className="container-fluid d-flex align-items-center">
          <a
            className="navbar-brand d-flex align-items-center fw-bold text-white ms-5"
            href="#"
            style={{ fontSize: "1.5rem" }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "150px", marginRight: "10px" }}
            />
          </a>
        </div>
      </nav>

      {/* 🌌 Main Section */}
      <div
        className="d-flex align-items-center position-relative"
        style={{ height: "100%", paddingTop: "60px" }}
      >
        <div className="container" style={{ zIndex: 2 }}>
          <div className="row">
            {/* 🟣 Left Side */}
            <div className="col-md-6 d-flex flex-column justify-content-center ps-md-5 ps-lg-5">
              {/* Dynamic rotating message */}
              <h5 className="" style={{ fontSize: "2.2rem" }}>
                Radnus Unlocker
              </h5>
              <p className="fs-4 mb-3 fade-text">{message}</p>

              <h2 className="fw-bold display-5 mb-4">
                We’re <span className="text-warning">Launching</span> Soon
              </h2>

              {!time.over ? (
                <div className="d-flex flex-wrap gap-4 fs-3 fw-semibold mb-4">
                  <div>
                    <div>{time.days}</div>
                    <div className="fs-5 fw-normal">Days</div>
                  </div>
                  <div>
                    <div>{time.hours}</div>
                    <div className="fs-5 fw-normal">Hours</div>
                  </div>
                  <div>
                    <div>{time.minutes}</div>
                    <div className="fs-5 fw-normal">Minutes</div>
                  </div>
                  <div>
                    <div>{time.seconds}</div>
                    <div className="fs-5 fw-normal">Seconds</div>
                  </div>
                </div>
              ) : (
                <h3 className="text-success display-6">We’re Live Now!</h3>
              )}

              {/* 📩 Email Notification Section */}
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column flex-sm-row gap-2 mt-4"
                >
                  <input
                    type="email"
                    className="form-control form-control-sm w-auto"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ maxWidth: "300px", fontSize: "0.9rem" }}
                  />

                  <button
                    type="submit"
                    className="btn btn-outline-light btn-sm px-3 py-2 fs-6"
                  >
                    Notify Me
                  </button>
                </form>
              ) : (
                <div
                  className="mt-4 alert alert-success p-3 w-auto fs-6 shadow"
                  role="alert"
                >
                  Thank you! We’ll notify you once the website goes live.
                </div>
              )}

              <p className="mt-3 text-light small">
                Enter your email to get a launch notification from
                RadnusUnlocker.
              </p>
            </div>

            {/* 🚀 Right Side */}
            <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
              <img
                src={rocketImage}
                alt="Rocket Launch"
                className="img-fluid floating-rocket"
                style={{
                  width: "60%",
                  maxWidth: "300px",
                  animation: "float 3s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radnuscomingsoon;
