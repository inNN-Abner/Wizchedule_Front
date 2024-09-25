import styled from 'styled-components/native'

export const Container = styled.View
    <{ dir?: string; align?: string; justify?: string; bg?: string; wdt?: string; hgt?: string }>`
    display: flex;
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'}; 
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkBlue']};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '100%')};
`

export const SubContainer = styled.View
    <{ dir?: string; align?: string; justify?: string; bg?: string; wdt?: string; hgt?: string }>`
    display: flex;
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'}; 
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkBlue']};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '100%')};
`