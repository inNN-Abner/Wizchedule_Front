import { SubContainer, TimeInput, SubtitleText, Windows } from '../../../components'

export const DefineTime = () => {
  return (

    <Windows 
    dir='row' 
    mgtop='50'
    wdt='350'
    hgt='100'
    bg='darkGrayII'
    >
        <SubContainer maxhgt='100' wdt='150' align='center' bg='darkGrayII'>
            <SubtitleText  mgtop='5' pddleft='0' mgleft='0' color='white' ftSz='18'>Início</SubtitleText>
            <TimeInput pddlft='0' wdt='100' mgtop='5' placeholder='__ : __ ' color={'darkBlue'}></TimeInput>
        </SubContainer>

        <SubContainer maxhgt='100' wdt='150' align='center' bg='darkGrayII' >
            <SubtitleText mgtop='5' pddleft='0' color='white' ftSz='18'>Fim</SubtitleText>
            <TimeInput pddlft='0' wdt='100' mgtop='5' placeholder='__ : __ ' color={'darkBlue'}></TimeInput>
        </SubContainer>

</Windows>
    )
}
