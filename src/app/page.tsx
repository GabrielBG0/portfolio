import Header from "@/components/Header";
import Image from "next/image";
import nn from "../../public/NN.svg";
import arrow from "../../public/arrow.svg";
import scroll from "../../public/Scroll.svg";
import Footer from "@/components/Footer";
import NLP from "../../public/NLP.svg";
import SEG from "../../public/SEG.svg";
import Minerva from "../../public/Minerva.svg";

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
            <div className="flex justify-evenly items-stat w-full">
              <div className="h-full m-3 flex flex-col justify-center items-center w-[50%]">
                <h2 className="text-5xl mb-[45px] font-titles">
                  Machine Learning
                </h2>
                <span className="inline-block pb-2 max-w-[80ch]">
                  I developed a passion for machine learning during my
                  university studies, where I explored its vast potential to
                  solve real-world problems. This interest led me to work as a
                  junior researcher volunteer for two years, focusing on natural
                  language processing projects. During this time, I conducted
                  research on fake news detection using BERT, deepening my
                  understanding of cutting-edge AI models.
                  <br />
                  <br />
                  Currently, I am pursuing a master&apos;s degree at Unicamp,
                  where my work focuses on the semantic segmentation of seismic
                  facies. I had the opportunity to present my findings at the
                  85th annual EAGE conference and exhibition, where I published
                  my research, contributing to advancements in the field of
                  geoscience.
                </span>
              </div>
              <div className="h-full m-3 flex flex-col justify-center items-center w-[50%]">
                <h2 className="text-5xl mb-[45px] font-titles">
                  Software Engineering
                </h2>
                <span className="inline-block pb-2 max-w-[80ch]">
                  I hold a degree in Software Engineering from one of
                  Brazil&apos;s top universities, where I had the opportunity to
                  contribute to impactful projects. During my studies, I worked
                  on two projects focused on medical data collection for
                  research that aimed to inform public policy decisions. These
                  experiences honed my skills in developing practical solutions
                  for real-world problems.
                  <br />
                  <br />
                  Since joining Unicamp&apos;s master&apos;s program, I&apos;ve
                  applied my software engineering expertise to research,
                  bringing a unique perspective to tackling complex challenges.
                  I currently lead Minerva, an open-source machine learning
                  training framework designed to meet the specific needs of
                  researchers, developed in collaboration with Discovery
                  Unicamp. As the software architect, core developer, and core
                  maintainer of Minerva, I ensure the framework is robust,
                  flexible, and aligned with the evolving demands of the
                  research community.
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
              <span className="inline-block max-w-[80ch]">
                With a strong foundation in software engineering and machine
                learning, I bring a unique blend of technical expertise and
                research experience to my projects. My background spans
                developing data-driven applications, contributing to impactful
                research, and leading open-source initiatives. I specialize in
                computer vision, semantic segmentation, and building scalable
                machine learning frameworks like Minerva. My skills extend
                beyond coding; I architect solutions that bridge the gap between
                cutting-edge research and practical implementation, always with
                a focus on innovation and collaboration.
              </span>
            </div>
            <div className="grid grid-cols-1 gap-[20px] auto-rows-fr">
              <div className="bg-bg-secondary h-full rounded-[30px] p-[45px] flex flex-col justify-center items-center">
                <h2 className="font-titles text-6xl font-light pb-[35px]">
                  Transformers
                </h2>
                <span className="inline-block max-w-[80ch]">
                  I have extensive experience working with transformer models,
                  having started with BERT during my research on fake news
                  detection. In my master&apos;s program, I expanded my focus to
                  include vision transformers (ViT) and multi-scale vision
                  transformers (MiT) for semantic segmentation. I worked with
                  state-of-the-art models such as SegFormer, Segmenter, and SetR
                  to tackle the challenging task of segmenting seismic facies.
                  My research also explored the comparative performance of
                  transformer-based models versus traditional CNN architectures,
                  which culminated in a paper that highlighted the advantages
                  and limitations of each approach in geoscience applications.
                </span>
              </div>
              <div className="grid grid-cols-2 gap-[20px] auto-rows-fr">
                <div className="bg-bg-secondary rounded-[30px] p-[45px] h-full flex flex-col justify-center items-center">
                  <h2 className="font-titles text-4xl font-light pb-[35px]">
                    Computer Vision
                  </h2>
                  <span className="inline-block  max-w-[80ch]">
                    My experience in computer vision spans various domains, with
                    a strong focus on image processing and semantic
                    segmentation. In addition to working with cutting-edge
                    transformer models for segmentation, I&apos;ve gained
                    expertise in self-supervised learning (SSL) techniques,
                    which are crucial for enhancing model performance with
                    limited labeled data. Through my work on seismic facies
                    segmentation and other image-based tasks, I&apos;ve
                    developed a deep understanding of the intricacies of visual
                    data, enabling me to tackle complex problems with innovative
                    solutions.
                  </span>
                </div>
                <div className="bg-bg-secondary rounded-[30px] p-[45px] h-full flex flex-col justify-center items-center">
                  <h2 className="font-titles text-4xl font-light pb-[35px]">
                    NLP
                  </h2>
                  <span className="inline-block max-w-[80ch]">
                    I have a strong background in Natural Language Processing,
                    having worked with advanced models like BERT to tackle
                    real-world problems such as fake news detection. My work in
                    this area involved leveraging pre-trained transformer models
                    to understand and classify text data, contributing to the
                    development of robust systems for detecting misinformation.
                    This experience gave me a solid foundation in NLP
                    techniques, including tokenization, attention mechanisms,
                    and fine-tuning models for domain-specific tasks, allowing
                    me to efficiently handle complex text processing and
                    analysis challenges.
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
              <span className="inline-block pb-2 max-w-[80ch]">
                In my work on semantic segmentation, I have focused on applying
                advanced machine learning techniques to the field of seismic
                facies analysis. My master&apos;s research at Unicamp explored
                the use of transformer models like ViT and MiT to improve the
                accuracy and efficiency of seismic facies segmentation,
                comparing their performance with traditional CNN-based
                approaches.This research was published and presented at the 85th
                annual EAGE conference and exhibition, where it garnered
                significant attention. <br />
                <br />
                Both the paper and my presentation received some of the highest
                ratings from the conference reviewers, recognizing the impact of
                this work on the geoscience community. My contributions not only
                advance the application of machine learning in geophysics but
                also provide valuable insights into the effectiveness of
                transformer models for complex geospatial tasks.
              </span>
            </div>
            <div className="flex justify-center items-center">
              <Image src={SEG} alt="" width={750} height={750} />
            </div>
            <div className="flex justify-center items-center">
              <Image src={NLP} alt="" width={750} height={750} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-titles text-6xl font-normal pb-[35px] text-center">
                Natural Language <br />
                Processing
              </h2>
              <span className="inline-block pb-2 max-w-[80ch]">
                My work in NLP has focused on developing solutions to address
                pressing issues in information integrity, particularly in the
                detection of fake news. During my time as a junior researcher, I
                utilized BERT, a leading transformer model, to design a system
                capable of identifying misinformation with high accuracy. This
                research involved fine-tuning the model for the specific task of
                text classification, optimizing it for detecting patterns and
                nuances in language that signal deceptive or misleading content.
                <br />
                <br />
                This work laid a strong foundation in NLP, allowing me to
                contribute to projects requiring deep understanding of language
                processing and the application of cutting-edge transformer
                models in real-world scenarios.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-titles text-6xl font-normal pb-[35px] text-center">
                Minerva
              </h2>
              <span className="inline-block pb-2 max-w-[80ch]">
                As the lead of Minerva, an open-source machine learning training
                framework developed at Discovery Unicamp, I&apos;ve played a key
                role in its architecture, development, and maintenance. Minerva
                was designed to meet the specific needs of researchers,
                providing a flexible and scalable solution for training and
                fine-tuning machine learning models across a variety of tasks.
                My role as the software architect, core developer, and core
                maintainer has involved ensuring that the framework is robust,
                user-friendly, and adaptable to the fast-evolving demands of
                machine learning research.
                <br />
                <br />
                Minerva stands out by offering an accessible and powerful tool
                for both academic and industry researchers, bridging the gap
                between research and practical implementation. Through my work
                on this project, I&apos;ve gained valuable experience in
                open-source software development, contributing to a tool that
                empowers the research community to advance machine learning in
                meaningful ways.
              </span>
            </div>
            <div className="flex justify-center items-center">
              <a
                href="https://github.com/discovery-unicamp/Minerva"
                target="_blank"
              >
                <Image src={Minerva} width={750} height={750} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
