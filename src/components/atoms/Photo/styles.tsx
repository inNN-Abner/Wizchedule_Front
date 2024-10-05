import styled from 'styled-components/native'

export const ItemPhoto = styled.Image
<{ source?: string; mgtop?: string; mgleft?: string; wdt?: string; hgt?: string; dir?: string }>`
    border-radius: 100px;
    source: ${({ source }) => source || 'Wizard'};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : `${theme.metrics.px(50)}px`)};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` :  `${theme.metrics.px(50)}px`)};
    marginTop: ${({ theme, mgtop }) => (mgtop ? `${theme.metrics.px(mgtop)}px` : `${theme.metrics.px(0)}px`)};
    marginLeft: ${({ theme, mgleft }) => (mgleft ? `${theme.metrics.px(mgleft)}px` : `${theme.metrics.px(10)}px`)};
`