import styled from "styled-components/native";

export const ErrorMessage = styled.Text
  <{ color?: string; cor?: string; mgtop?: string; jtCt?: string; ftSz?: string; ftWgt?: string; ftype?: string }>`
  font-family: ${({ ftype, theme }) => theme.fonts[ftype || 'regular']};
  paddingLeft: 10px;
  font-weight: ${({ ftWgt }) => ftWgt || 'normal' };
  font-size: ${({ theme, ftSz }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(20)}px`)};
  color: ${({ color, theme }) => theme.colors[color || 'darkRed']};
  marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 8])}px;
`