import React from 'react'
import { Container, Input, Break, Button, Text } from './styles/opt-form'

export default function OptForm( {children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({...restProps}){
    return <Input {...restProps}></Input>
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return (
        <Button {...restProps}>
            {children} <imp src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

OptForm.Break = function OptFormBreak({children, ...restProps}){
    return <Break {...restProps}></Break>
}