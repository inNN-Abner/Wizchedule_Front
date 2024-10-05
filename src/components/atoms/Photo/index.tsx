import { ItemPhoto } from './styles'

interface ContactPhotoProps{
    source?: string
    wdt?: string
    hgt?: string
    mgtop?: string
    mgleft?: string
}

export const ContactPhoto = ({ source, wdt, hgt, mgleft, mgtop }: ContactPhotoProps) => {
    return (
        <ItemPhoto 
        source={source} 
        mgleft={mgleft}
        mgtop={mgtop}
        wdt={wdt}
        hgt={hgt}
        />
    )
}
