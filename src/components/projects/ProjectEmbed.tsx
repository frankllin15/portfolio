/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { Project } from "../../types";
import moment from "moment";
import { Image } from "react-datocms";

type Props = {
  project: Project;
};

export const ProjectEmbed: React.FC<Props> = ({ project }) => {
  return (
    <div className="grid gap-3 mobile-only:grid-rows-[auto_1fr] md:grid-cols-[minmax(100px,_260px)_1fr]  my-4 bg-neutral-100 dark:bg-neutral-700 p-2 rounded-sm shadow-sm hover:-translate-y-1 hover:shadow-md duration-300">
      <Image data={project.coverImage?.responsiveImage} />
      {/* <div className="w-auto  md:mr-4  "></div> */}
      <div className="">
        <Link href={`/projects/${project.slug}`}>
          <a>
            <h2 className="text-xl font-semibold my-2">{project.title}</h2>
          </a>
        </Link>
        <div className="mb-2">
          <span className="px-2 py-1 rounded-xl mr-2 bg-teal-600 text-neutral-100 text-sm">
            {moment(project.createdAt).format("YYYY")}
          </span>
          <span className="text-slate-400 dark:text-neutral-200">
            {project?.tags?.map((tag) => tag.name).join(" | ")}
          </span>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
};
