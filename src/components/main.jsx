import React from "react";
import bg from "../Images/bg.webp";
import background from "../Images/background.webp";
import resumePath from "../Files/resume.pdf";

const Main = () => {
  const handleDownload = () => {
    // Fetch the resume file as a Blob
    fetch(resumePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
        document.body.appendChild(a);

        a.click();

        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading resume:", error));
  };

  return (
    <div>
      <main id="home">
        <img src={background} alt="" />
        <section className="first-section">
          <div className="left-sec">
            Hi, My name is <span className="purple">Abdullah</span>
            <div>I am a passionate</div>
            <div className="purple">Web developer</div>
            <div>
              <button onClick={handleDownload} className="btn">
                Download Resume
              </button>
              <a
                className="gitBtn"
                href="https://github.com/abd-webdev"
                rel="norefferer"
              >
                <button className="btn">Visit Github</button>
              </a>
            </div>
          </div>

          <div className="right-sec">
            {" "}
            <img src={bg} alt="" width="340px" />
          </div>
        </section>
        <hr />
      </main>
    </div>
  );
};

export default Main;
