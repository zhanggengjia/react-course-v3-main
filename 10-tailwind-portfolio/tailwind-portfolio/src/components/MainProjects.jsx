import ProjectsCard from "./ProjectsCard"
// import { projects } from "../data"
import SectionTitle from "./SectionTitle"
import { useFetchProjects } from './fetchProjects'

const MainProjects = () => {
  const { loading, projects } = useFetchProjects('mainProjects');

  if (loading) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text='web creations' />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          console.log(project)
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default MainProjects