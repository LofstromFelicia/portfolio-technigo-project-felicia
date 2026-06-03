export const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-category pinned-block">
          <span className="block-pin pin-top-left">📌</span>

          <h3>Code</h3>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>JavaScript ES6</li>
            <li>React - Basics</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="skills-category pinned-block">
          <span className="block-pin pin-top-left">📌</span>

          <h3>Toolbox</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Vite / npm</li>
            <li>Cloudflare Pages</li>
          </ul>
        </div>
        <div className="skills-category pinned-block">
          <span className="block-pin pin-top-left">📌</span>
          <h3>Upcoming</h3>
          <ul>
            <li>Node.js</li>
            <li>React - Advanced</li>
            <li>AI for developers</li>
            <li>Web Accessibility</li>
          </ul>
        </div>
      </div>
    </section>
  )
}