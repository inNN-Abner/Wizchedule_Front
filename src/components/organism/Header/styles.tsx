import styled from 'styled-components/native'

export const WhiteHeaderContainer = styled.View
    <{ bg?: string; wdt?: string; hgt?: string; justify?: string; dir?: string }>`
    display: flex;
    align-items: center; 
    margin-top: 15px;
    border-radius: 20px;
    margin-right: auto;
    flex-direction: ${({ dir }) => dir || 'row'};
    justify-content: ${({ justify }) => justify || 'space-between'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '80px')};
`