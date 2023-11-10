import logoCmp from "@/components/logos/cmp.svg";
import logoCen from "@/components/logos/cen.svg";
import logoExp from "@/components/logos/exp.svg";
import logoCwb from "@/components/logos/cwb.svg";
import logoKw from "@/components/logos/kw.svg";
import logoRmx from "@/components/logos/rmx.svg";
import Image from "next/image";
import { type StaticImport} from "next/dist/shared/lib/get-img-props";

type LogoGroup = { name: string, logo: StaticImport }[][]


export const Logos = () => {

  const bigList: LogoGroup = [
            [
              {name: 'Cmp', logo: logoCmp as StaticImport},
              {name: 'Cen', logo: logoCen as StaticImport},
              {name: 'Exp', logo: logoExp as StaticImport},
            ],
            [
              {name: 'Cwb', logo: logoCwb as StaticImport},
              {name: 'Kw', logo: logoKw as StaticImport},
              {name: 'Rmx', logo: logoRmx as StaticImport},
            ],
          ]
  return (
    <div className="">
        <p className="text-center font-heading text-base text-slate-900">
          Proudly serving agents across Southern California
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {bigList.map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex h-20">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
  )
}
