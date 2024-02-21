import { ContainerHeader } from "../Container/Style"
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style"
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
    return(
        <ContainerHeader>
            <BoxUser>
                <ImageUser source={{uri: "https://github.com/marqzzs.png"}} />
                <DataUser>
                    <TextDefault>Welcome!</TextDefault>
                    <NameUser>Dr. Claudio</NameUser>
                </DataUser>
            </BoxUser>
            <Ionicons name="notifications" size={24} color="white"/>
            {/* Material icons */}

        </ContainerHeader>
    )
}