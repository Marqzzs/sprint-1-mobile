import { InputText } from "./style"

export function Input({placeholder, editable, fieldValue, onChangeText, keyboardType, maxLength}) {
    return(
        <InputText 
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType} 
            maxLength={maxLength} 
            value={fieldValue} 
            onChangeText={onChangeText}
        />
    )
}
