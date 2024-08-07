
import Image from "next/image";

const About = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/about1.jpg"
          fill
          alt="about image"
          className="object-cover opacity-50"
        />
        <h1
          className="relative flex w-full h-full justify-center items-center text-4xl 
        font-extrabold uppercase text-tertiary "
        >
          About Us
        </h1>
      </div>
      <div
        className="leading-8 text-lg bg-primary mt-[-130px] relative w-[90%] 
         m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full
          max-md:bg-transparent max-md:shadow-none"
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          in? Facere illum minus aspernatur voluptatem enim architecto ipsa,
          debitis dolor perferendis nobis! Non voluptatum ipsa soluta dolores
          cumque quod reprehenderit? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quaerat suscipit maiores dolore earum voluptatem
          voluptatibus ullam adipisci in, ipsam veniam corporis impedit hic
          quasi eos ea aut quidem eum commodiderit? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quaerat suscipit maiores dolore earum
          voluptatem voluptatibus ullam adipisci in, ipsam veniam corporis
          impedit hic quasi eos ea aut quidem eum commodi.
        </p>
      </div>
    </div>
  );
};

export default About;
