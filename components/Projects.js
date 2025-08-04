import Project from "./Project";

export default function Projects() {
  let Projects = [
    {
      id: 1,
      name: "Quick Launch",
      img_file_type: "jpg",
      demo_url:
        "https://chromewebstore.google.com/detail/quick-launch/danchmbbppbephkljlphnofdmlgenhba",
    },
    {
      id: 2,
      name: "MiCrypto",
      img_file_type: "png",
      demo_url:
        "https://chromewebstore.google.com/detail/micrypto/ngppjacebelkipmaingmpegkmphaephe",
    },
    {
      id: 3,
      name: "Movie List",
      img_file_type: "png",
      demo_url: "https://zacherycardoza.github.io/MovieProject/",
    },
    {
      id: 4,
      name: "Untitled Project",
      img_file_type: "png",
      demo_url: "https://google.com",
    },
  ];

  return (
    <section id="project-section" className="py-8 min-h-dvh scroll-mt-[4rem]">
      <h3 className="px-8 text-5xl font-semibold mb-4 text-center">
        <span className="">Projects</span>
      </h3>
      <div className="">
        {Projects.map((project) => {
          return <Project project={project} key={project.name} />;
        })}
      </div>
    </section>
  );
}
