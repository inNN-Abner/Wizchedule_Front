import styled from 'styled-components/native'

export const PSIcon = styled.Image
 <{ mgtop?: string; wdt?: string; hgt?: string; mgLeft?: string; dir?: string }>`
   border-radius: 100px;
   marginTop: 10;
   width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : `${theme.metrics.px(10)}px`)};
   height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` :  `${theme.metrics.px(100)}px`)};
   marginLeft: ${({ theme, mgLeft }) => (mgLeft ? `${theme.metrics.px(mgLeft)}px` : `${theme.metrics.px(10)}px`)};
 `