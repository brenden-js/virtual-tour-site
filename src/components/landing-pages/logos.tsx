import logoCmp from "@/components/logos/cmp.svg";
import logoCen from "@/components/logos/cen.svg";
import logoExp from "@/components/logos/exp.svg";
import logoCwb from "@/components/logos/cwb.svg";
import logoKw from "@/components/logos/kw.svg";
import logoRmx from "@/components/logos/rmx.svg";
import Image from "next/image";


export const Logos = () => {
  return (
    <div className="">
        <p className="text-center font-heading text-base text-slate-900">
          Proudly serving agents across Southern California
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              {name: 'Cmp', logo: logoCmp},
              {name: 'Cen', logo: logoCen},
              {name: 'Exp', logo: logoExp},
            ],
            [
              {name: 'Cwb', logo: logoCwb},
              {name: 'Kw', logo: logoKw},
              {name: 'Rmx', logo: logoRmx},
            ],
          ].map((group, groupIndex) => (
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
