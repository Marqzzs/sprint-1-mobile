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
        if (cep && cep.length <= 8) {
          const enderecoUrl = `https://viacep.com.br/ws/${cep}/json/`;
          const enderecoResponse = (await axios.get(enderecoUrl)).data;

          const estadoUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${enderecoResponse.uf}`;
          const estadoResponse = (await axios.get(estadoUrl)).data;

          setLogradouro(enderecoResponse.logradouro);
          setBairro(enderecoResponse.bairro);
          setCidade(enderecoResponse.localidade);
          setEstado(estadoResponse.nome);
          setUf(enderecoResponse.uf);
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
