import styled from "styled-components";

// componente que contem a label mais o input
export const FieldContent = styled.View`
    /* define o valor da largaru como o valor da props definida props.fieldWidth */
    width: ${props => `${props.fieldWidth}%`}
`