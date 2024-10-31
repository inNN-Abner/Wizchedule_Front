import { LogoImage } from './styles'

interface LogoProps {
    source?: string
    wdt?: string
    hgt?: string
    mgTop?: string
    mgleft?: string
    jstCont?: string
}

export const Logo = ({ source, wdt, hgt, mgTop, mgleft, jstCont }: LogoProps) => {
    return (
        <LogoImage 
        source={source}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        mgleft={mgleft}
        jstCont={jstCont}
        />
    )
}