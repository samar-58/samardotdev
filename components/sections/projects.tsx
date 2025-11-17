import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "aryventory",
      description: "an app for managing inventory and sales of a retail store",
      tech: ["react", "react native", "tailwind", "typescript" , "expo" , "sequelize" , "postgres" ,"express", "node.js" ],
      link: "https://aryventory.com/"
    },
    {
      id: 2,
      title: "goschoolify",
      description: "a platform for managing schools.",
      tech: ["react","react native", "typescript", "nest.js" , "prisma" , "postgres" , "node.js" ],
      link: "https://goschoolify.com/",
    },
    {
      id: 3,
      title: "crowdmint",
      description: "a data labelling platform to earn rewards on the Solana blockchain.",
      tech: ["Next.js", "typescript" , "prisma" , "postgres" , "node.js","solana","tailwind","aws S3" ],
      link: "https://github.com/samar-58/crowdmint",
    },
  ];

  return (
    <>
      {/* Spacer area removed */}

      {/* Projects Section */}
      <div className="screen-line-after border-x border-edge">
        <div className="px-4 py-4">
          <h2 className="text-lg font-poppins font-semibold mb-3 text-zinc-300 flex items-center gap-2">
            stuff i’ve worked on
          </h2>

          <div className="space-y-2">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="border-t border-edge">
                  <div className="px-4 py-4">
                    <h3 className="text-xl font-poppins font-semibold mb-2 text-zinc-200">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-3 font-poppins">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs text-zinc-500 font-poppins"
                        >
                          {tech}
                          {techIndex < project.tech.length - 1 && " • "}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors font-poppins"
                      >
                        view project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
