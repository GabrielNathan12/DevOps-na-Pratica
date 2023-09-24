# DevOps-na-Pratica

## Exercício Prático 1
- Atividade 1.
  Primeiro passo, verificar se o Docker está rodando com o Comando <br>
  sudo systemctl status docker <br>
  Se não estiver digitar o seguinte comando para ele stardar. <br>
  sudo systemctl start docker <br>
  Com o Docker rodando agora pode fazer o Dowload da imagem do Ubuntu, com o seguinte comando. <br>
  sudo docker run -it ubuntu <br>

  Isso fará com que a imagem oficial do Ubuntu seja baixada e assim que acabar voçê irá entrar no terminal do Ubuntu. <br>
  Dentro do terminal, pode ser executado o seguinte comando. <br>
  apt update <br>
  Isso irá fazer uma atualização dos pacotes instalados por padrão no Ubuntu. <br>
  Feito isso, agora só dar o seguinte comando para instalar o Curl <br>
  apt install -y curl <br>
  Esse comando irá fazer a instalação do curl no Ubunto. <br>
  Para ver se realmente o Curl está instado, basta digitar o seguinte comando. <br>
  
  curl --version <br>
  
  ![Screenshot_20230924_153351](https://github.com/GabrielNathan12/DevOps-na-Pratica/assets/76185909/47d9d949-eb61-40c0-9f24-11d828a5b365)
  
  
