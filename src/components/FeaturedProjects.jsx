import ProjectSlide from '@/components/ProjectSlide';
import { featuredProjects } from '@/data/siteData';
import styles from '@/styles/FeaturedProjects.module.css';

export default function FeaturedProjects({ onViewProject }) {
  return (
    <section
      id="featured-projects"
      className={styles.section}
      style={{ '--slide-count': featuredProjects.length }}
    >
      {featuredProjects.map((project, index) => (
        <ProjectSlide
          key={project.id}
          {...project}
          index={index + 1}
          onView={() => onViewProject(project.title)}
        />
      ))}
    </section>
  );
}
