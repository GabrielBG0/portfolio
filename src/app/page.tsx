import Header from "@/components/Header";
import Image from "next/image";
import nn from "../../public/NN.svg";
import arrow from "../../public/arrow.svg";
import scroll from "../../public/Scroll.svg";
import Footer from "@/components/Footer";

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
        <div className="w-full p-[90px]">
          <div className=" border-[1px] rounded-[30px] bg-bg-secondary p-[45px] flex flex-col justify-center items-center">
            <h1 className="font-titles text-8xl font-extrabold pb-[45px]">
              About Me
            </h1>
            <div className="flex justify-center items-center">
              <div className="h-full m-3 flex flex-col justify-center items-center">
                <h2 className="text-5xl mb-[45px] font-titles">
                  Deep Learning
                </h2>
                <span className="inline-block w-[75%] ">
                  Lorem ipsum dolor sit amet consectetur. Molestie semper vitae
                  cras nunc tortor vestibulum fermentum risus velit. Scelerisque
                  massa id feugiat montes. Eros netus ut pulvinar ac adipiscing
                  morbi est. Dictum purus urna eros eget fermentum dolor
                  pretium.
                </span>
              </div>
              <div className="h-full m-3 flex flex-col justify-center items-center">
                <h2 className="text-5xl mb-[45px] font-titles">
                  Software Engineering
                </h2>
                <span className="inline-block w-[75%] ">
                  Lorem ipsum dolor sit amet consectetur. Molestie semper vitae
                  cras nunc tortor vestibulum fermentum risus velit. Scelerisque
                  massa id feugiat montes. Eros netus ut pulvinar ac adipiscing
                  morbi est. Dictum purus urna eros eget fermentum dolor
                  pretium.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-[90px]">
          <div className="grid grid-cols-2 gap-[20px] lg:min-h-[500px]">
            <div className="w-full h-full bg-bg-secondary rounded-[30px] p-[45px] flex flex-col justify-center items-center">
              <h1 className="font-titles text-8xl font-extrabold pb-[45px]">
                About Me
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
                  <span className="inline-block ">
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
        <div className="w-full p-[90px]">
          <h1 className="font-titles text-[9rem] font-bold">My Work</h1>
          <div></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
