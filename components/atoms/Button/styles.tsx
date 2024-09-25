import styled from 'styled-components/native'

export const StyledButton = styled.TouchableOpacity
    <{ color?: string; bg?: string, mgtop?: string}>`
    width: ${({ theme }) => theme.metrics.px(165)}px;
    height: ${({ theme }) => theme.metrics.px(48)}px;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkRed']};
    border-radius: ${({ theme }) => theme.metrics.px(100)}px;
    justify-content: center;
    align-items: center;
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 20])}px;
`

export const ButtonText = styled.Text<{ color?: string }>`
    font-family: 'PTSans_400Regular';
    font-size: ${({ theme }) => theme.metrics.px(20)}px;
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    font-weight: bold;
`