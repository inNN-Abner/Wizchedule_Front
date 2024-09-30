import styled from 'styled-components/native'

export const InputText = styled.TextInput
    <{ color?: string; mgtop?: string; mgleft?: string }>`
    height: 50;
    width: 300;
    borderRadius: 20px;
    borderWidth: 1;
    paddingLeft:20px;
    marginTop: ${({ mgtop, theme }) => theme.metrics.px([mgtop || 20])}px;
    marginLeft: ${({ mgleft, theme }) => theme.metrics.px([mgleft || 10])}px;
    color: ${({ color, theme }) => color || theme.colors.darkBlue };
    backgroundColor: ${({ color, theme }) => color || theme.colors.white };
    placeholderTextColor: ${({ color, theme }) => color || theme.colors.darkBlue };
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