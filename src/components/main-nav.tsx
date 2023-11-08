"use client"

import {forwardRef, Fragment, useEffect, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BuildingOfficeIcon,
  CubeTransparentIcon, CurrencyDollarIcon,
  HomeIcon, HomeModernIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon, PhoneIcon} from '@heroicons/react/20/solid'
import {RoomLogo} from "@/components/icons/3d_room_logo";
import Link from 'next/link'
import {buttonVariants} from './ui/button'
import {cn} from "@/lib/utils";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Image from "next/image";

const solutions = [
  {
    name: 'Listing Agents',
    description: 'Supercharge your listings, sell more, sell higher, and sell faster.',
    href: '/for/listing-agents',
    icon: HomeModernIcon,
  },
  {
    name: 'Property Managers',
    description: 'Less in person showings, greater security, and more peace of mind.',
    href: '/for/property-managers',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'FSBO\'s', description: "Stand out on the market, get more buyers interested, and automate tours.",
    href: '/for/fsbo', icon: HomeIcon
  },
  {
    name: 'Buyers\' Agents',
    description: "Connect international buyers to homes better than anyone on the market.",
    href: '/for/buyers-agents',
    icon: CubeTransparentIcon,
  },
]

const callsToAction = [
  {name: 'Contact Sales', href: '/quote', icon: PhoneIcon},
]

const company = [
  {name: 'About', href: '/about', icon: InformationCircleIcon},
  {name: 'Blog', href: '/blog', icon: NewspaperIcon},
  {name: 'Privacy', href: '/privacy', icon: ShieldCheckIcon},
]
const resources = [
  {name: 'Service Areas', href: '/locations', icon: BookmarkSquareIcon},
  {name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon}
]
const blogPosts = [
  {
    id: 1,
    name: 'Our commitment to you',
    href: '/blog/our-commitment-to-agents',
    preview: 'Dedicated to providing you with fast, low cost, professional 3D virtual tour capture and hosting services.',
    imageUrl:
      '/images/blog/agent-commitment.png',
  },
  {
    id: 2,
    name: 'Matterport Reports 31% Less Days on Market for Listings with Virtual Tours',
    href: '/blog/accelerating-sales-with-virtual-tours',
    preview: 'Level up your marketing package with a 3D virtual tour.',
    imageUrl:
      '/images/blog/hand-holding-house.png',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const MainNav = () => {
  const [showCTA, setShowCTA] = useState(true);

  const path = usePathname();

  useEffect(() => {
    if (path === '/quote') {
      setShowCTA(false)
    } else {
      setShowCTA(true)
    }
  }, [path])


  return (
    <Popover className="relative bg-white">
      <div className="pointer-events-none absolute inset-0 z-30" aria-hidden="true" />
      <div className="relative z-20 ">
        <div
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <div>
            <Link href="/" className="flex">
              <span className="sr-only">Viewport</span>
              <RoomLogo />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({open}) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden bg-white shadow-lg md:block">
                        {({close}) => (
                          <>
                            <div
                              className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                              {solutions.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                                  onClick={() => close()}
                                >
                                  <div className="flex md:h-full lg:flex-col">
                                    <div className="shrink-0">
                                  <span
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-500 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span>
                                    </div>
                                    <div
                                      className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                      <div>
                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                      </div>
                                      <p className="mt-2 text-sm font-medium text-gray-600 lg:mt-4">
                                        Learn more
                                        <span aria-hidden="true"> &rarr;</span>
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="bg-gray-50">
                              <div
                                className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-x-10 sm:space-y-0 sm:px-6 lg:px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                      <span className="ml-3">{item.name}</span>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/locations" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Locations
              </Link>
              <Link href="/learn" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Our Process
              </Link>
              <Popover>
                {({open}) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden shadow-lg md:block">
                        {({close}) => (
                          <>
                            <div className="absolute inset-0 flex">
                              <div className="w-1/2 bg-white" />
                              <div className="w-1/2 bg-gray-50" />
                            </div>
                            <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                              <nav
                                className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:px-6 sm:py-12 lg:px-8 xl:pr-12">
                                <div>
                                  <h3 className="text-base font-medium text-gray-500">Company</h3>
                                  <ul role="list" className="mt-5 space-y-6">
                                    {company.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <Link
                                          href={item.href}
                                          className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                          onClick={() => close()}
                                        >
                                          <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                          <span className="ml-4">{item.name}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-base font-medium text-gray-500">Resources</h3>
                                  <ul role="list" className="mt-5 space-y-6">
                                    {resources.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <Link
                                          href={item.href}
                                          className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                          onClick={() => close()}
                                        >
                                          <item.icon className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                          <span className="ml-4">{item.name}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </nav>
                              <div className="bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 xl:pl-12">
                                <div>
                                  <h3 className="text-base font-medium text-gray-500">From the blog</h3>
                                  <ul role="list" className="mt-6 space-y-6">
                                    {blogPosts.map((post) => (
                                      <li key={post.id} className="flow-root">
                                        <Link
                                          href={post.href}
                                          className="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
                                          onClick={() => close()}
                                        >
                                          <div className="hidden shrink-0 sm:block">
                                            <Image
                                              className="h-20 w-32 rounded-md object-cover"
                                              src={post.imageUrl}
                                              alt="blog image"
                                              height="80"
                                              width="128"
                                            />
                                          </div>
                                          <div className="w-0 flex-1 sm:ml-8">
                                            <h4
                                              className="truncate text-base font-medium text-gray-900">{post.name}</h4>
                                            <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                                          </div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-6 text-sm font-medium">
                                  <Link
                                    href="/blog"
                                    className="text-gray-600 hover:text-gray-500"
                                    onClick={() => close()}
                                  >
                                    View all posts
                                    <span aria-hidden="true"> &rarr;</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              {showCTA && (
                <Link href="/quote" className={cn(buttonVariants({size: "lg"}))}>
                  Book Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed inset-x-0 top-0 z-30 origin-top-right rounded transition md:hidden"
        >
          <div className="ring-opacity/5 divide-y-2 divide-gray-50 rounded-xl bg-white shadow-lg">
            <div className="px-5 pb-6 pt-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <RoomLogo
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/pricing" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </Link>
                <Link href="/locations" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Service Areas
                </Link>
                <Link href="/about" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  About
                </Link>
                <Link href="/blog" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </Link>
              </div>
              <div className="mt-6 flex justify-evenly">
                <Link href="/quote" className={cn(buttonVariants({size: "lg"})) + " shadow-2xl"}>
                  Book Now
                </Link>
                <Link
                  href="/learn"
                  className={cn(buttonVariants({variant: "outline", size: "lg"}))}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
