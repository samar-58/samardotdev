import React from 'react';
import Image from 'next/image';
import aryventoryPreview from '@/assets/aryventory.png';
import vestingPreview from '@/assets/vesting.png';
import crowdmintPreview from '@/assets/crowdmint.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "crowdmint",
      description: "a data labelling platform to earn rewards on the Solana blockchain.",
      tech: ["Next.js", "typescript", "prisma", "postgres", "node.js", "solana", "tailwind", "aws"],
      link: "https://crowdmint.samardev.xyz/",
      preview: crowdmintPreview,
    },
    {
      id: 2,
      title: "aryventory",
      description: "an app for managing inventory and sales of a retail store",
      tech: ["react", "react native", "tailwind", "typescript", "expo", "sequelize", "postgres", "express", "node.js"],
      link: "https://aryventory.com/",
      preview: aryventoryPreview,
    },
    {
      id: 3,
      title: "token vesting",
      description: "a platform for vesting token on solana.",
      tech: ["solana", "rust", "anchor", "typescript", "next.js", "tailwind"],
      link: "https://vesting.samardev.xyz/",
      preview: vestingPreview,
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
                    <h3 className="text-xl font-poppins font-semibold mb-3 text-zinc-200">
                      {project.title}
                    </h3>

                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mb-4 group">
                      <div className="relative overflow-hidden rounded-lg border border-edge">
                        <Image
                          src={project.preview}
                          alt={`${project.title} preview`}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    </a>

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
