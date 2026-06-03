import data from "./data.json"
import { Header } from "./Header"
import { ProjectCard } from "./ProjectCard"

export const App = () => {
  const allProjects = data.projects

  return (
    <div className="app-container">
      {/* Hero / Header Section */}
      <Header />

      {/* Main Section with Project Grid */}
      <main className="main-content">
        <section className="projects-section">
          <h2>My Projects</h2>

          <div className="projects-grid">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
