import React, { useContext, useState } from "react";
import { inqumater } from "../assets/assests";
import "../App.css";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const Incubator = () => {
  const { backendURL } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      idea: "",
      budget: "",
    });

    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(backendURL + "/api/auth/incubator", {
        name: formData.name,
        email: formData.email,
        idea: formData.idea,
        budget: formData.budget,
      });

      if (data.success) {
        toast.success(data.message);
        setFormData({
      name: "",
      email: "",
      idea: "",
      budget: "",
    });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <motion.div
  initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    >
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat p-4 sm:p-6"
      style={{ backgroundImage: `url(${inqumater[0]?.image})` }}
    >
      <header className="text-center mb-10">
        <h1
          className="text-4xl font-extrabold text-transparent"
          style={{
            WebkitTextStroke: "1px white",
            textShadow: "0 0 1px rgba(255,255,255,0.6)",
          }}
        >
          Business Incubator
        </h1>
        <p className="text-gray-100 mt-2 text-lg font-light">
          We're here to support food startups with great ideas and solid
          commitment.
        </p>
      </header>
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-col lg:flex-row gap-6 bg-white/30 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-lg">
        {/* Info Card */}
        <div className="w-full lg:w-1/2">
          {inqumater.map((card) => (
            <div
              key={card.id}
              className="bg-white/90 shadow-md border-[3px] border-white rounded-lg p-4 mb-4"
            >
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                {card.title}
              </h2>
              <hr className="bg-yellow-500 h-1 rounded-full mb-2 shadow" />
              <p className="text-sm leading-relaxed text-gray-700">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Pitch Your Food Startup
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-gray-700 font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-700 font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="idea"
                className="block mb-1 text-gray-700 font-medium"
              >
                Describe Your Food Startup Idea
              </label>
              <textarea
                id="idea"
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block mb-1 text-gray-700 font-medium"
              >
                Approximate Budget (INR)
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
              Submit Your Idea
            </button>
          </form>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Incubator;
