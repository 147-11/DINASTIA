<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/productos.css">
    <title>PRODUCTOS</title>
</head>
<body>
<?php include('conexion.php') ?>
    <header>
        <input type="checkbox" id="menu-btn">
        <label for="menu-btn">☰</label>
        <nav class="menu">
            <ul>
                <li><a href="index.php"><b>INICIO</b></a></li>
                <li><a href="Club.php" id="club"><b>EL CLUB</b></a></li>
                <li><a href="index.php#cate"><b>CATEGORÍAS</b></a></li>
                <li><a href="index.php#produc"><b>PRODUCTOS</b></a></li>
            </ul>
        </nav>
    </header>
    <section class="banner">
        <img src="img/index/logos/LOLOGO BLANCO.png" id="logo_img" alt="loguito">
            <h1>
                <a>ROPA</a>
            </h1>
        <section class="ins">
            <h2 class="primera_clase">
                ¡Tu Primera Clase Gratis!
            </h2>
            <div class="inscribirse" id="inscribirse">
                <a href="#clb_intro"><b>Inscribete YA</b></a>
            </div>
        </section>
    </section>
<main>
  
    <div class="container">
        <div class="fila">
        <?php   
        $productos_page="SELECT * FROM `productos_page`";
            $productos_page_r=mysqli_query($conn, $productos_page);
            $id_productos=0;
            while($productos_page_mostrar=mysqli_fetch_assoc($productos_page_r)){
                $categoria=$productos_page_mostrar["categoria_producto"];
                if($categoria==1){
            ?>
            <div class="item_container">
                <section>
                    <?php if ($id_productos==0){ ?>
                    <img src="<?php echo $productos_page_mostrar["url_img_producto"] ?>" alt="imagen1">
                    <section class="texto">
                        <h2>
                        <?php echo $productos_page_mostrar["nombre_producto"] ?>
                        </h2>
                        <h3>$<?php echo $productos_page_mostrar["precio_producto"] ?></h3>
                        <p>
                        <?php echo $productos_page_mostrar["descripcion_producto"] ?> 
                        </p>
                    </section>
                    <?php } ?>
                </section>
            </div>
            <div class="item_container">
            <?php if ($id_productos==3){?>
                <img src="<?php echo $productos_page_mostrar["url_img_producto"] ?>" alt="imagen1">
                <section class="texto">
                    <h2>
                    <?php echo $productos_page_mostrar["nombre_producto"] ?> 
                    </h2>
                    <h3>$<?php echo $productos_page_mostrar["precio_producto"] ?></h3>
                    <p>
                    <?php echo $productos_page_mostrar["descripcion_producto"] ?>  
                    </p>
                </section>
                <?php } ?>
            </div>
            <?php }
            switch($id_productos){
                case 0:
                    $id_productos=1;
                     break;
                case 1:
                    $id_productos=2;
                    break;
                    case 2:
                        $id_productos=3;
                        break;
                    case 3:
                        $id_productos=4;
                         break;
                    case 4:
                        $id_productos=5;
                        break;}
                    }
            ?>
        </div>
        <div class="fila">
        <?php   
        $productos_page="SELECT * FROM `productos_page`";
            $productos_page_r=mysqli_query($conn, $productos_page);
            $id_productos=0;
            while($productos_page_mostrar=mysqli_fetch_assoc($productos_page_r)){
                $categoria=$productos_page_mostrar["categoria_producto"];
                if($categoria==1){
            ?>
            <div class="item_container">
            <?php if ($id_productos==0){ ?>
                <img src="<?php echo $productos_page_mostrar["url_img_producto"] ?>" alt="imagen1">
                <section class="texto">
                    <h2>
                    <?php echo $productos_page_mostrar["nombre_producto"] ?> 
                   </h2>
                   <h3>$<?php echo $productos_page_mostrar["precio_producto"] ?></h3>
                   <p>
                   <?php echo $productos_page_mostrar["descripcion_producto"] ?> 
                  </p>
                </section>
                <?php } ?>
            </div>
            <div class="item_container">
            <?php if ($id_productos==3){?>
                <img src="<?php echo $productos_page_mostrar["url_img_producto"] ?>" alt="imagen1">
                <section class="texto">
                    <h2>
                    <?php echo $productos_page_mostrar["nombre_producto"] ?> 
                    </h2>
                    <h3>$<?php echo $productos_page_mostrar["precio_producto"] ?></h3>
                    <p>
                    <?php echo $productos_page_mostrar["descripcion_producto"] ?>
                    </p>
                </section>
                <?php } ?>
            </div>
            <?php }
            switch($id_productos){
                case 0:
                    $id_productos=1;
                     break;
                case 1:
                    $id_productos=2;
                    break;
                    case 2:
                        $id_productos=3;
                        break;
                    case 3:
                        $id_productos=4;
                         break;
                    case 4:
                        $id_productos=5;
                        break;}
                    }
            ?>
        </div>
    </div>
    <div id="final">
        <div class="galeria__buttons">
            <section>
            <button class="galeria__btn--left" href="#imagen3">
                <img src="img/left.png">
            </button>
            </section>
        </div>
        <section class="btn-ins">
            <h2 class="primera_clase">!Tu primera clase Gratis! </h2>
            <a href="incribete_ya">Inscribete YA</a>
        </section>
        <div class="galeria__buttons">
            <section>
            <button class="galeria__btn--right" href="#imagen2">
                <img src="img/right.png">
            </button>
            </section>
        </div>
</main>
    <footer class="pie"> 
        <div class="contactos_text">
            <nav class="nav_footer">
                <ul>
                    <il><a href="index.php">Inicio</a> </il><br>
                    <il><a href="Club.php">El Club</a> </il><br>
                    <il><a href="index.php#cate"> Categorías</a> </il><br>
                    <il><a href="index.php#produc"> Productos</a> </il>
                </ul>
            </nav>
            <section class="contac">
            <h1 class="contactos">
                CONTACTOS
            </h1>
                <nav class="l_contactos">
                    <ul>
                        <il><a class="fas fa-envelope" hrfe=""> xxxx@xxxx.com</a> </il><br>
                        <il><a class="fab fa-facebook-f" hrfe="#"> xxxxx xxx</a> </il><br>
                        <il><a class="fab fa-instagram" hrfe="#"> xxxx_xx</a> </il><br>
                        <il><a class="fab fa-whatsapp" hrfe="#"> xxx xxx xx xxx</a> </il>
                    </ul>
                </nav>
            </section>
        </div>
    </footer>
<script src="https://kit.fontawesome.com/8dda978b9e.js" crossorigin="anonymous"></script>
</body>
</html>