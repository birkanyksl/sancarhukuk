import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

const memberData = {
  erkan: {
    name: "Erkan Yılmaz",
    age: 35,
    email: "erkan@example.com",
  },
  mehmet: {
    name: "Mehmet Kaya",
    age: 42,
    email: "mehmet@example.com",
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
      <div className="relative w-full h-48 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-color1 p-4 text-center">
            <h1 className="text-4xl font-normal">
              <span className="text-color6">Sancar Hukuk Ekibi</span>
            </h1>
            <p className="mt-4 text-sm text-gray-600">
              Şirketimiz, kapsamlı hukuki danışmanlık ve dava hizmetleri sunarak
              müvekkillerine güvenilir çözümler sağlar.
            </p>
            {/* <div className="mt-8 text-left">
              <p><strong>İsim:</strong> {memberInfo.name}</p>
              <p><strong>Yaş:</strong> {memberInfo.age}</p>
              <p><strong>Email:</strong> {memberInfo.email}</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mb-20">
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
              <li>
                <h4 className="font-semibold">
                  Kings College London, 1984-1988
                </h4>
                <p>
                  Interpreting how connections can be made and communicating
                  these with relevance ultimately creates powerful drivers which
                  transform the way people think, feel and behave towards a
                  brand and the experience they have with it.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">
                  International Bar Association, 1997-2001
                </h4>
                <p>
                  Dynamically target high-payoff intellectual capital for
                  customized technologies.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">
                  Hypo Alpe-Adria-Bank, 2004-2006
                </h4>
                <p>
                  Progressively maintain extensive infomediaries via extensible
                  niches.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">
                  Ministry of Finance of Republic, 2007-2009
                </h4>
                <p>
                  Proactively fabricate one-to-one materials via effective
                  e-business.
                </p>
              </li>
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

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Taraf - Kariyer Bilgileri Başlığı */}
          <div className="lg:col-span-1">
            <h2 className="text-base font-normal mb-4">1997-2007</h2>
            <h3 className="text-4xl font-bold mb-6">Career</h3>
            <p className="text-lg mb-6">
              The changing legislation introduces new challenges for
              implementation which attorneys must be aware of.
            </p>
          </div>

          {/* Orta Taraf - Kariyer Bilgileri Listesi */}
          <div className="lg:col-span-1">
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Law Firm X, 1997-2000</h4>
                <p>
                  Developed comprehensive strategies to enhance client
                  satisfaction and retention through innovative solutions.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">
                  Legal Consultancy Y, 2001-2003
                </h4>
                <p>
                  Advised on complex legal issues while ensuring compliance with
                  evolving regulations and laws.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">
                  Government Agency Z, 2004-2006
                </h4>
                <p>
                  Played a pivotal role in drafting legislation that impacted
                  public policy and legal frameworks.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Private Practice A, 2006-2007</h4>
                <p>
                  Specialized in corporate law, providing legal advice to
                  businesses on mergers and acquisitions.
                </p>
              </li>
            </ul>
          </div>

          {/* Sağ Taraf - Resimler */}
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
