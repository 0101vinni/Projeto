import React from 'react';
import { View, Text,FlatList, Image, StyleSheet, Button,ScrollView } from 'react-native';
import { useDados } from '../../API/Dados';

const TelaNBA = ({navigation}) => {
  console.log('TelaNBA')

  const { dados, isLoading, isError } = useDados();

  if (isLoading) {
    console.log('TelaNBA isLoading')
    return <Text>Carregando...</Text>;
  }

  if (isError) {
    console.log('TelaNBA isError')
    return <Text>Ocorreu um erro ao carregar os dados</Text>;
  }

  console.log('TelaNBA dados',  dados);

  const myRenderItem = ({item}) => {
    console.log('item', item);
    console.log('item.logo_time.url', item.logo_time.url)
    return (
      <View style={styles.corpo}>

        <ScrollView>
        <Image source={{ uri: item.logo_time.url }} style={styles.image} />
        <Text>Nome do time:{item.nome}</Text>
        <Text>Cidade:{item.cidade}</Text>
        <Text>Principal jogador:{item.estrela_do_time}</Text>
        </ScrollView>
      </View>
    )
  }
  return (
    <View>  
       <Button
        title="Ir para a tela inicial"
        onPress={() => navigation.navigate('TelaHome')}
      />
      <Button
        title="Ir para a tela do Futebol Brasileiro"
        onPress={() => navigation.navigate('TelaFutebolBrasileiro')}
      />
        <FlatList
          data={dados}
          keyExtractor={(item) => item.objectId}
          numColums={4}
          renderItem={myRenderItem}
        />
    </View>
  );
};

const styles = StyleSheet.create({
image:{
marginLeft:70,
width:60,
height:60,
justifyContent:'center',
},
corpo:{
  textAlign:'center',
  justifyContent:'center',
  marginBottom:60,
  marginLeft:75,
}
});

export default TelaNBA;
