import { Label } from "../Label"
import { Input } from "../Input"
import { FieldContent } from "./style"

export const BoxImput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onchangeText = null,
    KeyType = 'default',
    maxLength
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <Input 
                placeholder={placeholder}
                editable={editable}
                KeyType={KeyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onchangeText={onchangeText}
            />

        </FieldContent>
    )
}