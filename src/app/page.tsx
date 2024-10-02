import Header from "@/components/Header";
import Image from "next/image";
import nn from "../../public/NN.svg";
import arrow from "../../public/arrow.svg";
import scroll from "../../public/Scroll.svg";
import Footer from "@/components/Footer";
import NLP from "../../public/NLP.svg";
import SEG from "../../public/SEG.svg";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="">
        <div className="flex justify-center items-center absolute w-full h-screen px-[44px]">
          <Image
            src={nn}
            alt="Neural Net"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="hero-bg w-full h-[100vh] flex flex-col justify-center items-start p-[90px]">
          <div className="h-fit w-fit mb-[24px]">
            <h1 className="text-left font-titles text-8xl font-extrabold">
              Deep Learning,
              <br />
              Software Engineering
              <br />& Artificial Intelligence
            </h1>
          </div>
          <div className="h-fit w-fit mb-[24px] flex justify-start items-center">
            <h2 className="font-titles text-5xl pr-[12px] font-light">
              Meet Gabriel
            </h2>
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="h-fit w-fit mb-[24px]">
            <Image src={scroll} alt="scroll" />
          </div>
        </div>
        <div id="AboutMe" className="w-full p-[90px]">
          <div className=" border-[1px] rounded-[30px] bg-bg-secondary p-[45px] flex flex-col justify-center items-center">
            <h1 className="font-titles text-8xl font-extrabold pb-[45px]">
              About Me
            </h1>
            <div className="flex justify-center items-stat">
              <div className="h-full m-3 flex flex-col justify-center items-center w-[50%]">
                <h2 className="text-5xl mb-[45px] font-titles">
                  Deep Learning
                </h2>
                <span className="inline-block pb-2">
                  My journey into Deep Learning commenced during my Software
                  Engineering undergrad at the Federal University of Mato Grosso
                  do Sul. In 2020, my fascination with AI led me to delve into
                  Natural Language Processing (NLP) during a volunteer research
                  program.
                </span>
                <span className="inline-block pb-2">
                  For two immersive years, I focused on pioneering work with
                  BERT, an influential deep learning model transforming NLP.
                  Within a dynamic research setting, I explored BERT&apos;s
                  architecture and applications, unraveling its potential to
                  reshape language understanding. This experience enriched my
                  academic path, fueling my passion for Deep Learning.{" "}
                </span>
              </div>
              <div className="h-full m-3 flex flex-col justify-center items-center w-[50%]">
                <h2 className="text-5xl mb-[45px] font-titles">
                  Software Engineering
                </h2>
                <span className="inline-block pb-2">
                  My Software Engineering journey began at UFMS, Brazil, where
                  my coding passion transformed into a knack for designing
                  intricate systems. During my tenure, I contributed to crafting
                  applications pivotal in medical data collection and guiding
                  public decisions in Mato Grosso do Sul state.
                </span>
                <span className="inline-block pb-2">
                  Working on these impactful projects reinforced my belief in
                  technology&apos;s potential for societal change. This
                  experience strengthened my resolve to innovate using software
                  engineering as a catalyst for real-world solutions.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="Skills" className="w-full p-[90px]">
          <div className="grid grid-cols-2 gap-[20px] lg:min-h-[500px]">
            <div className="w-full h-full bg-bg-secondary rounded-[30px] p-[45px] flex flex-col justify-center items-center">
              <h1 className="font-titles text-8xl font-extrabold pb-[45px]">
                My Skils
              </h1>
              <span className="inline-block ">
                Lorem ipsum dolor sit amet consectetur. Tristique sed purus
                egestas pellentesque. Etiam accumsan quis feugiat vivamus. Ut
                rhoncus suspendisse nulla non id aliquam leo mollis. Gravida
                dolor cursus tempus dui facilisi nec vulputate sagittis nisl.
                Morbi suscipit dolor vitae consectetur libero turpis metus
                gravida imperdiet. Volutpat vitae leo in at. Lorem ipsum dolor
                sit amet consectetur. Tristique sed purus egestas pellentesque.
                Etiam accumsan quis feugiat vivamus. Ut rhoncus suspendisse
                nulla non id aliquam leo mollis. Gravida dolor cursus tempus dui
                facilisi nec vulputate sagittis nisl. Morbi suscipit dolor vitae
                consectetur libero turpis metus gravida imperdiet. Volutpat
                vitae leo in at.
              </span>
            </div>
            <div className="grid grid-cols-1 gap-[20px] auto-rows-fr">
              <div className="bg-bg-secondary h-full rounded-[30px] p-[45px] flex flex-col justify-center items-center">
                <h2 className="font-titles text-6xl font-light pb-[35px]">
                  Transformers
                </h2>
                <span className="inline-block">
                  Lorem ipsum dolor sit amet consectetur. Molestie semper vitae
                  cras nunc tortor vestibulum fermentum risus velit. Scelerisque
                  massa id feugiat montes. Eros netus ut pulvinar ac adipiscing
                  morbi est. Dictum purus urna eros eget fermentum dolor
                  pretium.
                </span>
              </div>
              <div className="grid grid-cols-2 gap-[20px] auto-rows-fr">
                <div className="bg-bg-secondary rounded-[30px] p-[45px] h-full flex flex-col justify-center items-center">
                  <h2 className="font-titles text-4xl font-light pb-[35px]">
                    Computer Vision
                  </h2>
                  <span className="inline-block  ">
                    Lorem ipsum dolor sit amet consectetur. Molestie semper
                    vitae cras nunc tortor vestibulum fermentum risus velit.
                    Scelerisque massa id feugiat montes. Eros netus ut pulvinar
                    ac adipiscing morbi est. Dictum purus urna eros eget
                    fermentum dolor pretium.
                  </span>
                </div>
                <div className="bg-bg-secondary rounded-[30px] p-[45px] h-full flex flex-col justify-center items-center">
                  <h2 className="font-titles text-4xl font-light pb-[35px]">
                    NLP
                  </h2>
                  <span className="inline-block">
                    Lorem ipsum dolor sit amet consectetur. Molestie semper
                    vitae cras nunc tortor vestibulum fermentum risus velit.
                    Scelerisque massa id feugiat montes. Eros netus ut pulvinar
                    ac adipiscing morbi est. Dictum purus urna eros eget
                    fermentum dolor pretium.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Work" className="w-full p-[90px]">
          <h1 className="font-titles text-[9rem] font-bold pb-[53px]">
            My Work
          </h1>
          <div className="grid grid-cols-2 gap-40">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-titles text-6xl font-normal pb-[35px] text-center">
                Semantic <br />
                Segmentation
              </h2>
              <span className="inline-block w-[75%]">
                Lorem ipsum dolor sit amet consectetur. Sem enim sagittis
                suscipit diam id magna tempor ipsum viverra. Tempus facilisi
                vitae quis lectus. Sit sed ipsum nascetur purus elit. Et blandit
                laoreet felis posuere pretium. Lorem ipsum dolor sit amet
                consectetur. Sem enim sagittis suscipit diam id magna tempor
                ipsum viverra. Tempus facilisi vitae quis lectus. Sit sed ipsum
                nascetur purus elit. Et blandit laoreet felis posuere pretium.
              </span>
            </div>
            <div className="flex justify-center items-center">
              <Image src={SEG} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <Image src={NLP} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-titles text-6xl font-normal pb-[35px] text-center">
                Natural Language <br />
                Processing
              </h2>
              <span className="inline-block w-[75%]">
                Lorem ipsum dolor sit amet consectetur. Sem enim sagittis
                suscipit diam id magna tempor ipsum viverra. Tempus facilisi
                vitae quis lectus. Sit sed ipsum nascetur purus elit. Et blandit
                laoreet felis posuere pretium. Lorem ipsum dolor sit amet
                consectetur. Sem enim sagittis suscipit diam id magna tempor
                ipsum viverra. Tempus facilisi vitae quis lectus. Sit sed ipsum
                nascetur purus elit. Et blandit laoreet felis posuere pretium.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
