"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";


import {
  FaPython,
  FaBrain,
  FaRobot,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-black via-[#050816] to-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-125h -[500px] bg-blue-500/20 blur-[120px] rounded-full -top-25 left-[30%]"></div>

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">
            Sachin<span className="text-blue-400">.ai</span>
          </h1>

          {/* Menu */}
          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

            <li>
              <a href="#about" className="hover:text-blue-400 transition cursor-pointer">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-blue-400 transition cursor-pointer">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-400 transition cursor-pointer">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-400 transition cursor-pointer">
                Contact
              </a>
            </li>

          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-semibold transition shadow-lg shadow-blue-500/20"
          >
            <div className="flex items-center gap-2">
  <FaDownload />
  Resume
</div>
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section 
      className="max-w-7xl mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-16 px-6 relative z-10 pt-32">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left flex-1">

          <p className="text-blue-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Sachin Kushwah
          </h1>

          <TypeAnimation
            sequence={[
              "AI & Python Developer",
              2000,
              "Machine Learning Enthusiast",
              2000,
              "Prompt Engineer & AI Tools Expert",
              2000,
              "AI Researcher & Innovator",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-blue-400 mb-6 font-semibold"
          />

          <p className="text-gray-400 max-w-2xl mb-10 text-lg leading-relaxed">
            Building AI-powered solutions, exploring innovative technologies,
            and creating impactful digital experiences through Machine Learning,
            AI research, and modern development.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg shadow-blue-500/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-2xl font-semibold transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">

          <div className="relative">

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

            <Image
              src="/profile.png"
              alt="Sachin Kushwah"
              width={350}
              height={350}
              className="relative rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30 object-cover w-87.5 h-87.5"
            />

          </div>

        </div>

      </section>
      {/* ABOUT SECTION */}
<section id="about" className="max-w-7xl mx-auto px-6 py-28">

  <div className="mb-16 text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      About Me
    </h2>

    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
      I am an AI & Python Developer passionate about building intelligent
      digital solutions and exploring cutting-edge technologies. I focus on
      Machine Learning, Prompt Engineering, AI tools, and modern development
      systems to create impactful experiences.
    </p>

  </div>

</section>


{/* SKILLS SECTION */}
<section id="skills" className="max-w-7xl mx-auto px-6 pb-28">

  <div className="mb-16 text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Skills
    </h2>

    <p className="text-gray-400">
      Technologies and tools I work with
    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-white/5 border border-white/10 hover:scale-105 hover:border-blue-500 transition-all duration-300 rounded-3xl p-8 text-center">

      <FaPython className="text-5xl text-blue-400 mx-auto mb-4" />

      <h3 className="text-2xl font-bold">
        Python
      </h3>

    </div>

    <div className="bg-white/5 border border-white/10 hover:scale-105 hover:border-blue-500 transition-all duration-300 rounded-3xl p-8 text-center">

      <FaBrain className="text-5xl text-blue-400 mx-auto mb-4" />

      <h3 className="text-2xl font-bold">
        Machine Learning
      </h3>

    </div>

    <div className="bg-white/5 border border-white/10 hover:scale-105 hover:border-blue-500 transition-all duration-300 rounded-3xl p-8 text-center">

      <FaRobot className="text-5xl text-blue-400 mx-auto mb-4" />

      <h3 className="text-2xl font-bold">
        Prompt Engineering
      </h3>

    </div>

    <div className="bg-white/5 border border-white/10 hover:scale-105 hover:border-blue-500 transition-all duration-300 rounded-3xl p-8 text-center">

      <FaGithub className="text-5xl text-blue-400 mx-auto mb-4" />

      <h3 className="text-2xl font-bold">
        GitHub & AI Tools
      </h3>

    </div>

  </div>

</section>
{/* PROJECTS SECTION */}
<section id="projects" className="max-w-7xl mx-auto px-6 pb-32">

  <div className="mb-16 text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Projects & Achievements
    </h2>

    <p className="text-gray-400">
      Some of my featured work and accomplishments
    </p>

  </div>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">
        House Price Prediction
      </h3>

      <p className="text-gray-400">
        Machine Learning project using Python.
      </p>
      <a
        href="https://www.kaggle.com/code/sachinkushwahai/house-price-prediction-linear-regression-sk"
        target="_blank"
        className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-5 py-2 rounded-xl font-semibold"
      >
        View Project →
      </a>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">
        Agile & DevOps Book
      </h3>

      <p className="text-gray-400">
        Published co-author book on Amazon.
      </p>
      <a
        href="https://www.amazon.in/Agile-DevOps-Practice-Practical-corporate-ebook/dp/B0GD8HKGF2"
        target="_blank"
        className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-5 py-2 rounded-xl font-semibold"
      >
        View Project →
      </a>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">
        Research & Patents
      </h3>

      <p className="text-gray-400">
        Published research paper and patents.
      </p>
      <a
        href="https://github.com/sachin7067429293-gif"
        target="_blank"
        className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-5 py-2 rounded-xl font-semibold"
      >
        View Project →
      </a>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">
        Portfolio Website
      </h3>

      <p className="text-gray-400">
        Modern responsive portfolio built using Next.js and Tailwind CSS.
      </p>
      <a
        href="https://github.com/sachin7067429293-gif"
        target="_blank"
        className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-5 py-2 rounded-xl font-semibold"
      >
        View Project →
      </a>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">
        Python Automation Tools
      </h3>

      <p className="text-gray-400">
        Created automation scripts for productivity and data handling.
      </p>
      <a
        href="https://github.com/sachin7067429293-gif"
        target="_blank"
        className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-5 py-2 rounded-xl font-semibold"
      >
        View Project →
      </a>
    </div>

  </div>

</section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 pb-32">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400">
            Let’s connect and build something amazing together.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sachin7067429293@gmail.com"
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-md hover:border-blue-500 hover:scale-105 transition-all duration-300 "
          >
           <div className="flex justify-center mb-4 text-4xl text-red-400">
  <FaEnvelope />
</div>

<h3 className="text-3xl font-bold mb-4">Gmail</h3>

            <p className="text-gray-400 break-all">
              sachin7067429293@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sachinkushwah-ai/"
            target="_blank"
            className="bg-[#0d1117] border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 rounded-3xl p-10 text-center"
          >
            <div className="flex justify-center mb-4 text-4xl text-blue-400">
  <FaLinkedin />
</div>

<h3 className="text-3xl font-bold mb-4">LinkedIn</h3>
            <p className="text-gray-400">Connect Professionally</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sachin7067429293-gif"
            target="_blank"
            className="bg-[#0d1117] border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 rounded-3xl p-10 text-center"
          >
            <div className="flex justify-center mb-4 text-4xl text-white">
  <FaGithub />
</div>

<h3 className="text-3xl font-bold mb-4">GitHub</h3>
            <p className="text-gray-400">Explore My Code</p>
          </a>

        </div>

      </section>

      {/* Certifications Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Certifications
          </h2>

          <p className="text-gray-400">
            Professional certifications and learning achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Certificate 1 */}
          <div className="bg-[#0d1117] border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              IBM AI Fundamentals
            </h3>

            <p className="text-gray-400 mb-6">
              IBM
            </p>

            <a
              href="https://drive.google.com/file/d/1fiCLjwamJnvzX01pszQfTnmlfWyjtUb7/view?usp=sharing"
              target="_blank"
              className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-semibold"
            >
              View Certificate
            </a>

          </div>

          {/* Certificate 2 */}
          <div className="bg-[#0d1117] border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              NASSCOM Gen AI 101
            </h3>

            <p className="text-gray-400 mb-6">
              NASSCOM
            </p>

            <a
              href="https://drive.google.com/file/d/1gnSOQNLnS3xzYVQnuEzqWEwHAuGJA2oe/view?usp=sharing"
              target="_blank"
              className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-semibold"
            >
              View Certificate
            </a>

          </div>

          {/* Certificate 3 */}
          <div className="bg-[#0d1117] border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-105 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              AWS Certified
            </h3>

            <p className="text-gray-400 mb-6">
              Amazon Web Services
            </p>

            <a
              href="https://drive.google.com/file/d/1_iqltjQDwuBwFcG9GeN5tIjbwrF3X8SH/view?usp=sharing"
              target="_blank"
              className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-semibold"
            >
              View Certificate
            </a>

          </div>

        </div>

      </section>

    <footer className="border-t border-white/10 py-6 text-center text-gray-400">
  <p>
    © 2026 Sachin Kushwah. Built with Next.js & Tailwind CSS 🚀
  </p>
</footer>

</main>
  );
}