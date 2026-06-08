export const Header = () => {
  return (
    <>
      <header className="hero-section pinned-block">
        <span className="block-pin pin-top-center">📌</span>

        <div className="hero-text-content">
          <p className="hero-greeting">Hej, My name is Felicia Löfström</p>
          <h1>Aspiring Web Developer</h1>
          <div className="hero-avatar-container">
            <img src="/profile-pic.jpg" alt="Felicia Löfström" className="hero-avatar" />
            <span className="animated-emoji hero-avatar-sunflower">🌻</span>
          </div>
          <p className="hero-description">
            Welcome to my digital noticeboard! <br />
            I'm a web developer and maker who loves building things from scratch—whether it's clean code or physical creations. Here is a selection of my projects from my web development bootcamp. <br />
            Take a look around!
          </p>
        </div>
      </header>

      <div className="hero-socials">
        <a href="https://github.com/LofstromFelicia" target="_blank" rel="noopener noreferrer" className="sticker-github" title="GitHub">
          <img src="/github-sticker.png" alt="Github" />
        </a>
        <a href="www.linkedin.com/in/felicia-löfström-693390130" target="_blank" rel="noopener noreferrer" className="sticker-linkedin" title="LinkedIn">
          <img src="/linkedin-sticker.png" alt="LinkedIn" />
        </a>
      </div>
    </>
  )
}