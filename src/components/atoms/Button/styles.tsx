import styled from 'styled-components/native'

export const StyledButton = styled.TouchableOpacity
    <{ color?: string; bg?: string; wdt?: string; hgt?: string; bdrd?: string; mgleft?: string; mgtop?: string; source?: string }>`
    width: ${({ wdt }) => (wdt ? (wdt) : '165px')};
    height: ${({ hgt }) => (hgt ? (hgt) : '48px')};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkRed']};
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    border-radius: ${({ bdrd, theme }) => theme.metrics.px([bdrd || 20])}px;
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 20])}px;
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 0])}px;
    justify-content: center;
    align-items: center;
    source: ${({ source }) => source || 'Edit'};
`

export const ButtonText = styled.Text<{ color?: string }>`
    font-family: 'PTSans_400Regular';
    font-size: ${({ theme }) => theme.metrics.px(20)}px;
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    font-weight: bold;
`