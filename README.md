<h2>PORTUGUÊS readme.md</h2>

<p>Olá, essa é uma versão simples do comando "say" para o discord.js.</p>  

<h5>A linha 6 do comando é algo inderminado, depende muito se você está fazendo um bot publico ou privado.</h5>

* No caso do seu bot for para um servidor próprio, um bot privado, você pode escolher usar o `hasPermission` com as flag e as permissoes, ou fazer como foi mostrado no say.js e apenas mude o nome para as role que você quer que tenha acesso ao comando

* Ou em casos de ser um bot publico você pode usar o seguinte comando:
```js
if(!message.member.hasPermission("MANAGE_MESSAGES"));
```
o `MANAGE_MESSAGES` foi um exemplo, tem diversas outras flag pra você usar.

Como o comando say funciona no código: O comando say pega a mensagem que você escreveu depois do prefix e do comando e guarda em uma constante, apagar a mensagem do autor e logo em seguida o bot enviar a sua mensagem no canal de texto que o comando foi executado, a mensagem estará armazenada na constante.
</p>

<h2>ENGLISH readme.md</h2>

Hello, this is a simple version of the "say" command for discord.js

<h5>Command line 6 is undefined, it depends a lot on whether you are making a public or private bot.</h5>

* In case your bot is for your own server, a private bot, you can choose to use `hasPermission` with the flag and permissions, or do as shown in say.js and just rename the role you want that has acess to command.

* Or in case of being a public bot you can use that command:
```js
if(!message.member.hasPermission("MANAGE_MESSAGES"));
```
`MANAGE_MESSAGES` was an example, there are several other flags for you to use.

How the say command works in the code: Say command takes the message you wrote after the prefix and the command and saves it in a constant, deletes the author's message and then the bot sends your message in the text channel that the command was executed, the message will be stored in the constant.
