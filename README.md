<div align="center">
<h1 align="center"<strong> Clima API 🌞😎🌦️ </strong></h1>

<h2 align="center"><strong>Descrição do projeto / Tecnologias Usadas</strong></h2>

<p><strong>Projeto criado com a finalidade de ajudar um amigo a consumir sua primeira API.</strong></br>

Página Web simples na qual o usuário digita no campo a cidade desejada e recebe informações sobre o clima.<br>

Escolhemos o <strong> ReactJS </strong> como o framework de front-end da aplicação, pela facilidade de criar interfaces bonitas e usuais. A forma como os componentes são extensíveis, adaptáveis e escalonáveis.
</p>

<strong> Bootstrap </strong> por fornecer estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma...


<h2 align="center"><strong>Instalação / Configuração</strong></h2>

Primeiro passo instalar Node.JS

Criar o Projeto React.js dentro da pasta desejada

Segundo passo limpeza no projeto - apagando arquivos que não são necessários

App.css
App.test
index.css
logo.svg
reportWebVitals
setupTest

Porque? Na instalação básica do react veem muita coisa que não utilizamos

Logo após devemos apagar os imports desses arquivos e as chamadas de função para que o código não seja quebrado.

Seu melhor amigo essa hora irá ser o terminal, nele que você ve os erros que está dando e facilmente consegue indentificar
onde está o erro. Qual arquivo e em qual pasta por exemplo.

Ainda na parte de limpeza só que na pasta Public:

favicon
os 2 logos
manifest
robo

Estrutura mínima para rodar um projeto React.js:
imagem abaixo <br>
<div align="center">
<img align="center" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9920e3f5-95d2-4700-a3af-7107ac007439/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220302T132203Z&X-Amz-Expires=86400&X-Amz-Signature=c1fe94b7aabee99afcde3b10894927c82a7318f1fab668e58612cf5a8ace5d18&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject">
<div> <br>
OBS → Aqui iremos usar o BootStrap para facilitar a criação
  
Procurar no google cdn bootstrap
  
Dentro da pasta public no arquivo index.html, colar esse código:
  ![image](https://user-images.githubusercontent.com/61765226/156370738-d64e68c0-0621-4ccf-9613-e55d69e180a1.png)
  
É como se tivessemos importando um arquivo CSS normal, porém esse aqui se encontra na internet

Após terminamos essa configuração primária vamos direto para o arquivo App.js dentro da pasta src.

Nele fazemos nossas principais alterações, tudo aquilo que precisamos construir de fato!

<h2 align="center"><strong>Desenho da Arquitetura </strong></h2>
<img align="center" src="https://user-images.githubusercontent.com/61765226/156373702-0d5a43c4-3da2-4aa4-851e-a0fbd3c50320.png">




<h2 align="center"><strong>Imagens do Projeto</strong></h2>
  <img align="center" src="https://user-images.githubusercontent.com/61765226/156373321-5be1fbdd-8585-4819-9ad6-9c1c2bbfbf81.png">

</div>
