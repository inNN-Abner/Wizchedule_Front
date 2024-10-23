import styled from 'styled-components/native'

export const LogoImage = styled.Image
 <{ wdt?: string; hgt?: string; mgTop?: string; mgRight?: string; jstCont?: string; source?: string }>`    
    source: ${({ source }) => source || 'Wizard'};
    justifyContent: ${({ jstCont }) => jstCont || 'flex-start'};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : `${theme.metrics.px(200)}px`)};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` :  `${theme.metrics.px(200)}px`)};
    marginTop: ${({ theme, mgTop }) => (mgTop ? `${theme.metrics.px(mgTop)}px` : `${theme.metrics.px(60)}px`)};
    marginRight: ${({ theme, mgRight }) => (mgRight ? `${theme.metrics.px(mgRight)}px` : `${theme.metrics.px(10)}px`)};
`