import { ContainerHeader } from "../Container/Style"
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style"

export const Header = () => {
    return(
        <ContainerHeader>
            <BoxUser>
                <ImageUser source={{uri: "https://github.com/marqzzs.png"}} />
                <DataUser>
                    <TextDefault>Welcome</TextDefault>
                    <NameUser>Dr. Claudio</NameUser>
                </DataUser>
            </BoxUser>

            {/* Material icons */}

        </ContainerHeader>
    )
}