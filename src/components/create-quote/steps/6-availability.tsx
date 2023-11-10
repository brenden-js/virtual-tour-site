"use client"
import {Dispatch, SetStateAction, useState} from "react";
import dayjs from "dayjs";
import Image from "next/image";
import {DownArrow} from "@/components/icons/down-arrow";

type Day = number | null
export const AvailabilityStep = ({selectedTimes, setSelectedTimes}: {
  setSelectedTimes: Dispatch<SetStateAction<Array<string>>>,
  selectedTimes: Array<string>
}) => {
  const [dayCursor, setDayCursor] = useState<number>(3);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const days: Day[] = [...Array(dayCursor)].map((day, idx) => {
    // const now = new Date();
    // // we do not accept next day appointments after 1pm, so do not show this as an option
    // if (idx === 0 && (now.getHours() > 13)) {
    //   return null
    // }
    return new Date().setDate(new Date().getDate() + idx + 1)
  })

  const [viewingTime, setViewingTime] = useState(dayjs(days[0]).format('MM/DD'))
  const handleTimeCardClick = (isoTime: string) => setSelectedTimes((prev: string[]) => {
    // if the time already exists, then remove it
    console.log('CURR ISO STATE', prev)
    if (selectedTimes.includes(isoTime)) {
      return prev.filter((prevTime) => prevTime !== isoTime)
    }
    return [...prev, isoTime]
  });
  return (
    <div
      className="flex shrink-0 snap-center snap-always flex-col bg-gray-50/50 items-center justify-center px-2 py-44">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 flex flex-col md:block">
          <h2
            className="mb-1.5 text-center text-3xl font-semibold md:mb-0 md:inline-block md:text-left lg:text-3xl">Availability.</h2>
          <p className="ml-2 text-center text-2xl font-semibold text-gray-600 md:inline-block md:text-left md:text-3xl">
            When works for you?
          </p>
        </div>
      </div>
      <div className='my-5'>
        <h6>{`${selectedTimes.length} time(s) selected`}</h6>
      </div>
      <div className="w-4/5 xl:w-3/5">
        {days.map((_day) => {
          if (_day === null) return <div key={'not_available'}></div>
          const formattedDay = new Date(_day);
          return (
            <div
              key={_day}
              onClick={() => setViewingTime(dayjs(_day).format('MM/DD'))}
              className={'mb-4 cursor-pointer rounded-lg border border-gray-300 p-1 shadow-sm hover:border-gray-400 md:p-3'}
            >
              <div className={`grid grid-cols-4 gap-4 p-1`}>
                <div
                  className={`col-span-4 flex cursor-pointer items-center justify-between p-4 text-sm font-medium hover:border-gray-200 md:col-span-1 md:py-8`}>
                  <div>
                    <h6 className="text-xl">{dayjs(formattedDay).format('dddd')}</h6>
                    <p>{dayjs(formattedDay).format('MM/DD')}</p>
                  </div>
                  <p>{">"}</p>
                </div>
                {/*TIME CARDS*/}
                {viewingTime === dayjs(_day).format('MM/DD') && (
                  <>
                    <div
                      onClick={() => handleTimeCardClick(dayjs(new Date(formattedDay.setHours(9, 0, 0))).format())}
                      className={`col-span-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border md:col-span-1 ${selectedTimes.includes(dayjs(new Date(formattedDay.setHours(9, 0, 0))).format()) ? 'border-blue-500 bg-blue-100/20 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'} p-2 text-sm font-medium shadow-sm md:p-4 md:py-8`}>
                      <p className={'mb-1'}>Morning</p>
                      <div className={"flex flex-row"}>
                        <p>{dayjs(new Date(formattedDay.setHours(9, 0, 0))).format('h[:]mmA')}</p>
                        -
                        <p>{dayjs(new Date(formattedDay.setHours(10, 30, 0))).format('h[:]mmA')}</p>
                      </div>
                    </div>
                    <div
                      onClick={() => handleTimeCardClick(dayjs(new Date(formattedDay.setHours(11, 0, 0))).format())}
                      className={`col-span-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border md:col-span-1 ${selectedTimes.includes(dayjs(new Date(formattedDay.setHours(11, 0, 0))).format()) ? 'border-blue-500 bg-blue-100/20 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'} p-2 text-sm font-medium shadow-sm peer-checked:border-blue-500 md:p-4 md:py-8`}>
                      <p className={'mb-1'}>Midday</p>
                      <div className={"flex flex-row items-center"}>
                        <p>{dayjs(new Date(formattedDay.setHours(11, 0, 0))).format('h[:]mmA')}</p>
                        -
                        <p>{dayjs(new Date(formattedDay.setHours(12, 30, 0))).format('h[:]mmA')}</p>
                      </div>
                    </div>
                    <div
                      onClick={() => handleTimeCardClick(dayjs(new Date(formattedDay.setHours(13, 0, 0))).format())}
                      className={`col-span-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border md:col-span-1 ${selectedTimes.includes(dayjs(new Date(formattedDay.setHours(13, 0, 0))).format()) ? 'border-blue-500 bg-blue-100/20 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'} p-2 text-sm font-medium shadow-sm peer-checked:border-blue-500 md:p-4 md:py-8`}>
                      <p className={'mb-1'}>Afternoon</p>
                      <div className={"flex flex-row items-center justify-center"}>
                        <p>{dayjs(new Date(formattedDay.setHours(13, 0, 0))).format('h[:]mmA')}</p>
                        -
                        <p>{dayjs(new Date(formattedDay.setHours(14, 30, 0))).format('h[:]mmA')}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>);
        })}
      </div>
      <button
        className={'mt-3 rounded-3xl border border-gray-300 p-3 px-6 hover:border-gray-700'}
        onClick={() => setDayCursor((prev) => prev + 3)}
      >
        Show more times +
      </button>
      <div
        className={`flex flex-col items-center justify-center ${selectedTimes.length > 0 ? 'duration-400 animate-in fade-in delay-75' : 'invisible'}`}
      >
      <div className={`mt-12`}>Scroll down to
        continue
      </div>
              <DownArrow className={`mt-4 animate-bounce`} />
      </div>
    </div>
  )
}
