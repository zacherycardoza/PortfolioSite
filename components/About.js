export default function About() {
  return (
    <section
      id="about-section"
      className="p-8 min-h-[400px] scroll-mt-[4rem] text-center"
    >
      <h3 className="px-8 text-5xl font-semibold mb-4 text-center">
        <span className="">About Me</span>
      </h3>
      <div className="flex">
        <div className="basis-2/3"></div>
        <p>
          Hey, I’m Zach — a web developer who loves turning ideas into clean,
          functional websites and apps. I recently finished Centennial’s
          Software Engineering program and have worked on real projects using
          tools like React, Laravel, and JavaScript. I enjoy solving problems,
          learning new tech, and building things that people actually use. When
          I’m not coding, I’m probably outside, working on a DIY project, or
          fishing.
        </p>
        <div className="basis-2/3"></div>
      </div>
    </section>
  );
}
