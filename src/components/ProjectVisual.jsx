export default function ProjectVisual({ title, preview }) {
  return (
    <img
      className="project-preview"
      src={preview}
      alt={`${title} website preview`}
      loading="lazy"
      decoding="async"
    />
  )
}
