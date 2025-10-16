import React, { useState } from "react";
import "./ResumeParser.css";

function ResumeParser() {
  const [fileName, setFileName] = useState("");
  const [parsedData, setParsedData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      // 🔹 Simulated AI extraction (mock data)
      setTimeout(() => {
        setParsedData({
          name: "Priya Sharma",
          email: "priya.sharma@gmail.com",
          phone: "+91-9876543210",
          skills: ["React", "Node.js", "MongoDB", "Figma"],
          education: "B.Tech in Computer Science",
          experience: "2 Years at Infosys as Frontend Developer",
        });
      }, 1500);
    }
  };

  return (
    <div className="resume-parser-container">
      <h2>AI Resume Parser</h2>
      <p className="subtitle">
        Upload a resume to automatically extract key candidate details 🤖
      </p>

      <div className="upload-section">
        <label htmlFor="resumeUpload" className="upload-label">
          {fileName ? fileName : "📄 Choose Resume File"}
        </label>
        <input
          id="resumeUpload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
        />
      </div>

      {parsedData && (
        <div className="parsed-output">
          <h3>Extracted Details</h3>
          <p><strong>Name:</strong> {parsedData.name}</p>
          <p><strong>Email:</strong> {parsedData.email}</p>
          <p><strong>Phone:</strong> {parsedData.phone}</p>
          <p><strong>Education:</strong> {parsedData.education}</p>
          <p><strong>Experience:</strong> {parsedData.experience}</p>

          <div className="skills">
            <strong>Skills:</strong>
            <ul>
              {parsedData.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeParser;
