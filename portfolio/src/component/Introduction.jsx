import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { skills, CONTACTS, NAME, DESIGNATION} from "../constants/constants";
import profile from "../assets/profile.jpg"  


const Introduction = () => {
  return (
    <div className="flex no-scrollbar">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 bg-MidNightBlack text-Snow flex flex-col px-4 py-6 space-y-6 overflow-y-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-y-4">
          <img
            className="w-20 h-20 rounded-full"
            src={profile}
            alt="profile picture"
          />
          <div className="text-center">
            <span className="text-gray-300 text-base font-bold">
              {NAME}
            </span>
            <span className="text-sm text-LightGray block mt-1">
              {DESIGNATION}
            </span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((item, index) => (
              <span
                key={index}
                className="py-2 px-3 text-xs bg-EveningBlack rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xs font-bold">Email Address</h2>
            <a
              href={`mailto:${CONTACTS.EMAIL}`}
              className="text-xs text-gray-600 block"
            >
              {CONTACTS.EMAIL}
            </a>
          </div>
          <div>
            <h2 className="text-xs font-bold">Phone</h2>
            <span className="text-xs text-gray-600 block">{CONTACTS.PHONE}</span>
          </div>
        </div>

        {/* Resume Download */}
        <a
          href="/osamajavaid-resume.pdf"
          target="_blank"
          className="flex items-center gap-x-2 text-LightGray"
        >
          <span>Download Resume</span>
          <FaDownload />
        </a>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-xl mt-auto">
          <a href={""} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={""} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-4">
        {/* Add main content or components here */}
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>
          This is the main content area. Add your components or sections here.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
