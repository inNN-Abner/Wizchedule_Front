import styled from 'styled-components/native'

export const HeaderContainer = styled.View
<{bg?: string; wdt?: string; hgt?: string }>`
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-around;
    border-radius: 20px;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '10%')};
`

export const HeaderElements = styled.View
<{wdt?: string; hgt?: string}>`
    display: flex;
    width: 100%;
`