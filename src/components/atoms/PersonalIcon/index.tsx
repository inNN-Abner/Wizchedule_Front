import { ImageSourcePropType } from 'react-native'
import { PSIcon } from './styles'

interface PSProps{
    source: ImageSourcePropType
    wdt?: string
    hgt?: string
}

export const PersonalIcon = ({ source, wdt, hgt }: PSProps) => {
    return (
        <PSIcon 
            source={source} 
            wdt={wdt}
            hgt={hgt}
            />
    )
}
