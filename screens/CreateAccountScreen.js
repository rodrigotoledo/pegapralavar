import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Content from '../components/Content'
import BouncyCheckbox from "react-native-bouncy-checkbox";


const CreateAccountScreen = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null)
  const [cellPhone, setCellPhone] = useState(null)
  const [phone, setPhone] = useState(null)
  const [address, setAddress] = useState(null)
  const [aboutCompany, setAboutCompany] = useState(null)
  return (
    <Content>
      <View className="w-full items-center bg-white rounded-md p-1 opacity-90 mb-2">
        <View className="border-gray-300 w-full border-2 rounded-md p-1">
          <View className="items-end justify-center">
            <Text className="text-lg font-bold text-gray-500">Quer trabalhar conosco?</Text>
          </View>
          <View className="justify-center space-y-3">
            <Text className="font-bold text-gray-500">Trabalhando com o aplicativo e site PegaPraLavar você terá inúmeras oportunidades de ser visto no mercado por clientes.</Text>
            <Text className="font-bold text-gray-500">Vamos explicar melhor: seu negócio será visto por pesquisas por clientes próximos a você e ao ser escolhido para prestar seu serviço, automagicamente também recebe uma notificação para realizar o orçamento.</Text>
            <Text className="font-bold text-gray-500">Seu cliente receberá também a resposta com orçamento, data e detalhes. Assim ele poderá dar prosseguimento por aceitar ou não.</Text>
            <Text className="font-bold text-lg text-gray-500">E finalmente ele, cliente, aceitando você já receberá o pagamento sem a taxa de intermediação (calma rsrs, você é tão pequena que nem notará), e assim realizará o serviço.</Text>
            <Text className="font-bold text-gray-500">E aí? Faz sentido pra você? Eu acho que sim hein.</Text>
          </View>
        </View>
      </View>
      <View className="w-full items-center bg-white rounded-md p-1 opacity-90 mb-2">
        <View className="border-gray-300 w-full border-2 rounded-md p-1">
          <View className="items-center justify-center">
            <Text className="text-lg font-bold text-gray-500">Vamos lá então? É rapidinho</Text>
          </View>
          <View className="justify-center space-y-3">
            <Text className="font-bold text-gray-500">Comece preenchendo os campos abaixo e logo em seguida leia e aceite os termos de contrato</Text>
            <View className="rounded-full bg-slate-400">
              <TextInput placeholder='Nome' className="p-2 border-white border m-1 rounded-full" placeholderTextColor='#1a202c' value={name} onChangeText={(text) => setName(text)} />
            </View>

            <View className="rounded-full bg-slate-400">
              <TextInput placeholder='Email' className="p-2 border-white border m-1 rounded-full" placeholderTextColor='#1a202c' value={email} onChangeText={(text) => setEmail(text)} />
            </View>

            <View className="rounded-full bg-slate-400">
              <TextInput placeholder='Telefone celular' className="p-2 border-white border m-1 rounded-full" placeholderTextColor='#1a202c' value={cellPhone} onChangeText={(text) => setCellPhone(text)} />
            </View>

            <View className="rounded-full bg-slate-400">
              <TextInput placeholder='Telefone fixo (opcional)' className="p-2 border-white border m-1 rounded-full" placeholderTextColor='#1a202c' value={phone} onChangeText={(text) => setPhone(text)} />
            </View>

            <View className="rounded-full bg-slate-400">
              <TextInput placeholder='Endereço comercial' className="p-2 border-white border m-1 rounded-full" placeholderTextColor='#1a202c' value={address} onChangeText={(text) => setAddress(text)} />
            </View>

            <View className="rounded-full bg-slate-400">
              <TextInput placeholder='Fale mais sobre seu negócio' className="p-2 border-white border m-1 rounded-full" placeholderTextColor='#1a202c' value={aboutCompany} onChangeText={(text) => setAboutCompany(text)} />
            </View>

            <TouchableOpacity>
              <Text className="font-bold text-gray-500">Ler Termos e Condições</Text>
            </TouchableOpacity>
            <BouncyCheckbox
              size={25}
              fillColor="gray"
              unfillColor="#FFFFFF"
              text="Deseja aceitar os termos e condições?"
              iconStyle={{ borderColor: "gray" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked) => {}}
            />
            
          </View>
        </View>
      </View>

      <View className="w-full items-center bg-white rounded-full p-1 mb-2">
        <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1">
          <Text className="text-xl text-slate-500 font-semibold">Criar conta e pronto, vamos lavar!</Text>
        </TouchableOpacity>
      </View>
    </Content>
  )
}

export default CreateAccountScreen
