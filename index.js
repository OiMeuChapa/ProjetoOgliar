//Recebe os parametros do login,id e senha
function loginBtn() {
  x = document.getElementById("id").value;
  y = document.getElementById("senha").value;
   if(x != 'ID' && y != 'Senha' && x != 0 && y !=0  ){
     var id = x
     var senha = y
     console.log(id,senha);
   }
   else{
     alert("erro");
   }
}

//Sistema para limpar os campos de texto

//Campo de texto do Id
  function recebeIdfocus() {
      document.getElementById('id').value = '';
      document.getElementById('id').style.color='black';
  }

  function recebeIdblur() {
   if(document.getElementById('id').value == 0){
    document.getElementById('id').value = 'ID';
      document.getElementById('id').style.color='#888888';
    }
  }

//Campo de texto da senha
  function recebeSenhafocus() {
   document.getElementById('senha').value = '';
    document.getElementById('senha').type = 'password';
     document.getElementById('senha').style.color='black';
  }

  function recebeSenhablur() {
    if(document.getElementById('senha').value == 0){
        document.getElementById('senha').value = 'Senha';
          document.getElementById('senha').type  = 'text';
            document.getElementById('senha').style.color = '#888888';
     }
  }
