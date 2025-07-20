const projects = [
  {
    title: "Sorting Visualizer",
    tech: "React, JavaScript",
    link: "https://github.com/john/sorting-visualizer",
  },
  {
    title: "Food Delivery App",
    tech: "MERN Stack",
    link: "https://github.com/john/food-delivery",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-16 bg-gray-50">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((proj, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            <h4 className="text-xl font-medium">{proj.title}</h4>
            <p className="text-gray-500">{proj.tech}</p>
            <a className="text-blue-500 mt-2 block" href={proj.link} target="_blank">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
