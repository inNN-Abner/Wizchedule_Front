import { ItemPhoto } from './styles'

interface ContactPhotoProps{
    source?: string
    wdt?: string
    hgt?: string
    bdrd?: string
    mgtop?: string
    mgleft?: string
}

export const ContactPhoto = ({ source, wdt, hgt, mgleft, mgtop, bdrd }: ContactPhotoProps) => {
    return (
        <ItemPhoto 
        source={source}
        mgleft={mgleft}
        mgtop={mgtop}
        bdrd={bdrd}
        wdt={wdt}
        hgt={hgt}
        />
    )
}
