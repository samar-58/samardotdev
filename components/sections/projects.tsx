import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "aryventory",
      description: "an inventory management system for businesses",
      tech: ["react.js", "tailwind", "typescript" , "node.js" , "express" , "postgres" ,"aws" , "sequelize"  ,"react-native","razorpay","redux"],
      link: "https://aryventory.com/",
      github: "private"
    },
    {
      id: 2,
      title: "goschoolify",
      description: "a platform for schools to manage their business.",
      tech: ["react.js", "nest.js","node.js" ,"prisma","react-native","typescript","postgres-sql","aws"],
      link: "https://goschoolify.com/",
      github: "private"
    },
    {
      id: 3,
      title: "mealmeal",
      description: "a mobile app for tracking calories and nutrients of meals consumed.",
      tech: ["react-native","typescript","zustand","react-query"],
      link: "https://mealmeal.food/",
      github: "private"
    }
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
                      {/* <a
                        href={project.github}
                        className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors font-poppins"
                      >
                        github →
                      </a> */}
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
