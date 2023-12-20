import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"; // Importez les icônes React
import { useNavigate } from "react-router-dom";

const Authentification = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Se connecter");
  const [showEmailField, setShowEmailField] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (formData.username.trim() === "") {
      errors.username = "Le nom d'utilisateur est requis.";
    } else if (formData.username.length < 6) {
      errors.username =
        "Le nom d'utilisateur doit comporter au moins 6 caractères.";
    }

    if (formData.password.trim() === "") {
      errors.password = "Le mot de passe est requis.";
    } else if (formData.password.length < 8) {
      errors.password = "Le mot de passe doit comporter au moins 8 caractères.";
    }

    if (!showEmailField && formData.email.trim() === "") {
      errors.email = "L'adresse e-mail est requise.";
    } else if (!showEmailField && !isValidEmail(formData.email)) {
      errors.email = "L'adresse e-mail n'est pas valide.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      // Utilise navigate pour changer de page
      navigate("/menu");
      console.log("Formulaire soumis avec succès", formData);
    } else {
      console.log("Le formulaire contient des erreurs");
    }
  };

  const handleButtonClick = (login) => {
    setIsLogin(login);
    setShowEmailField(login);
    setButtonText(login ? "Se connecter" : "S'inscrire");
    setShowForm(!showForm);
  };

  const formVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, duration: 0.5 },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white relative">
      {!showForm && (
        <motion.div
          className="w-52 h-52 rounded-full bg-blue-400 absolute -top-24 -left-24"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backgroundVariants}
        />
      )}

      <div className="flex flex-col absolute bottom-0">
        <Link to={"/menu"}>
          <img
            src="src/assets/Logo.svg"
            alt=""
            className="w-80 mx-auto mb-14"
          />
        </Link>

        <motion.div
          className="bg-blue-500 w-screen p-8 rounded-t-3xl relative bottom-0"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={formVariants}
        >
          <h1 className="text-3xl font-bold pt-4">Bienvenue</h1>
          <p className="mt-8 text-sm text-justify text-zinc-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            ducimus, aut consequuntur exercitationem quisquam sit nam
            consectetur qui deserunt aliquid!
          </p>

          <div className="flex justify-between mt-10 mb-8">
            <button
              className={`shadow-md ${
                isLogin ? "bg-zinc-900" : "bg-zinc-300 text-black"
              } w-44 py-2 rounded-2xl`}
              onClick={() => handleButtonClick(true)}
            >
              Connexion
            </button>
            <button
              className={`shadow-md ${
                !isLogin ? "bg-zinc-900" : "bg-zinc-300 text-black"
              } w-44 py-2 rounded-2xl`}
              onClick={() => handleButtonClick(false)}
            >
              Inscription
            </button>
          </div>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
              >
                <form onSubmit={handleSubmit}>
                  {formErrors.email && (
                    <span className="text-red-500 mt-2 block bg-white p-1 rounded">
                      {formErrors.email}
                    </span>
                  )}
                  {!showEmailField && (
                    <div className="flex items-center">
                      <FaEnvelope className="text-zinc-800 mr-2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Adresse e-mail"
                        className="w-full text-black p-2 my-2 border rounded focus:outline-none focus:ring-2 focus:ring-zinc-600"
                        required
                      />
                    </div>
                  )}
                  {formErrors.username && (
                    <span className="text-red-500 mt-2 block bg-white p-1 rounded">
                      {formErrors.username}
                    </span>
                  )}
                  <div className="flex items-center">
                    <FaUser className="text-zinc-800 mr-2" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Nom d'utilisateur"
                      className="w-full text-black p-2 my-2 border rounded focus:outline-none focus:ring-2 focus:ring-zinc-600"
                      required
                    />
                  </div>
                  {formErrors.password && (
                    <span className="text-red-500 mt-2 block bg-white p-1 rounded">
                      {formErrors.password}
                    </span>
                  )}
                  <div className="flex items-center">
                    <FaLock className="text-zinc-800 mr-2" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Mot de passe"
                      className="w-full text-black p-2 my-2 border rounded focus:outline-none focus:ring-2 focus:ring-zinc-600"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full p-2 my-2 bg-zinc-800 text-white rounded items-center justify-center flex"
                  >
                    {buttonText}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Authentification;
