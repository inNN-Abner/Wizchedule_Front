import { ImageSourcePropType } from 'react-native'
import { PSIcon } from './styles'

interface PSProps{
    source: ImageSourcePropType
    wdt?: string
    hgt?: string
    mgtop?: string
    mgleft?: string
}

export const PersonalIcon = ({ source, wdt, hgt, mgtop, mgleft }: PSProps) => {
    return (
        <PSIcon 
            source={source} 
            wdt={wdt}
            hgt={hgt}
            mgtop={mgtop}
            mgleft={mgleft}
            />
    )
}

export const PersonalIcon = ({ source, wdt, hgt, mgtop, mgleft }: PSProps) => {
    return (
        <PSIcon 
            source={source} 
            wdt={wdt}
            hgt={hgt}
            mgtop={mgtop}
            mgleft={mgleft}
            />
    )
}
