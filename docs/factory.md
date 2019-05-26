# Factory

| **Data**   | **Versão** | **Descrição**               | **Autor(es)**  |
| ---------- | ---------- | --------------------------- | -------------- |
| 26/05/2019 | 0.1        | Adição da introdução e Factory Method no React Native | Guilherme Siqueira |


## Introdução
É um padrão criacional, que encapsula a criação de objetos, deixando as subclasses decidirem quais objetos criar. A tecnologia utilizada no desenvolvimento do *frontend* do Conosco é a [*React Native*](https://facebook.github.io/react-native/) utilizando *JavaScript*, portanto, não é possível utilizar interfaces. Entretanto, há formas de implementar o *Factory Method* no *React*, e é isso que vamos abordar aqui.

## Factory no *React Native*
No Conosco, o *Factory Method* foi implementado para criar uma fábrica de botões. No nosso caso, a estrutura do botão permanece a mesma, entretanto, o texto, as cores e as ações de cada botão é diferente entre si. Antes de implementar o factory, o nosso componente estava assim:
```javascript
import Button from '../../components/common/button';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/conosco_logo(sem_fundo).png')}
        />
        <Button
          text={'Entrar com Facebook'}
          color={'#4267B2'}
          textColor={'#fff'}
          icon={fb}
          onPress={() => this.props.dispatch(logIn(this.props.navigation))}
        />
        <Button
          text={'Entrar com e-mail'}
          color={'#6DBCD6'}
          textColor={'#fff'}
          icon={mail}
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <SeparatorOr />
        <Button
          text={'Cadastrar'}
          color={'#fff'}
          border
          borderColor={'#EFEFED'}
          textColor={'#79A39D'}
          icon={null}
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}
```
Como pode-se perceber, isso polui o nosso componente. Além disto, o botão permanece o mesmo, sendo só o seu tipo que muda. Este é um cenário bom para implementar o *Factory Method*. O *Button* não precisa se preocupar com o tipo de botões que ele contém, este será o trabalho da Fábrica que vamos construir.

### Implementando o *Factory Method*
Primeiro, criaremos um botão da forma mais abstrata possível, pois os produtos finais sobrescreverão essas propriedades:
```javascript
const button = ({ text, color, icon, onPress, border, textColor, borderColor, styleProps, loading }) => (
  <TouchableOpacity onPress={!loading ? onPress : () => {}} style={[styleProps, style.shadow, style.content, { backgroundColor: color }, border ? { borderColor, borderWidth: 1 } : {}]}>
    { icon ? <Image source={icon} style={style.image} /> : null }
    { loading ? <ActivityIndicator style={style.image} color={'white'} size="small" /> : null }
    <Text style={[style.text, { color: textColor }]}>{text}</Text>
  </TouchableOpacity>
);

var Button = React.createFactory((button));

export default Button;
```
O método createFactory retornará ao Button o seguinte formato:
```javascript
function React.createFactory<{
    text: any;
    color: any;
    icon: any;
    onPress: any;
    border: any;
    textColor: any;
    borderColor: any;
    styleProps: any;
    loading: any;
}>(type: React.FunctionComponent<{
    text: any;
    color: any;
    icon: any;
    onPress: any;
    border: any;
    textColor: any;
    borderColor: any;
    styleProps: any;
    loading: any;
}>): React.FunctionComponentFactory<...> (+6 overloads)
```
Que são propriedades que serão modificadas por quem instanciará este Button.

Após, criaremos a nossa fábrica. Ela lidará com a instanciação de cada tipo de botão:
```javascript
class ButtonFactory {
    static factoryMethod(data, props) {
        switch (data) {
            case 'facebook':
                return <Button
                text={'Entrar com Facebook'}
                color={'#4267B2'}
                textColor={'#fff'}
                icon={fb}
                onPress={() => props.dispatch(logIn(props.navigation))} 
              />
            case 'email':
                return <Button
                text={'Entrar com e-mail'}
                color={'#6DBCD6'}
                textColor={'#fff'}
                icon={mail}
                onPress={() => props.navigation.navigate('Login')}
              />
            case 'register':
              return <Button
                text={'Cadastrar'}
                color={'#fff'}
                border
                borderColor={'#EFEFED'}
                textColor={'#79A39D'}
                icon={null}
                onPress={() => props.navigation.navigate('Register')}
              />
            case 'login':
              return <Button
              styleProps={styles.buttonLogin}
              text={'Entrar'}
              color={'#6DBCD6'}
              textColor={'#fff'}
              icon={null}
              onPress={props.login}
            />
            case 'register-login':
                return <Button
                styleProps={styles.buttonRegister}
                text={'Cadastrar e entrar'}
                color={'#6DBCD6'}
                textColor={'#fff'}
                icon={null}
                onPress={props.register}
              />
  
            default:
                return undefined;
        }
    }
}

export default (ButtonFactory);
```
Como é possível ver, cada botão possui diferentes textos, cores e ações, e antes isso estava delegado ao componente que fazia uso deles. Agora, o componente que foi mostrado no tópico anterior estará estruturado assim:
```javascript
import ButtonFactory from '../../factory/button/index';

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/conosco_logo(sem_fundo).png')}
        />
        { ButtonFactory.factoryMethod('facebook',this.props) }
        { ButtonFactory.factoryMethod('email',this.props) }
        <SeparatorOr />
        { ButtonFactory.factoryMethod('register',this.props) }
      </View>
    );
  }
}
```
O diagrama que representa essa fábrica está logo abaixo:

![diagrama-factory](https://i.imgur.com/N53rCrr.png)

O que ocorreu neste processo foi:
- A fábrica cria botões com o método de construção factoryMethod()
- A fábrica pode criar vários tipos diferentes de objetos que compartilham da mesma "interface" Button.

O Factory Method deixou o nosso compomente ainda mais "puro", extraindo mais lógica ainda, tornando-os mais legíveis.