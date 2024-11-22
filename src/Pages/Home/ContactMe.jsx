export default function ContactMe() {
  const handleDownloadCV = () => {
    window.open('./claire_zhao_cv.pdf', '_blank');
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      
      <button
        className="btn btn-primary contact--form--btn"
        onClick={handleDownloadCV}
      >
        Download CV
      </button>
    </section>
  );
}
