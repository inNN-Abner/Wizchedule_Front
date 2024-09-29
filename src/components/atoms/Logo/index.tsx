import logoWizchedule from '../../../../assets/Logo_Wizchedule.png'
import { LogoImage } from './styles'

interface LogoProps {
    source?: string
    wdt?: string
    hgt?: string
    mgTop?: string
    jstCont?: string
}

export const Logo = ({ source, wdt, hgt, mgTop, jstCont }: LogoProps) => {
    return (
        <LogoImage source={source}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        jstCont={jstCont}/>
    )
}
