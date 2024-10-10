import styled from 'styled-components/native'

export const InputText = styled.TextInput
    <{ color?: string; mgtop?: string; pddlft?: string; mgleft?: string; bgColor?: string; wdt?: string; hgt?: string }>`
    borderRadius: 20px;
    borderWidth: 0;
    elevation: 15;
    paddingLeft: ${({ pddlft, theme }) => theme.metrics.px([pddlft || 20])}px;
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 20])}px;
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 10])}px;
    color: ${({ color, theme }) => theme.colors[color || 'darkBlue']};
    backgroundColor: ${({ bgColor, theme }) => theme.colors[bgColor || 'white']};
    width: ${({ theme, wdt }) => (wdt ? `${theme.metrics.px(wdt)}px` : '300px')};
    height: ${({ theme, hgt }) => (hgt ? `${theme.metrics.px(hgt)}px` : '50px')};
`

export const InputPassword = styled.TextInput
    <{ color?: string; mgtop?: string }>`
    height: 50;
    width: 300;
    borderRadius: 20px;
    borderWidth: 1;
    paddingLeft:20px;
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 20])}px;
    color: ${({ color, theme }) => color || theme.colors.darkBlue };
    backgroundColor: ${({ color, theme }) => color || theme.colors.white };
    placeholderTextColor: ${({ color, theme }) => color || theme.colors.darkBlue };
`