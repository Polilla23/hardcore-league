'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react'

import {
  CostaAtlantidaLogo,
  ElHatoLogo,
  EnzismoLogo,
  EuskadiLogo,
  FerroLogo,
  InterGetafeLogo,
  LaTripleLogo,
  RiverMunichLogo,
  SolDeMayoLogo,
  TacandeLogo,
  ValleSecoLogo,
} from '@/app/utils/Image'

export const MatchCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        freeMode={true}
        modules={[Navigation, FreeMode]}
        className="w-[50vw] h-[10vh] mx-48"
      >
        <SwiperSlide className="flex h-3/4 items-center justify-around cursor-default">
          <Card className="grid grid-cols-1 grid-rows-3 justify-center items-center w-full h-full">
            <div className="flex flex-col pb-1 pl-4 mt-2 mb-2">
              <p className="text-sm font-semibold">Fecha 1</p>
            </div>
            <div className="flex flex-row justify-between gap-1">
              <span className="flex flex-row gap-3 pl-4 py-2">
                <EnzismoLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Enzismo FC</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
            <div className="flex flex-row justify-between gap-1 mb-2">
              <span className="flex flex-row justify-between gap-3 pl-4 py-2">
                <InterGetafeLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Inter de Getafe</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="flex h-3/4 items-center justify-around cursor-default">
          <Card className="grid grid-cols-1 grid-rows-3 justify-center items-center w-full h-full">
            <div className="flex flex-col pb-1 pl-4 mt-2 mb-2">
              <p className="text-sm font-semibold">Fecha 1</p>
            </div>
            <div className="flex flex-row justify-between gap-1">
              <span className="flex flex-row gap-3 pl-4 py-2">
                <EnzismoLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Enzismo FC</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
            <div className="flex flex-row justify-between gap-1 mb-2">
              <span className="flex flex-row justify-between gap-3 pl-4 py-2">
                <InterGetafeLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Inter de Getafe</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="flex h-3/4 items-center justify-around cursor-default">
          <Card className="grid grid-cols-1 grid-rows-3 justify-center items-center w-full h-full">
            <div className="flex flex-col pb-1 pl-4 mt-2 mb-2">
              <p className="text-sm font-semibold">Fecha 1</p>
            </div>
            <div className="flex flex-row justify-between gap-1">
              <span className="flex flex-row gap-3 pl-4 py-2">
                <EnzismoLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Enzismo FC</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
            <div className="flex flex-row justify-between gap-1 mb-2">
              <span className="flex flex-row justify-between gap-3 pl-4 py-2">
                <InterGetafeLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Inter de Getafe</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="flex h-3/4 items-center justify-around cursor-default">
          <Card className="grid grid-cols-1 grid-rows-3 justify-center items-center w-full h-full">
            <div className="flex flex-col pb-1 pl-4 mt-2 mb-2">
              <p className="text-sm font-semibold">Fecha 1</p>
            </div>
            <div className="flex flex-row justify-between gap-1">
              <span className="flex flex-row gap-3 pl-4 py-2">
                <EnzismoLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Enzismo FC</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
            <div className="flex flex-row justify-between gap-1 mb-2">
              <span className="flex flex-row justify-between gap-3 pl-4 py-2">
                <InterGetafeLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Inter de Getafe</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="flex h-3/4 items-center justify-around cursor-default">
          <Card className="grid grid-cols-1 grid-rows-3 justify-center items-center w-full h-full">
            <div className="flex flex-col pb-1 pl-4 mt-2 mb-2">
              <p className="text-sm font-semibold">Fecha 1</p>
            </div>
            <div className="flex flex-row justify-between gap-1">
              <span className="flex flex-row gap-3 pl-4 py-2">
                <EnzismoLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Enzismo FC</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
            <div className="flex flex-row justify-between gap-1 mb-2">
              <span className="flex flex-row justify-between gap-3 pl-4 py-2">
                <InterGetafeLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Inter de Getafe</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="flex h-3/4 items-center justify-around cursor-default">
          <Card className="grid grid-cols-1 grid-rows-3 justify-center items-center w-full h-full">
            <div className="flex flex-col pb-1 pl-4 mt-2 mb-2">
              <p className="text-sm font-semibold">Fecha 1</p>
            </div>
            <div className="flex flex-row justify-between gap-1">
              <span className="flex flex-row gap-3 pl-4 py-2">
                <EnzismoLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Enzismo FC</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
            <div className="flex flex-row justify-between gap-1 mb-2">
              <span className="flex flex-row justify-between gap-3 pl-4 py-2">
                <InterGetafeLogo className="w-6 h-6" />
                <p className=" text-black font-normal">Inter de Getafe</p>
              </span>
              <p className="pr-4 py-2 inline-block self-end">0</p>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
