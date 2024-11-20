import styled from 'styled-components/native'

export const PSIcon = styled.Image
 <{ mgtop?: string; wdt?: string; hgt?: string; mgleft?: string; dir?: string }>`
   border-radius: 100px;
   marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 15])}px;
   width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : `${theme.metrics.px(10)}px`)};
   height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` :  `${theme.metrics.px(100)}px`)};
   marginLeft: ${({ theme, mgleft }) => (mgleft ? `${theme.metrics.px(mgleft)}px` : `${theme.metrics.px(10)}px`)};
 `