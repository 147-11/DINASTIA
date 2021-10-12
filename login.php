<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <title>LOGIN ADMIN</title>

</head>
<body>
<?php include('conexion.php') ?>
    <main>
            <div class="logo">
                <img src="img/index/logos/LOLOGO BLANCO.png" id="logo_img" alt="loguito">
            </div>
            <div class="fondo">
                <h1>INICIO DE SESIÓN</h1>
                <div class="login">
                    <section>
                        <img src="img/USUARIO.png" id="usuario" alt="usuario">
                        <input type="text" id="usuario_correo" placeholder="Usuario"> 
                    </section>
                    <section>
                        <img src="img/CONTRASEÑA.png" id="contraseña" alt="contraseña">
                        <input  type="password" id="clave" placeholder="Contraseña">
                    </section>   
                </div>
                <div class="acceder">
                    <input onclick=login() id="log" type="submit" value="Acceder" >
                </div>
            </div>
</main>
    <script >
    <?php
        $login="SELECT * FROM `login`";
        $login_r=mysqli_query($conn, $login);
         while($login_mostrar=mysqli_fetch_assoc($login_r)){
            ?>
            var u = '<?php echo $login_mostrar['usuario'] ?>';
            var c = '<?php echo $login_mostrar['clave'] ?>';
    <?php } ?>

    function login(){
    var usuario=document.getElementById("usuario_correo").value;
    var clave=document.getElementById("clave").value;

  
    if(usuario==u && clave==c){
      window.location.href = "index.php";
    }
    else{
      window.alert("Usuario o contraseña inválidos");
    }
}
    </script>
</body>
</html>