import data from "./data.json"
import { Header } from "./Header"
import { ProjectCard } from "./ProjectCard"
import { Skills } from "./Skills"
import { Footer } from "./Footer"

export const App = () => {
  const allProjects = data.projects

  return (
    <div className="app-container">
      {/* Hero / Header Section */}
      <Header />

      {/* Main Section with Project Grid */}
      <main className="main-content">
        <Skills />

        <section className="projects-section">
          <h2>My Projects <span className="animated-emoji">💻</span></h2>
          <div className="projects-grid">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
