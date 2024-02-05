import { Label } from "../Label"
import { Input } from "../Input"
import { FieldContent } from "./style"

export const BoxImput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLength,
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <Input 
                placeholder={placeholder}
                editable={editable}
                KeyType={KeyType}
                maxLength={maxLength} 
                // {/* Aqui está a correção */}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />

        </FieldContent>
    )
}
