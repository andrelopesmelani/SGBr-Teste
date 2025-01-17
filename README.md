# SGBr-Teste

> Este é um projeto React Native feito por André Lopes Melani.

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Requisitos](#requisitos)
- [Inicialização do projeto](#inicialização-do-projeto)
- [Estrutura do projeto](#estrutura-do-projeto)

---

## Sobre o projeto

- **Listagem de Marcas de Carros:** A aplicação permite visualizar uma lista de diferentes marcas de carros disponíveis.
- **Detalhamento de Modelos:** Cada marca possui seus modelos associados, que podem ser acessados de maneira prática.
- **Navegação otimizada com Slider:** Inclui um slider lateral que facilita o acesso rápido às informações das marcas de carros de forma performática.

---

## Requisitos

Para rodar o projeto, você precisará de:

- Node.js instalado (utilizei a versão 20.2.0)
- Expo CLI instalado (`npm install -g expo-cli`)
- Um dispositivo Android ou iOS conectado (opcional, caso queira testar em um dispositivo físico)
- Emulador Android/iOS instalado (recomendado para desenvolvimento)

---

## Inicialização do projeto

### Passo 1: Clonar o repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/andrelopesmelani/SGBr-Teste.git
```

### Passo 2: Navegar até o diretório do projeto

``` 
cd SGBr-Teste
```

### Passo 3: Instalar as dependências

``` 
npm install
```

### Passo 4: Iniciar o servidor Expo

``` 
expo start
```
ou
``` 
npx expo start
```

## Estrutura do projeto

```
SGBr-Teste/
├── src/
│   ├── navigation/          # Arquivos de navegação (React Navigation)
│   ├── context/             # Contextos globais e de autenticação
│   ├── components/          # Componentes reutilizáveis
│   ├── screens/             # Telas da aplicação
│   ├── themes/              # Temas e estilos
│   ├── utils/               # Funcões ou constants reutilizadas no projeto
│   └── @types/              # Tipagens de interfaces
├── assets/                   # Imagens e recursos adicionais
├── app.json                   # Configurações do aplicativo Expo
├── package.json               # Dependências e scripts do projeto
└── README.md   
```