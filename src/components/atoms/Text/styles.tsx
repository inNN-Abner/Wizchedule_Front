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
  <{ color?: string; mgtop?: string; alignSelf?: string; ftype?: string; ftSz?: string }>`
  font-family: ${({ ftype, theme }) => theme.fonts[ftype || 'regular']};
  font-weight: bold;
  paddingLeft: 70px;
  align-alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'};
  font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(22)}px`)};
  color: ${({ color, theme }) => color || theme.colors.lightGray };
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 10])}px;
`

export const HeaderText = styled.Text
  <{ color?: string; cor?: string; mgtop?: string; alignSelf?: string; ftSz?: string; ftWgt?: string; ftype?: string }>`
  font-family: ${({ ftype, theme }) => theme.fonts[ftype || 'regular']};
  paddingLeft: 10px;
  font-weight: ${({ ftWgt }) => ftWgt || 'normal' };
  align-alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'};
  font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(10)}px`)};
  color: ${({ color, theme }) => theme.colors[color || 'darkBlue']};
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 5])}px;
  width: 225%;
`