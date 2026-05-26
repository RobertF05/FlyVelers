import React, { useState } from "react";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import fondo from "../../assets/sinfondopng.png";
import AlpesSuizo from "../../assets/alpes suizos.png";
import traveller from "../../assets/Traveller.png";
import divider from "../../assets/bottom-shape.webp.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const [activeForm, setActiveForm] = useState("request"); // "request" o "questions"
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "Basic",
    startDate: "",
    endDate: "",
    question: "", // Nuevo campo
  });

  const phoneNumber = "50576129611";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
 Fecha Inicio: ${formData.startDate || "No especificada"}
 Fecha Final: ${formData.endDate || "No especificada"}
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

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    
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

  return (
    <div>
      <main>
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

        <section className="Formulario">
          <div className="apartado formulario">
            {/* Botones de cambio */}
            <div className="form-toggle">
              <button
                type="button"
                className={`toggle-btn ${activeForm === "request" ? "active" : ""}`}
                onClick={() => setActiveForm("request")}
              >
                Request Information
              </button>
              <button
                type="button"
                className={`toggle-btn ${activeForm === "questions" ? "active" : ""}`}
                onClick={() => setActiveForm("questions")}
              >
                Questions?
              </button>
            </div>

            <form onSubmit={sendWhatsApp}>
              <h1>
                {activeForm === "request"
                  ? "Request Information"
                  : "Ask Us Anything"}
              </h1>

              {/* Campos comunes */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />

              {/* Formulario Request Information */}
              {activeForm === "request" && (
                <>
                  <div className="selectBox">
                    <select name="plan" onChange={handleChange}>
                      <option value="Basic">Basic</option>
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </div>

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

              {/* Formulario Questions */}
              {activeForm === "questions" && (
                <textarea
                  name="question"
                  placeholder="Your Question..."
                  rows="6"
                  required
                  onChange={handleChange}
                  className="question-textarea"
                />
              )}

              <button type="submit">
                {activeForm === "request" ? "Send Request" : "Send Question"}
              </button>
            </form>
          </div>

          <div className="viajero">
            <img className="fondo-traveller" src={fondo} alt="fondo" />
            <img
              className="persona-traveller"
              src={traveller}
              alt="Traveller"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
