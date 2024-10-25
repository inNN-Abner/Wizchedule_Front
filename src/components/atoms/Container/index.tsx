import styled from 'styled-components/native'

export const Container = styled.SafeAreaView
    <{ dir?: string; align?: string; maxhgt?: string; justify?: string; bg?: string; wdt?: string; hgt?: string }>`
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
    <{ mgleft?: string; mgtop?: string; bdrd?: string; dir?: string; wrap?: string; align?: string; justify?: string; bg?: string; wdt?: string; hgt?: string; maxhgt?: string }>`
    display: flex;
    flexWrap: ${({ wrap }) => wrap || 'nowrap'};
    border-radius: ${({ bdrd, theme }) => theme.metrics.px([bdrd || 20])}px;
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkBlue']};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '100%')};
    max-height: ${({ maxhgt }) => (maxhgt ? `${(maxhgt)}%` : '100%')};
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 10])}px;
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 0])}px;
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

export const SelectDay = styled.SafeAreaView
 <{ justify?: string; bdrdTL?: string; bdrdTR?: string; color?: string; align?: string; dir?: string; mgtop?: string; mgleft?: string; bg?: string; wdt?: string; hgt?: string}>`
    display: flex;
    border-radius: 10px;
    flexDirection: ${({ dir }) => dir || 'row'};
    justifyContent: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'}; 
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 20])}px;
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 0])}px;
    border-top-left-radius: ${({ bdrdTL, theme }) => theme.metrics.px([bdrdTL || 20])}px;
    border-top-right-radius: ${({ bdrdTR, theme }) => theme.metrics.px([bdrdTR || 20])}px;
    backgroundColor: ${({ bg, theme }) => theme.colors[bg || theme.colors.white]};
    color: ${({ color, theme }) => theme.colors[color || theme.colors.darkBlue]};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '85%')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '50px')};
`

export const ModalContainer = styled.SafeAreaView
 <{ justify?: string; align?: string }>`
    flex: 1;
    justifyContent: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'}; 
    backgroundColor: 'rgba(0, 0, 0, 0.5)';
`