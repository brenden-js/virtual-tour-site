import type {House} from "@prisma/client";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import * as React from "react";
import Link from "next/link";

export const HouseItem = ({house}: { house: House }) => {
  return (
    <Card className="my-2">
      <CardHeader>
        <CardTitle>{house.stAddress}</ CardTitle>
        <CardDescription>
          {house.city}, {house.state} {house.zipCode}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{house.houseStatus}</p>
        <p>{house.id}</p>
        <p>{house.createdAt?.toLocaleString()}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/quote/${house.id}`}>
          <button className={cn(buttonVariants())}>View quote</button>
        </Link>
      </CardFooter>
    </Card>
  )
}
