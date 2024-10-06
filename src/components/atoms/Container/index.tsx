import styled from 'styled-components/native'

export const Container = styled.SafeAreaView
    <{ dir?: string; align?: string; justify?: string; bg?: string; wdt?: string; hgt?: string }>`
    flex: 1;
    display: flex;
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'}; 
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkBlue']};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '100%')};
`

export const SubContainer = styled.SafeAreaView
    <{ mgleft?: string; bdrd?: string; dir?: string; flex?: string; align?: string; justify?: string; bg?: string; wdt?: string; hgt?: string; maxhgt?: string }>`
    display: flex;
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkBlue']};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '100%')};
    max-height: ${({ maxhgt }) => (maxhgt ? `${(maxhgt)}%` : '100%')};
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 10])}px;
`

export const ListContainer = styled.SafeAreaView
 <{ justify?: string, align?: string; dir?: string; mgtop?: string; mgleft?: string; bg?: string; wdt?: string; hgt?: string}>`
    display: flex;
    border-radius: 10px;
    flexDirection: ${({ dir }) => dir || 'row'};
    justifyContent: ${({ justify }) => justify || 'flex-start'};
    align-items: ${({ align }) => align || 'center'}; 
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 10])}px;
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 10])}px;
    backgroundColor: ${({ bg, theme }) => theme.colors[bg || 'white']};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '330px')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '60px')};
`