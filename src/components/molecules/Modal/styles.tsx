import styled from 'styled-components/native'

export const DefineModal = styled.View
<{ bg?: string; align?: string; justify?: string; wdt?: string; hgt?: string; bdrd?: string; pdd?: string }>`
  margin: 30px;
  border-radius: ${({ bdrd, theme }) => theme.metrics.px([bdrd || 20])}px;
  background-color: ${({ bg, theme }) => theme.colors[bg || 'darkRed']};
  width: ${({ wdt, theme }) => (wdt ? (theme.metrics.px(wdt)) : '90%')};
  height: ${({ hgt, theme }) => (hgt ? (theme.metrics.px(hgt)) : '55%')};
  padding: ${({ pdd, theme }) => theme.metrics.px([pdd || 10])}px;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
`