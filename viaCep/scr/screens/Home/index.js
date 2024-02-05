import { View } from "react-native";
import { BoxImput } from "../../components/BoxImput";
import { ScrollForm, ContainerForm } from "./style";
import { DoubleInput } from "../../../styles";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  // hooks - state
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [uf, setUf] = useState();

  // hooks - effect
  useEffect(() => {
    // chamada da API
    async function fetchCep() {
      try {
        if (cep !== "" && cep.length <= 8) {
          const endereco = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
          );
          setLogradouro(endereco.data.logradouro);
          setBairro(endereco.data.bairro);
          setCidade(endereco.data.localidade);

          // Mapeamento de siglas de UF para nomes completos
          const ufToStateName = {
            AC: "Acre",
            AL: "Alagoas",
            AP: "Amapá",
            AM: "Amazonas",
            BA: "Bahia",
            CE: "Ceará",
            DF: "Distrito Federal",
            ES: "Espírito Santo",
            GO: "Goiás",
            MA: "Maranhão",
            MT: "Mato Grosso",
            MS: "Mato Grosso do Sul",
            MG: "Minas Gerais",
            PA: "Pará",
            PB: "Paraíba",
            PR: "Paraná",
            PE: "Pernambuco",
            PI: "Piauí",
            RJ: "Rio de Janeiro",
            RN: "Rio Grande do Norte",
            RS: "Rio Grande do Sul",
            RO: "Rondônia",
            RR: "Roraima",
            SC: "Santa Catarina",
            SP: "São Paulo",
            SE: "Sergipe",
            TO: "Tocantins",
          };
          // Dentro do seu useEffect, ao setar o estado, você pode usar o mapeamento
          setEstado(ufToStateName[endereco.data.uf]);
          setUf(endereco.data.uf);
        }
      } catch (error) {
        console.log("Erro ao buscar o CEP");
        console.log(error);
      }
    }

    fetchCep();
  }, [cep]);

  return (
    <ScrollForm>
      <ContainerForm>
        <BoxImput
          textLabel="informe o Cep:"
          placeholder={"Cep..."}
          KeyType="numeric"
          maxLength={9}
          editable={true}
          fieldValue={cep}
          onChangeText={(tx) => {
            return setCep(tx);
          }}
        />

        <BoxImput
          textLabel="Logradouro:"
          placeholder={"Logradouro..."}
          fieldValue={logradouro}
        />

        <BoxImput
          textLabel="Bairro:"
          placeholder={"Bairro..."}
          fieldValue={bairro}
        />

        <BoxImput
          textLabel="Cidade:"
          placeholder={"Cidade..."}
          fieldValue={cidade}
        />
        <DoubleInput>
          <BoxImput
            textLabel="Estado:"
            placeholder={"Estado..."}
            fieldWidth={70}
            fieldValue={estado}
          />

          <BoxImput
            textLabel="UF:"
            placeholder={"UF..."}
            fieldWidth={20}
            fieldValue={uf}
          />
        </DoubleInput>
      </ContainerForm>
    </ScrollForm>
  );
}
