import ProjectsCard from "./ProjectsCard"
// import { projects } from "../data"
import SectionTitle from "./SectionTitle"
import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, projects } = useFetchProjects('projects');

  if (loading) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="py-20 align-element" id="practices">
      <SectionTitle text='web practices' />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          console.log(project)
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects