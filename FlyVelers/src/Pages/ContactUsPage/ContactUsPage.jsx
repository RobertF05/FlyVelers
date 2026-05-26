import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import Login from "../../components/login.jsx";

import fondo from "../../assets/sinfondopng.png";
import AlpesSuizo from "../../assets/alpes suizos.png";
import traveller from "../../assets/Traveller.png";
import divider from "../../assets/bottom-shape.webp.png";
import pareja from "../../assets/pareja-Flyvelers.png";
import pareja2 from "../../assets/pareja2.png";
import asiatica from "../../assets/asiatica.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./ContactUsPage.css";

const ContactUsPage = () => {
  /* =========================
     LOGIN STATES
  ========================= */
  const [showLogin, setShowLogin] = useState(false);
  const [pendingMessage, setPendingMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /* =========================
     FORM STATES
  ========================= */
  const [activeForm, setActiveForm] = useState("request");

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "Basic",
    startDate: "",
    endDate: "",
    question: "",
  });

  const phoneNumber = "50576129611";

  /* =========================
     HANDLE INPUTS
  ========================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================
     SEND WHATSAPP
  ========================= */
  const sendWhatsApp = (e) => {
    e.preventDefault();

    let message = "";

    if (activeForm === "request") {
      message = `
NUEVA SOLICITUD DE VIAJE

Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}

Plan: ${formData.plan}

Fecha Inicio:
${formData.startDate || "No especificada"}

Fecha Final:
${formData.endDate || "No especificada"}
      `;
    } else {
      message = `
NUEVA PREGUNTA

Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}

Pregunta:
${formData.question}
      `;
    }

    /* guardar mensaje temporal */
    setPendingMessage(message);

    /* si ya inició sesión */
    if (isAuthenticated) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");

      return;
    }

    /* mostrar login */
    setShowLogin(true);
  };

  const handleSuccessfulLogin = () => {
    setIsAuthenticated(true);

    setShowLogin(false);

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      pendingMessage,
    )}`;

    window.open(url, "_blank");

    /* limpiar form */
    setFormData({
      name: "",
      phone: "",
      email: "",
      plan: "Basic",
      startDate: "",
      endDate: "",
      question: "",
    });

    setStartDate(null);
    setEndDate(null);
  };

  /* =========================
     CARRUSEL
  ========================= */
  const images = [traveller, pareja, pareja2, asiatica];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <main>
        {/* =========================
            HERO
        ========================= */}
        <section
          className="Encabezado"
          style={{ backgroundImage: `url(${AlpesSuizo})` }}
        >
          <Navbar />

          <div className="titles">
            <h2 className="titulo">Find your Way,</h2>

            <h1 className="subtitulo">Love Your Stay</h1>
          </div>

          <img className="divider" src={divider} alt="" aria-hidden="true" />
        </section>

        {/* =========================
            FORM SECTION
        ========================= */}
        <section className="Formulario">
          {/* =========================
              FORM
          ========================= */}
          <div className="apartado formulario">
            {/* TOGGLE BUTTONS */}
            <div className="form-toggle">
              <button
                type="button"
                className={`toggle-btn ${
                  activeForm === "request" ? "active" : ""
                }`}
                onClick={() => setActiveForm("request")}
              >
                Request Information
              </button>

              <button
                type="button"
                className={`toggle-btn ${
                  activeForm === "questions" ? "active" : ""
                }`}
                onClick={() => setActiveForm("questions")}
              >
                Questions?
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={sendWhatsApp}>
              <h1>
                {activeForm === "request"
                  ? "Request Information"
                  : "Ask Us Anything"}
              </h1>

              {/* COMMON INPUTS */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              {/* REQUEST FORM */}
              {activeForm === "request" && (
                <>
                  <div className="selectBox">
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                    >
                      <option value="Basic">Basic</option>

                      <option value="Standard">Standard</option>

                      <option value="Premium">Premium</option>
                    </select>
                  </div>

                  {/* START DATE */}
                  <div className="dateBox">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => {
                        setStartDate(date);

                        setFormData({
                          ...formData,
                          startDate: date?.toLocaleDateString(),
                        });
                      }}
                      placeholderText="Start Date"
                      className="customDate"
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                    />
                  </div>

                  {/* END DATE */}
                  <div className="dateBox">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => {
                        setEndDate(date);

                        setFormData({
                          ...formData,
                          endDate: date?.toLocaleDateString(),
                        });
                      }}
                      placeholderText="End Date"
                      className="customDate"
                      dateFormat="dd/MM/yyyy"
                      minDate={startDate || new Date()}
                    />
                  </div>
                </>
              )}

              {/* QUESTIONS FORM */}
              {activeForm === "questions" && (
                <textarea
                  name="question"
                  placeholder="Your Question..."
                  rows="6"
                  required
                  value={formData.question}
                  onChange={handleChange}
                  className="question-textarea"
                />
              )}

              {/* SUBMIT */}
              <button type="submit">
                {activeForm === "request" ? "Send Request" : "Send Question"}
              </button>
            </form>
          </div>

          {/* =========================
              IMAGE SECTION
          ========================= */}
          <div className="viajero">
            <img className="fondo-traveller" src={fondo} alt="fondo" />

            <div className="carrusel-container">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Viajero ${index}`}
                  className={`
                    carrusel-image
                    ${index === currentIndex ? "active" : ""}
                    ${index === 0 ? "image-traveller" : ""}
                    ${index === 1 ? "image-pareja" : ""}
                    ${index === 2 ? "image-pareja2" : ""}
                    ${index === 3 ? "image-asiatica" : ""}
                  `}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* LOGIN MODAL */}
      {showLogin && (
        <Login
          onSuccess={handleSuccessfulLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
};

export default ContactUsPage;
