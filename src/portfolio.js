import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Portfolio() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Roselyne Osundwa</h1>
          <nav>
            <a href="#about" className="text-lg mx-4 hover:underline">
              About Me
            </a>
            <a href="#skills" className="text-lg mx-4 hover:underline">
              Skills
            </a>
            <a href="#portfolio" className="text-lg mx-4 hover:underline">
              Portfolio
            </a>
            <a href="#contact" className="text-lg mx-4 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <img
              src="/rozzy.jpg"
              alt="Roselyne Osundwa"
              className="mx-auto rounded shadow-md"
              style={{ width: "200px", height: "auto" }}
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hello, my name is Roselyne Osundwa, and I am a highly organized,
            detail-oriented virtual assistant with a Bachelor's Degree in
            Computing. I have over three years of experience in administrative
            support, project management, event planning, digital marketing, and
            data management. My mission is to help businesses and professionals
            streamline their workflows and achieve their goals efficiently.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Administrative Support: Email management, scheduling, and travel
                arrangements
              </li>
              <li>
                Project Management: Planning, executing, and evaluating projects
              </li>
              <li>
                Data Management: Proficient in Excel, Google Sheets, and
                database systems
              </li>
              <li>
                Digital Marketing: Social media management and SEO optimization
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Web Development: MERN Stack (MongoDB, Express.js, React,
                Node.js)
              </li>
              <li>
                Effective Communication: Writing professional emails and reports
              </li>
              <li>
                Problem Solving: Practical solutions under tight deadlines
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Portfolio Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="font-bold">Executive Support at @iLabAfrica</h3>
              <p>
                Planned, organized, and evaluated training programs, webinars,
                and events.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="font-bold"> Digital Marketer at @iLabAfrica</h3>
              <p>
                Developed marketing plans to enhance brand awareness, drive
                traffic, and generate leads, while managing the company's social
                media presence through engaging posts. Implemented SEO
                strategies to boost organic search rankings.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="font-bold">Career Coaching Platform</h3>
              <p>
                Developed a platform connecting students with mentors for career
                guidance.
              </p>
              <a
                href="https://coaching-platform-flame.vercel.app/"
                target="_blank"
                className="text-blue-600 underline"
              >
                Live Demo
              </a>
            </div>

            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="font-bold">
                {" "}
                Freshwater & Community Conservation researcher at National
                Geographic Society + The Nature Conservancy.
              </h3>
              <p>
                Conducted research and community surveys around Laikipia,
                delivering actionable insights to mitigate the socioeconomic
                impacts of water unavailability.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="font-bold">Analytics Hub</h3>
              <p>
                Created engaging content and tracked user engagement using
                analytics tools.
              </p>
              <a
                href="https://analyticshub.netlify.app/"
                target="_blank"
                className="text-blue-600 underline"
              >
                Analytics Hub
              </a>
            </div>

            <div className="bg-gray-100 p-6 rounded shadow">
                <h3 className="font-bold">Flicksasa</h3>
                <p>
                Developed a movie recommender system using hybrid machine learning with Flask API and an interactive frontend. Integrated user features like liking,
                disliking, favorites, and admin management to enhance usability
                </p>
                <a
                    href="https://movie-recommender-dun.vercel.app/"
                    target="_blank"
                    className="text-blue-600 underline"
                >
                    Flicksasa
                </a>    
                </div>      
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p>
            <i className="fas fa-envelope text-gray-600 mr-2"></i>
            Email:{" "}
            <a
              href="mailto:abdallaroselyne8@gmail.com"
              className="text-blue-600"
            >
              abdallaroselyne8@gmail.com
            </a>
          </p>
          <p>
            <i className="fas fa-phone text-gray-600 mr-2"></i>
            Phone: (+230) 57117941
          </p>
          <p>
            <i className="fab fa-linkedin text-gray-600 mr-2"></i>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/roselyne-abdalla-014a57206/"
              className="text-blue-600"
            >
              Roselyne Osundwa
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-4 text-center">
        <p>&copy; 2025 Roselyne Osundwa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
