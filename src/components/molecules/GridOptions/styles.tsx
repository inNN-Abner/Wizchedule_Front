import styled from 'styled-components/native'

export const ItemListView = styled.View
<{ align?: string; justify?: string; bg?: string; wdt?: string; hgt?: string; mgtop?: string; mgleft?: string; dir?: string; bdrd?: string; bdrdBL?: string; bdrdBR?: string; bdrdTL?: string; bdrdTR?: string }>`
  display: flex;
  flexDirection: ${({ dir }) => dir || 'row'};
  border-radius: ${({ bdrd, theme }) => theme.metrics.px([bdrd || 10])}px;
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 7])}px;
  marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 20])}px;  
  background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
  width: ${({ wdt }) => (wdt ? (wdt) : '150px')};
  height: ${({ hgt }) => (hgt ? (hgt) : '50px')};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'center'};
`