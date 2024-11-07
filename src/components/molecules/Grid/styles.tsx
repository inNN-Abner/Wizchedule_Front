import styled from 'styled-components/native'

export const Grid = styled.Text
<{ align?: string; pdd?: string; mgleft?: string; ftSz?: string; ftype?: string; color?: string; bg?: string; wdt?: string; hgt?: string; mgtop?: string; dir?: string; bdrd?: string }>`
  textAlign: ${({ align }) => align || 'center'};
  padding: ${({ pdd, theme }) => theme.metrics.px([pdd || 0])}px;
  textAlignVertical: center;
  border-radius: ${({ bdrd, theme }) => theme.metrics.px([bdrd || 5])}px;
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 5])}px;  
  color: ${({ color, theme }) => theme.colors[color || 'white']};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'gray']};
  width: ${({ wdt }) => (wdt ? (wdt) : '80px')};
  height: ${({ hgt }) => (hgt ? (hgt) : '50px')};
  font-family: ${({ ftype, theme }) => theme.fonts[ftype || 'bold']};
  font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(10)}px`)};
  marginLeft: ${({ mgleft }) => (mgleft ? (mgleft) : '5px')};
  overflow: hidden;
`