import AboutCard from "./AboutCard";
import abouts from "./abouts.json";

const About = () => {
  return (
    <section className="bg-p_black text-p_white py-4 lg:py-12">
      <div className=" max-w-[90%] mx-auto">
        <h2 className="text-3xl text-center mb-8 text-bold lg:mb-12 lg:text-4xl">
          Conheça todas as nossas facilidades
        </h2>
        <div className="flex flex-col gap-4 sm:max-w-max sm:mx-auto lg:max-w-max lg:flex-row lg:gap-8 ">
          {abouts.map((about) => (
            <AboutCard key={about.title} {...about} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
