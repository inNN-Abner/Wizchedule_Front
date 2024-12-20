import styled from 'styled-components/native'

export const DefineWindow = styled.View
<{ align?: string; justify?: string; bg?: string; wdt?: string; hgt?: string; mgtop?: string; dir?: string; bdrd?: string; bdrdBL?: string; bdrdBR?: string; bdrdTL?: string; bdrdTR?: string }>`
  display: flex;
  flexDirection: ${({ dir }) => dir || 'row'};
  border-radius: ${({ bdrd, theme }) => theme.metrics.px([bdrd || 20])}px;
  border-bottom-left-radius: ${({ bdrdBL, theme }) => theme.metrics.px([bdrdBL || 20])}px;
  border-bottom-right-radius: ${({ bdrdBR, theme }) => theme.metrics.px([bdrdBR || 20])}px;
  border-top-left-radius: ${({ bdrdTL, theme }) => theme.metrics.px([bdrdTL || 20])}px;
  border-top-right-radius: ${({ bdrdTR, theme }) => theme.metrics.px([bdrdTR || 20])}px;
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 10])}px;  
  background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
  width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '90%')};
  height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '82%')};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  overflow: hidden;
`