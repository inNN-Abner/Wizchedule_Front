import styled from 'styled-components/native'

export const TitleText = styled.Text
  <{ color?: string; mgtop?: string }>`
  font-family: 'CinzelDecorative_700Bold';
  font-size: ${({ theme }) => theme.metrics.px(42)}px;
  color: ${({ color, theme }) => color || theme.colors.white };
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 10])}px;
`

export const TitleInput = styled.Text
  <{ color?: string; mgtop?: string; alignSelf?: string }>`
  font-family: 'PTSans_400Regular';
  font-weight: bold;
  paddingLeft: 70px;
  align-alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'};
  font-size: ${({ theme }) => theme.metrics.px(22)}px;
  color: ${({ color, theme }) => color || theme.colors.lightGray };
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 10])}px;
`

export const HeaderText = styled.Text
  <{ color?: string; cor?: string; mgtop?: string; alignSelf?: string; ftSz?: string; ftWgt?: string }>`
  font-family: 'PTSans_400Regular';
  paddingLeft: 10px;
  font-weight: ${({ ftWgt }) => ftWgt || 'normal' };
  align-alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'};
  font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(10)}px`)};
  color: ${({ color, theme }) => theme.colors[color || 'darkBlue']};
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 5])}px;
`