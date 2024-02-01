import { InputText } from "./style"

export function Input({placeholder, editable, fieldvalue, onChangeText, KeyType, maxLenght}) {
    return(
        <InputText 
            placeholder={placeholder}
            editable={editable}
            keyBoardType={KeyType}
            maxLenght={maxLenght}
            value={fieldvalue}
            onChangeText={onChangeText}
        />
        
    )
}