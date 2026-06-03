export const Header = () => {
  return (
    <header className="hero-section">
      <div className="hero-text-content">
        <p className="hero-greeting">Hej, My name is Felicia Löfström</p>

        <h1>Aspiring Web Developer</h1>

        <div className="hero-avatar-container">
          <img src="/profile-pic.jpg" alt="Felicia Löfström" className="hero-avatar" />
        </div>

        <p className="hero-description">
          Welcome to my portfolio!
          With an eye for details and passion for structured code, my aim is to build modern web applications.
          Here is a selection of what I have created during my web developing bootcamp!
        </p>

        <div className="hero-socials">
          <a href="https://github.com/LofstromFelicia" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href="www.linkedin.com/in/felicia-löfström-693390130" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}