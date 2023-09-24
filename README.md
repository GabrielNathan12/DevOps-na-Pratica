# DevOps-na-Pratica

## Exercício Prático 1
- Atividade 1. <br>
  Primeiro passo, verificar se o Docker está rodando com o Comando <br><br>
  sudo systemctl status docker <br><br>
  Se não estiver digitar o seguinte comando para ele stardar. <br><br>
  sudo systemctl start docker <br><br>
  Com o Docker rodando agora pode fazer o Dowload da imagem do Ubuntu, com o seguinte comando. <br><br>
  sudo docker run -it ubuntu <br><br>

  Isso fará com que a imagem oficial do Ubuntu seja baixada e assim que acabar voçê irá entrar no terminal do Ubuntu. <br><br>
  Dentro do terminal, pode ser executado o seguinte comando. <br><br>
  apt update <br><br>
  Isso irá fazer uma atualização dos pacotes instalados por padrão no Ubuntu. <br><br>
  Feito isso, agora só dar o seguinte comando para instalar o Curl <br><br>
  apt install -y curl <br><br>
  Esse comando irá fazer a instalação do curl no Ubunto. <br><br>
  Para ver se realmente o Curl está instado, basta digitar o seguinte comando. <br><br>
  
  curl --version <br><br>
  
  ![Screenshot_20230924_153351](https://github.com/GabrielNathan12/DevOps-na-Pratica/assets/76185909/47d9d949-eb61-40c0-9f24-11d828a5b365)
  
  <br><br>
- Atividade 2.<br>
  Primeiro criar um container com a imagem oficial do node, se por caso não tiver ela irá baixar automaticamente. <br><br>
  Comando <br>
  sudo docker run -itd --name gabriel-node node
  <br><br>
  Com a imagem oficial do node baixada agora é criar um arquivo javascript e conpialó para dentro do container.No meu caso eu criei um arquivo chamado app.js e ele está dentro da pasta ExercicioPratico1/Atividade2. <br> <br>
  Não esqueça de inicar um projeto em node para conseguir executar o arquivo. Para criar um projeto em node escreva o seguinte comando. <br><br>
  npm init <br><br>
  Agora com o arquivo criado e o container contendo a imagem oficial do node, basta agora copiar o arquivo app.js para dentro do container, para isso navegue até onde seu arquivo está e digite o seguinte comando. <br><br>
  sudo docker cp app.js gabriel-node:/app.js <br><br>
  Lembre-se que o nome do meu container é gabriel-node, se por acaso o seu for diferente não esqueça de atualizar. <br><br>
  Com o arquivo agora copiado, precisamos criar uma imagem a partir desse nosso container e para fazer isso digitamos o seguinte comando. <br><br>
  sudo docker commit gabriel-node imagem-node <br><br>
No meu caso eu escolhi o nome da imagem como imagem-node mas pode ser qualquer uma <br><br>
Agora com a nova imagem, executamos os seguintes comandos. <br><br>
sudo docker run -itd -p 8080:8080 imagem-node <br><br>
Isso iŕa instardar nossa imagem e mapeála para a porta 8080 <br><br>
Agora para executar o arquivo app.js nós precisamos primeiro obter o hash criado da imagem-node para isso nós usamos o comando. <br><br>
sudo docker ps -a <br><br>
![Screenshot_20230924_162834](https://github.com/GabrielNathan12/DevOps-na-Pratica/assets/76185909/4acc6bf8-c8ec-4b82-816a-8b5a5fbd103a)
<br><br>
Isso irá mostrar a listas dos container rodando, e a do meu caso possui um hash igual á 1fa23756437a. <br><br>
Com o hash obtido agora podemos executar o arquivo app.js dentro do container. <br><br>
Os comandos são, sudo docker exec -itd 1fa23756437a  /bin/bash <br><br>
node app.js <br><br>
![Screenshot_20230924_170941](https://github.com/GabrielNathan12/DevOps-na-Pratica/assets/76185909/dbf1394e-54af-4ff3-a257-c4e34e18effb)
<br><br>
Com isso teremos nosso arquivo app.js sendo executado dentro do container. Para realmente testar se está funcionando, basta entrar no seguinte link http://127.0.0.1:8080/

![Screenshot_20230924_171000](https://github.com/GabrielNathan12/DevOps-na-Pratica/assets/76185909/90714fdf-874b-4475-a3fe-b43ea31c37d0)
<br><br>

- Atividade 3 <br><br>
  ![Screenshot_20230924_181956](https://github.com/GabrielNathan12/DevOps-na-Pratica/assets/76185909/3583bbde-59ac-474e-b1c6-b2faa4348e3b)
<br><br>
![Screenshot_20230924_182029](https://github.com/GabrielNathan12/DevOps-na-Pratica/assets/76185909/d2b5c382-fff3-4000-86da-411824a7f9aa)
<br><br>
![Screenshot_20230924_182045](https://github.com/GabrielNathan12/DevOps-na-Pratica/assets/76185909/8cebaf82-22a6-4e4b-b7d9-f653f86c676e)
<br><br>
Os demais arquivos do docker-compose.yml, estão na pasta ExercicioPratico1/Atividade3
<br><br>

## Exercício Prático 2 <br>
O exercício prático 2, pede uma simples API to-do-list com apenas um CRUD que por sua vez só terá as requiisições GET e POST. O banco de dados solicitado foi o Postgres, com apenas uma tabela com os campos id, descricao e data_criaca, é necessário usar o docker-compose.yml e o Dockerfile, os demais arquivos estão no repositório ExercicioPratico2. <br><br>
Para executar navegue até o repositório aonde se encontra o docker-composer.yml e dê o seguinte comando. <br><br>
sudo docker-compose up -d <br><br>
Isso levantará a rede de container, lembrando que as configurações do banco deve estar de acordo com o seu banco.<br><br>
Depois para ver se foi levantado os container digite o seguinte comando <br><br>
sudo docker-compose ps <br><br>
Se deu certo, mostrará os containers levantado e rodando, depois disso navegue até o diretório app e de o seguinte comando. <br><br>
npm i <br> <br>
Isso instalará as depedências do node para essa API, logo após, dê o seguinte comando. <br><br>
node index.js <br><br>
Inicializará o servido, e vai estar rodando na página http://localhost:3000/tarefas <br> <br>
![Screenshot_20230924_201958](https://github.com/GabrielNathan12/DevOps-na-Pratica/assets/76185909/8c5a9747-166f-4157-8572-e9ee0a030897)


