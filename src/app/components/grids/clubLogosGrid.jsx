'use client'

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

export function ClubLogosGrid() {
  const logos = {
    costaAtlandida: (
      <a href="/">
        <CostaAtlantidaLogo />
      </a>
    ),
    elHato: (
      <a href="/">
        <ElHatoLogo />
      </a>
    ),
    enzismo: (
      <a href="/">
        <EnzismoLogo />
      </a>
    ),
    euskadi: (
      <a href="/">
        <EuskadiLogo />
      </a>
    ),
    ferro: (
      <a href="/">
        <FerroLogo />
      </a>
    ),
    interGetafe: (
      <a href="/">
        <InterGetafeLogo />
      </a>
    ),
    laTriple: (
      <a href="/">
        <LaTripleLogo />
      </a>
    ),
    riverMunich: (
      <a href="/">
        <RiverMunichLogo />
      </a>
    ),
    solDeMayo: (
      <a href="/">
        <SolDeMayoLogo />
      </a>
    ),
    tacande: (
      <a href="/">
        <TacandeLogo />
      </a>
    ),
    valleSeco: (
      <a href="/">
        <ValleSecoLogo />
      </a>
    ),
  }

  return (
    <div className="flex w-full h-20 items-center justify-center">
      <ul className="flex flex-row w-full gap-6">
        {Object.values(logos).map((logo, index) => (
          <li className="hover:scale-125" key={index}>
            {logo}
          </li>
        ))}
      </ul>
    </div>
  )
}
