import styled from 'styled-components/native'

export const StyledButton = styled.TouchableOpacity
<{ color?: string; dir?: string; align?: string; justify?: string; bg?: string; wdt?: string; hgt?: string; bdrd?: string; mgleft?: string; mgtop?: string; source?: string }>`
    flexDirection: ${({ dir }) => dir || 'column'};
    width: ${({ wdt }) => (wdt ? (wdt) : '165px')};
    height: ${({ hgt }) => (hgt ? (hgt) : '48px')};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkRed']};
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    border-radius: ${({ bdrd, theme }) => theme.metrics.px([bdrd || 20])}px;
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 20])}px;
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 0])}px;
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
    source: ${({ source }) => source || 'Edit'};
`

export const ButtonText = styled.Text
<{ color?: string; ftSz?: string; mgleft?: string; }>`
    font-family: 'PTSans_400Regular';
    font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(20)}px`)};
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 0])}px;
    font-weight: bold;
`