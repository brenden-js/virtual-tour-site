import {Icons} from "@/components/icons";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

export const PricingBlock = ({type, price, showLearnMoreButton}: {
  showLearnMoreButton: boolean,
  type: string,
  price: string
}) => {
  // pass in "pricing" as the type prop for additional pricing information displayed
  return (
    <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
      <div className="grid gap-6">
        {type === "pricing" ? (
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in our Matterport tours
          </h3>
        ) : (
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in this Matterport tour
          </h3>
        )}
        <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4" /> Unlimited Hosting
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4" /> Next Day Turnaround
          </li>

          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4" /> 3D Property Capture
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4" /> Industry Standard Matterport Pro2 Cameras
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4" /> Professional Customer Service
          </li>
          <li className="flex items-center">
            <Icons.check className="mr-2 h-4 w-4" /> No Hidden Fees
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <div>
          {type === "pricing" ? (
            <>
              <h4 className="text-7xl font-bold">{price}</h4>
              <p className="text-sm font-medium text-muted-foreground">
                Starting at
              </p>
            </>
          ) : (
            <>
              <h4 className="text-5xl font-bold">{price}</h4>
              <p className="text-sm font-medium text-muted-foreground">
                One time payment
              </p>
            </>
          )}

        </div>
        {type === "pricing" ? (
          <>
            <Link
              href="/quote"
              className={cn(buttonVariants({size: "lg"}))}
            >
              Book Now
            </Link>
            {showLearnMoreButton && (
              <Link
                href="/learn"
                className={cn(buttonVariants({variant: "outline", size: "lg"}))}
              >
                Learn More
              </Link>
            )}
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  )
}
