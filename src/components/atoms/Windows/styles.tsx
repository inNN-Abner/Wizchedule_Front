import styled from 'styled-components/native'

export const DefineWindow = styled.View
<{ bg?: string; wdt?: string; hgt?: string; mgtop?: string; dir?: string; bdrd?: string; bdrdBL?: string; bdrdBR?: string }>`
  border-radius: ${({ bdrd, theme }) => theme.metrics.px([bdrd || 20])}px;
  border-bottom-left-radius: ${({ bdrdBL, theme }) => theme.metrics.px([bdrdBL || 20])}px;
  border-bottom-right-radius: ${({ bdrdBR, theme }) => theme.metrics.px([bdrdBR || 20])}px;
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 10])}px;  
  background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
  width: ${({ wdt }) => (wdt ? (wdt) : '80%')};
  height: ${({ hgt }) => (hgt ? (hgt) : '60%')};
`