import data from "./data.json"
import { Header } from "./Header"
import { ProjectCard } from "./ProjectCard"
import { Skills } from "./Skills"
import { Footer } from "./Footer"

export const App = () => {
  const allProjects = data.projects

  return (
    <div className="app-container">
      {/* Hero/Header Section */}
      <Header />

      {/* Main Section with Project Grid */}
      <main className="main-content">
        <div className="skills-sticker-wrapper">
          <Skills />

          <div className="desktop-stickers">
            <img src="/vscode.png" className="tech-sticker s-left-1" alt="VS Code Sticker" />
            <img src="/javascript.png" className="tech-sticker s-right-1" alt="JavaScript Sticker" />
            <img src="/react.png" className="tech-sticker s-left-2" alt="React Sticker" />
            <img src="/html.png" className="tech-sticker s-right-2" alt="HTML Sticker" />
            <img src="/css.png" className="tech-sticker s-left-3" alt="CSS Sticker" />
          </div>
        </div>

        <section className="projects-section">
          <h2>My Projects <span className="animated-emoji" aria-hidden="true">💻</span></h2>
          <div className="projects-grid">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id || project.name} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
