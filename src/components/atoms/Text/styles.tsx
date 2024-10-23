import styled from 'styled-components/native'

export const TitleText = styled.Text
  <{ color?: string; mgtop?: string; ftype?: string; ftSz?: string; jtContent?: string; mgleft?: string }>`
  font-family: ${({ ftype, theme }) => theme.fonts[ftype || 'bold']};
  font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(42)}px`)};
  color: ${({ color, theme }) => theme.colors[color || 'white']};
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 10])}px;
  marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 10])}px;
  justify-content: ${({ jtContent }) => jtContent || 'flex-start'};
`

export const TitleInput = styled.Text
  <{ color?: string; pddleft?: string; mgleft?: string; mgtop?: string; alignSelf?: string; ftype?: string; ftSz?: string }>`
  font-family: ${({ ftype, theme }) => theme.fonts[ftype || 'regular']};
  font-weight: bold;
  align-alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'};
  font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(22)}px`)};
  color: ${({ color, theme }) => color || theme.colors.lightGray };
  paddingLeft: ${({ pddleft, theme }) => theme.metrics.px([pddleft || 70])}px;
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 10])}px;
  marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 0])}px;
`

export const HeaderText = styled.Text
  <{ mgleft?: string; wdt?: string; color?: string; cor?: string; mgtop?: string; alignSelf?: string; ftSz?: string; ftWgt?: string; ftype?: string }>`
  paddingLeft: 10px;
  font-family: ${({ ftype, theme }) => theme.fonts[ftype || 'regular']};
  font-weight: ${({ ftWgt }) => ftWgt || 'normal' };
  font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(10)}px`)};
  align-alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'};
  color: ${({ color, theme }) => theme.colors[color || 'darkBlue']};
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 5])}px;
  marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 0])}px;
  width: ${({ wdt }) => [wdt || '225%']};
`

export const ContactNameText = styled.Text
  <{ color?: string; cor?: string; mgtop?: string; mgleft?: string; alignSelf?: string; ftSz?: string; ftWgt?: string; ftype?: string }>`
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    font-family: ${({ ftype, theme }) => theme.fonts[ftype || 'regular']};
    font-weight: ${({ ftWgt }) => ftWgt || 'bold' };
    font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(12)}px`)};
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 0])}px;
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 0])}px;
`

export const ContactInfoText = styled.Text
  <{ color?: string; cor?: string; mgtop?: string; mgleft?: string; mgright?: string; alignSelf?: string; ftSz?: string; ftWgt?: string; ftype?: string }>`
    color: ${({ color, theme }) => theme.colors[color || 'darkRed']};
    font-family: ${({ ftype, theme }) => theme.fonts[ftype || 'regular']};
    font-weight: ${({ ftWgt }) => ftWgt || 'normal' };
    font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(11)}px`)};
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 0])}px;
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 0])}px;
    marginRight: ${({ mgright, theme }) => theme.metrics.px([mgright || 0])}px;
`