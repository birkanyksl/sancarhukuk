import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import HorizontalDivider from "@/components/HorizontalDivider";

const memberData = {
  erkan_yksl: {
    name: "Erkan Yüksel",
    education: [
      {
        institution: "Kings College London",
        years: "1984-1988",
        description:
          "Interpreting how connections can be made and communicating these with relevance ultimately creates powerful drivers which transform the way people think, feel and behave towards a brand and the experience they have with it.",
      },
      {
        institution: "International Bar Association",
        years: "1997-2001",
        description:
          "Dynamically target high-payoff intellectual capital for customized technologies.",
      },
    ],
    career: [
      {
        position: "Law Firm X",
        years: "1997-2000",
        description:
          "Developed comprehensive strategies to enhance client satisfaction and retention through innovative solutions.",
      },
      {
        position: "Legal Consultancy Y",
        years: "2001-2003",
        description:
          "Advised on complex legal issues while ensuring compliance with evolving regulations and laws.",
      },
    ],
  },
  mehmet_ali_kumus: {
    name: "Mehmet Ali Kümüş",
    education: [
      {
        institution: "Harvard University",
        years: "1995-1999",
        description:
          "Studied Law with a focus on international relations and human rights.",
      },
      {
        institution: "Yale Law School",
        years: "2000-2003",
        description:
          "Specialized in corporate law and received the highest honors for a thesis on business ethics.",
      },
    ],
    career: [
      {
        position: "Government Agency Z",
        years: "2004-2006",
        description:
          "Played a pivotal role in drafting legislation that impacted public policy and legal frameworks.",
      },
      {
        position: "Private Practice A",
        years: "2006-2007",
        description:
          "Specialized in corporate law, providing legal advice to businesses on mergers and acquisitions.",
      },
    ],
  },
};

const SinglePage = ({ params }) => {
  const { member } = params;
  const memberKey = Array.isArray(member) ? member[0] : member;

  const memberInfo = memberData[memberKey];
  if (!memberInfo) {
    notFound();
  }

  return (
    <> 

       <div className="px-6 py-8 md:px-8 lg:px-16 xl:px-32 2xl:px-48 md:mt-8 shadow-lg mb-20 bg-neutral-50">
        <div className="flex flex-col lg:flex-row lg:h-[600px] mx-auto px-8 justify-center ">
          <div className="lg:w-1/2 w-full pt-20 px-8 justify-center ">
            <div className="flex flex-col gap-4 mb-10 justify-center">
              <h2 className="text-sm font-normal text-color1">
                <span className="text-color6">FOUNDER</span> PARTNER
              </h2>
              <h3 className="text-4xl font-medium text-color1">Erkan YÜKSEL</h3>
              <HorizontalDivider />
            </div>
            <div className="flex flex-col gap-6 mb-8">
              <p className="text-black  text-[13px] leading-6 max-w-[500px] 2xl:max-w-[650px]">
                As an independent Attorney at Law, practicing in cooperation
                with Law firm, Maria is a senior member of the Regional
                Intellectual Property Practice Group. She advises clients on all
                aspects of intellectual property, including registration and
                protection.
              </p>
              <p className="text-black text-[13px] leading-6 max-w-[500px] 2xl:max-w-[650px]">
                She has worked on numerous corporate transactions and
                competition matters involving specialised advice on competition
                law, namely merger control and anti-trust issues. She is a
                senior member of the Corporate & Commercial Practice Group and
                is an active member of our Healthcare & Pharmaceuticals and
                Food, Agriculture & Cosmetics Industry Groups.
              </p>
            </div>
            <div className="flex flex-row justify-between max-w-[500px]">
              <button className="group w-12 hover:w-48 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700  font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                <svg
                  y="0"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                  height="100"
                  className="w-8 h-8 shrink-0 fill-neutral-50"
                >
                  <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                </svg>
                <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                  Erkan Yüksel
                </span>
              </button>
               
            </div>
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 flex justify-center max-w-[400px]  mx-auto">
            <Image
              src="/erkanprofil.png"
              alt="Maria Johnson"
              width={400}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-base font-normal mb-4">1997-2007</h2>
            <h3 className="text-4xl font-bold mb-6">Education</h3>
            <p className="text-lg mb-6">
              The protection of intangible innovation, ideas and knowledge has
              an increasingly important role.
            </p>
          </div>

          <div className="lg:col-span-1">
            <ul className="space-y-4">
              {memberInfo.education.map((edu, index) => (
                <li key={index}>
                  <h4 className="font-semibold">{`${edu.institution}, ${edu.years}`}</h4>
                  <p>{edu.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col space-y-4 max-w-96 mx-auto">
            <Image
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Education Image 1"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full"
              priority
            />
            <Image
              src="https://images.pexels.com/photos/1122865/pexels-photo-1122865.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Education Image 2"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-base font-normal mb-4">1997-2007</h2>
            <h3 className="text-4xl font-bold mb-6">Career</h3>
            <p className="text-lg mb-6">
              The changing legislation introduces new challenges for
              implementation which attorneys must be aware of.
            </p>
          </div>

          <div className="lg:col-span-1">
            <ul className="space-y-4">
              {memberInfo.career.map((job, index) => (
                <li key={index}>
                  <h4 className="font-semibold">{`${job.position}, ${job.years}`}</h4>
                  <p>{job.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col space-y-4 max-w-96 mx-auto">
            <Image
              src="https://images.pexels.com/photos/208603/pexels-photo-208603.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Career Image 1"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full"
              priority
            />
            <Image
              src="https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Career Image 2"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function generateStaticParams() {
  return Object.keys(memberData).map((memberKey) => ({
    member: [memberKey],
  }));
}

export default SinglePage;
