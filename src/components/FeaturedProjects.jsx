import ProjectSlide from '@/components/ProjectSlide';
import styles from '@/styles/FeaturedProjects.module.css';

const projects = [
  {
    id: 1,
    label: 'FEATURED PROJECTS-01',
    title: 'LACASA VILLA',
    description:
      'We create refined, functional spaces where aesthetics meet purpose. Each project is a dialogue between form and feeling — crafted with precision, shaped by context, and inspired by timeless design principles.',
    tags: ['Hyderabad', '2025', 'Residential'],
    image: '/images/lacasa-villa.png',
    overlayColor: 'rgba(33,33,33,0.60)',
  },
  {
    id: 2,
    label: 'FEATURED PROJECTS-02',
    title: 'RIVER EDGE',
    description:
      'Exclusive, spacious villas nestled in a peaceful environment, perfect for those seeking luxury and privacy.',
    tags: ['Hyderabad', '2025', 'Residential'],
    image: '/images/river-edge.jpg',
    overlayColor: 'rgba(33,33,33,0.60)',
  },
  {
    id: 3,
    label: 'FEATURED PROJECT-03',
    title: 'SKYLINE HEIGHTS',
    description:
      'A luxury high-rise offering stunning city views and top-tier amenities designed for modern living.',
    tags: ['Hyderabad', '2025', 'Residential'],
    image: '/images/skyline-heights.png',
    overlayColor: 'rgba(10,10,20,0.55)',
  },
];

export default function FeaturedProjects() {
  return (
    <section className={styles.section}>
      {projects.map((project, idx) => (
        <ProjectSlide
          key={project.id}
          {...project}
          index={idx + 1}
          onView={() => console.log(`View ${project.title}`)}
        />
      ))}
    </section>
  );
}