import React from 'react';

type OfficerNode = {
  title: string;
  teams?: string[];
};

type ManagerNode = {
  title: string;
  officers: OfficerNode[];
};

const managerStructure: ManagerNode[] = [
  {
    title: 'Programs Manager',
    officers: [
      {
        title: 'Field Officers',
        teams: ['Team Leads', 'Field Monitors']
      }
    ]
  },
  {
    title: 'Gender/Protection Manager',
    officers: [
      {
        title: 'Gender/Protection Officer',
        teams: ['MHPSS Officer', 'Protection/MHPSS Monitors']
      }
    ]
  },
  {
    title: 'Logistic/Supply Chain Manager',
    officers: [
      {
        title: 'Logistic Officer',
        teams: ['Logistic Assistants', 'Drivers']
      }
    ]
  },
  {
    title: 'Warehouse Manager',
    officers: [
      {
        title: 'Warehouse Officer',
        teams: ['Warehouse Assistants', 'Store Clerks']
      }
    ]
  },
  {
    title: 'Admin/Finance Manager',
    officers: [
      {
        title: 'Admin/HR Officer',
        teams: ['Admin/HR Assistants', 'Cleaners/Security']
      },
      {
        title: 'Finance Officer',
        teams: ['Finance Assistants', 'Cashiers']
      }
    ]
  },
  {
    title: 'MEAL Manager',
    officers: [
      {
        title: 'MEAL Officer',
        teams: ['MEAL Assistants', 'Data Assistants']
      }
    ]
  }
];

const ManagerColumn: React.FC<ManagerNode> = ({ title, officers }) => (
  <div className="flex flex-col items-center gap-4" key={title}>
    <div className="h-6 w-0.5 bg-black" />
    <div className="w-full max-w-[260px] rounded-xl bg-[#F47F1F] text-white px-5 py-4 text-center font-semibold shadow-md border-2 border-black">
      {title}
    </div>
    <div className="flex flex-col w-full max-w-[240px] gap-4">
      {officers.map((officer) => (
        <div key={officer.title} className="flex flex-col items-center gap-3">
          <div className="h-6 w-0.5 bg-black" />
          <div className="w-full rounded-xl bg-[#2563EB] text-white px-5 py-3 text-center font-semibold shadow border border-black">
            {officer.title}
          </div>
          {officer.teams && officer.teams.length > 0 && (
            <div className="flex flex-col gap-3 w-full max-w-[220px]">
              {officer.teams.map((team) => (
                <div key={team} className="flex flex-col items-center gap-2">
                  <div className="h-4 w-0.5 bg-black" />
                  <div className="w-full rounded-xl bg-[#7C3AED] text-white px-4 py-2 text-center text-sm font-semibold shadow border border-black">
                    {team}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Organogram: React.FC = () => {
  return (
    <section id="organogram" className="section-padding bg-[rgb(138,201,9)]">
      <div className="container-custom">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1024px] flex flex-col items-center gap-16">
          {/* Top Section */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-[auto_minmax(140px,220px)_minmax(520px,1fr)] gap-x-0 gap-y-12 items-center">
                <div className="w-[230px] h-[82px] rounded-xl bg-[#1D4ED8] text-white px-6 text-center font-semibold shadow-md border-2 border-black flex items-center justify-center lg:mr-6">
                  Board of Trustees
                </div>
                <div className="w-full h-0.5 bg-black relative lg:-mr-4">
                  <span className="absolute left-0 -top-2 border-y-[7px] border-y-transparent border-l-[14px] border-l-black rotate-180" />
                </div>
                <div className="row-span-2 relative">
                  <div className="relative bg-[#d1d5db] border-2 border-black rounded-[32px] px-10 py-10 text-center shadow-xl w-full min-w-[520px] min-h-[260px] flex flex-col justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <polyline
                        points="0,20 55,20 55,50 70,50"
                        fill="none"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                      <polyline
                        points="0,80 55,80 55,50 70,50"
                        fill="none"
                        stroke="black"
                        strokeWidth="2.5"
                      />
                    </svg>
                    <p className="text-2xl font-bold text-black tracking-wide uppercase relative z-10">
                      General Assembly
                    </p>
                    <div className="mt-8 flex justify-center relative z-10">
                      <div className="w-56 rounded-lg border-2 border-black bg-white px-6 py-3 font-semibold text-black">
                        Advisors
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[230px] h-[82px] rounded-xl bg-[#22C55E] text-white px-6 text-center font-semibold shadow-md border-2 border-black flex items-center justify-center lg:mr-6">
                  Executive Director
                </div>
                <div className="w-full h-0.5 bg-black relative lg:-mr-4">
                  <span className="absolute left-0 -top-2 border-y-[7px] border-y-transparent border-l-[14px] border-l-black rotate-180" />
                </div>
              </div>
            </div>
          </div>

          {/* Connector from General Assembly to Head of Operations */}
          <div className="w-full max-w-6xl flex justify-center">
            <div className="h-8 w-0.5 bg-black" />
          </div>

          {/* Head of Operations + Managers */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="h-6 w-0.5 bg-black" />
              <div className="w-full max-w-[300px] rounded-xl bg-[#F47F1F] text-white px-6 py-4 text-center font-semibold shadow-md border-2 border-black">
                Head of Operations
              </div>
              <div className="h-6 w-0.5 bg-black" />
            </div>

            <div className="relative w-full mt-4">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-black" />
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-10 pt-6">
                {managerStructure.map((manager) => (
                  <ManagerColumn key={manager.title} {...manager} />
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organogram;
