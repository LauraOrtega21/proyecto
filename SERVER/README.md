# Instalacion para consumir apis

Inicializamos el git bash y verificamos que version del node tiene instalado nuestro dispositivo
```
Instalamos el node mas actualizado preferiblemente  la version 20.
```
Iniciamos el node en el git bash con el siguiente comando de manera global
npm install -g json-server
```
Luego creamos un archivo el cual se debe llamar db.json en el cual colocaremos la informacion que va a ser consumida
```
Nos dirigimos nuevamente al git bash en el cual vamos a iniciar el servidor 
npx json-server db.json
```
En el navegador buscamos local host o 127.0.0.1:3000 en el cual consultaremos toda la informacion q tiene el archivo db.json
```
Y para finalizar le damos ctrol c para permitir el escape 
