<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.CSS">
    <title>DINASTÍA</title>
</head>
<body>
    <?php include('conexion.php') ?>
    <header >
        <input type="checkbox" id="menu-btn">
        <label for="menu-btn">☰</label>
        <nav class="menu">
            <ul>
                <li><a href="index.php"><b>INICIO</b></a></li>
                <li><a href="#clb_intro" id="club"><b>EL CLUB</b></a></li>
                <li><a href="#cate"><b>CATEGORÍAS</b></a></li>
                <li><a href="#produc"><b>PRODUCTOS</b></a></li>
            </ul>
        </nav>
    </header>
    <section class="banner">
        <img src="img/index/logos/LOLOGO BLANCO.png" id="logo_img" alt="loguito">
        <h1 class="primera_clase">
            ¡Tu Primera Clase Gratis!
        </h1>
        <div class="inscribirse">
            <a href="#clb_intro"><b>Inscribete YA</b></a>
        </div>
    </section>
    <!--SECCIÓN CLUB-->
        <main class="container_main">
            <section class="club_intro" id="clb_intro">
                <?php
            $club_index="SELECT * FROM `club_index`";
            $club_index_r=mysqli_query($conn, $club_index);
            while($club_index_mostrar=mysqli_fetch_assoc($club_index_r)){
                ?>
                <h2 class="titulo" id="title">
                    <?php echo $club_index_mostrar["titulo_club_index"] ?></h2>
                <div class="club_text">
                    <div class="text_into">
                        <P class="intro_club">
                        <?php echo $club_index_mostrar['descripcion_club_index'] ?>
                        </P>
                        <a href="Club.php" id="club-btn">Conoce el Club</a>
                    </div>
                    <div class="text_into">
                        <figure class="intro_img">
                            <img src="<?php echo $club_index_mostrar['img_club_index']?>" class="club_img" alt="loguito">
                        </figure>
                    </div>
                </div>
            <?php
            } mysqli_free_result($club_index_r);
            ?>
            </section>

            <section class="Categorias_intro" id="ctg">
                <div class="Categorias_img" id="cate_intro">
                    <h2 class="titulo" id="cate">
                        CATEGORÍAS
                    </h2>
                     <div class="grilla_img">
                        <div class="inicia">
                        <?php
                        $categorias_club_index_medio="SELECT * FROM categorias_club_index";
                        $categorias_club_index_medio_r=mysqli_query($conn, $categorias_club_index_medio);
                        $id_medio=0; 
                        while($categorias_club_index_inicia_mostrar=mysqli_fetch_assoc($categorias_club_index_medio_r) ){ 
                        if ($id_medio==0){
                                ?>
                            <section class="inici_img">
                            <input type="checkbox" id="caja1">
                                <label for="caja1" class="caja_1">
                                    <img src="<?php echo $categorias_club_index_inicia_mostrar['cate_img_index']?>" id="imgg">
                                </label>
                                <section class="incia_text">
                                    <h2><?php echo $categorias_club_index_inicia_mostrar['cate_titulo_index'] ?></h2>
                                    <p id="par">
                                    <?php echo $categorias_club_index_inicia_mostrar['cate_descripcion_index'] ?>
                                    </p>
                                </section>
                            </section>
                            <?php }; 
                            if ($id_medio==1){
                                ?>
                            <section class="inici_img">
                                <input type="checkbox" id="caja2">
                                <label for="caja2" class="caja_2">
                                    <img src="<?php echo $categorias_club_index_inicia_mostrar['cate_img_index']?>">
                                </label>
                                <section class="incia_text">
                                    <h2><?php echo $categorias_club_index_inicia_mostrar['cate_titulo_index'] ?></h2>
                                    <p id="par">
                                    <?php echo $categorias_club_index_inicia_mostrar['cate_descripcion_index'] ?>
                                    </p>
                                </section>
                            </section>
                            <?php }; 
                            if ($id_medio==2){
                                ?>
                            <section class="inici_img">
                                <input type="checkbox" id="caja3">
                                <label for="caja3" class="caja_3">
                                    <img src="<?php echo $categorias_club_index_inicia_mostrar['cate_img_index']?>" id="imgg1">
                                </label>
                                <section class="incia_text">
                                    <h2><?php echo $categorias_club_index_inicia_mostrar['cate_titulo_index'] ?></h2>
                                    <p id="par">
                                    <?php echo $categorias_club_index_inicia_mostrar['cate_descripcion_index'] ?>
                                    </p>
                                </section>
                            </section>
                            <?php }
                             switch($id_medio){
                                         case 0:
                                             $id_medio=1;
                                              break;
                                         case 1:
                                             $id_medio=2;
                                             break;
                                         case 2:
                                             $id_medio=3;
                                             break;
                                     }
                              }         ?>
                        </div>
                        <div class="medio">
                        <?php
                        $categorias_club_index_medio="SELECT * FROM categorias_club_index";
                        $categorias_club_index_medio_r=mysqli_query($conn, $categorias_club_index_medio); 
                        $id_medio=0;
                        while($categorias_club_index_medio_mostrar=mysqli_fetch_assoc($categorias_club_index_medio_r) ){ 
                        if ($id_medio==3){
                                ?>
                            <section class="inici_img">
                                <input type="checkbox" id="caja4">
                                <label for="caja4" class="caja_4">
                                    <img src="<?php echo $categorias_club_index_medio_mostrar['cate_img_index']?>" id="imgg1">
                                </label>
                                <section class="incia_text">
                                    <h2><?php echo $categorias_club_index_medio_mostrar['cate_titulo_index'] ?></h2>
                                    <p id="par">
                                    <?php echo $categorias_club_index_medio_mostrar['cate_descripcion_index'] ?>
                                    </p>
                                </section>
                            </section>
                            <?php }; 
                            if ($id_medio==4){
                                ?>
                            <section class="inici_img">
                                <input type="checkbox" id="caja5">
                                <label for="caja5" class="caja_5">
                                    <img src="<?php echo $categorias_club_index_medio_mostrar['cate_img_index']?>" id="imgg1">
                                </label>
                                <section class="incia_text">
                                    <h2><?php echo $categorias_club_index_medio_mostrar['cate_titulo_index'] ?></h2></h2>
                                    <p id="par">
                                    <?php echo $categorias_club_index_medio_mostrar['cate_descripcion_index'] ?>
                                    </p>
                                </section>
                            </section>
                            <?php }; 
                            if ($id_medio==5){
                                ?>
                            <section class="inici_img">
                                <input type="checkbox" id="caja6">
                                <label for="caja6" class="caja_6">
                                    <img src="<?php echo $categorias_club_index_medio_mostrar['cate_img_index']?>" id="imgg1">
                                </label>
                                <section class="incia_text">
                                    <h2><?php echo $categorias_club_index_medio_mostrar['cate_titulo_index'] ?></h2></h2>
                                    <p id="par">
                                    <?php echo $categorias_club_index_medio_mostrar['cate_descripcion_index'] ?>
                                    </p>
                                </section>
                            </section>
                            <?php }
                        switch($id_medio){
                                    case 0:
                                        $id_medio=1;
                                         break;
                                    case 1:
                                        $id_medio=2;
                                        break;
                                    case 2:
                                        $id_medio=3;
                                        break;
                                    case 3:
                                        $id_medio=4;
                                         break;
                                    case 4:
                                        $id_medio=5;
                                        break;
                                    case 5:
                                        $id_medio=6;
                                        break;
                                }
                     }         ?>
                        



                    </div>
                    
                </div>
            </section> 

            <section class="Productos">
                <div class="Productos_img">
                    <h2 class="productos_title" id="produc">
                        PRODUCTOS
                    </h2>
                    <div class="categoria_prod">
                        <?php
                        $productos_index="SELECT * FROM `productos_index`";
                        $productos_index_r=mysqli_query($conn, $productos_index);
                        $id_prod=0;
                        while($productos_index_mostrar=mysqli_fetch_assoc($productos_index_r) ){ 
                        if ($id_prod==0){ ?>
                        <figure class="contenedor_r">
                            <img src="<?php echo $productos_index_mostrar['logo_producto_index']?>" class="logo_ropa"  alt="ROPA">
                            <div class="r"><a href="productos.php"><b><?php echo $productos_index_mostrar['nombre_producto_index']?></b></a></div>
                        </figure>
                        <?php }
                        if ($id_prod==1){ ?>
                        <!--figure class="contenedor_a">
                            <img src="<!?php echo $productos_index_mostrar['logo_producto_index']?>" class="logo_accesorios" alt="ACCESORIOS">
                            <div class="accesorios"><a href="productos.php"><b><!?php echo $productos_index_mostrar['nombre_producto_index']?></b></a></div>
                        </figure-->
                        <figure class="contenedor_r">
                            <img src="<?php echo $productos_index_mostrar['logo_producto_index']?>" class="logo_ropa"  alt="ROPA">
                            <div class="r"><a href="productos.php"><b><?php echo $productos_index_mostrar['nombre_producto_index']?></b></a></div>
                        </figure>
                        <?php }
                        if ($id_prod==2){ ?>
                        <figure class="contenedor_p">
                            <img src="<?php echo $productos_index_mostrar['logo_producto_index']?>" class="logo_patines" alt="PATINES">
                            <div class="patines" id="p"><a href="productos.php"><b><?php echo $productos_index_mostrar['nombre_producto_index']?></b></a></div>
                        </figure>
                        <?php } 
                        switch($id_prod){
                            case 0:
                                $id_prod=1;
                                 break;
                            case 1:
                                $id_prod=2;
                                break;
                            case 2:
                                $id_prod=3;
                                break;
                            
                        }   
                        }    ?>
                    </div>
                </div>    
            </section>
            
            <section class="galeria">
                <h2 class="galeria_tittle" id="gale">
                    GALERIA
                </h2>
                <div class="galeria__content" id="content_imgs">
                <?php
                        $galeria="SELECT * FROM `galeria`";
                        $galeria_r=mysqli_query($conn, $galeria); 
                        while($galeria_mostrar=mysqli_fetch_assoc($galeria_r) ){ ?>
                    <div class="galeria__slide">
                        <img class="galeria__img" src="<?php echo $galeria_mostrar['g_img1']?>" alt="segunda">
                    </div>
    
                    <div class="galeria__slide">
                        <img class="galeria__img" src="<?php echo $galeria_mostrar['g_img2']?>" alt="tercera">
                    </div>
    
                    <div class="galeria__slide">
                        <img class="galeria__img" src="<?php echo $galeria_mostrar['g_img3']?>" alt="primera">
                    </div>
    
                    <div class="galeria__buttons">
                        <button class="galeria__btn--left" href="#imagen3">
                            <img src="img/left.png">
                        </button>
                        <button class="galeria__btn--right" href="#imagen2">
                            <img src="img/right.png">
                        </button>
                    </div>
                    <?php } ?>
                </div>
            </section>

        <section class="cmr"><br>
                &ensp;&ensp;
            <div class="inflex">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39280769113!2d-74.24789509678376!3d4.648625940456253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1631139999971!5m2!1ses-419!2sco" id="mapa"></iframe>
             &ensp;&ensp;
             <iframe src="https://calendar.google.com/calendar/embed?src=est.leandro.arevalo%40unimilitar.edu.co&ctz=America%2FBogota" id="calendario"></iframe>

             &ensp;&ensp;
             <h2 id="primera_clasef">
                 ¡Tu Primera Clase Gratis!
             </h2>
             <div id="inscribirsef">
                <a href="#clb_intro" style="text-decoration: none;"><b>Inscribete YA</b></a>
             </div>
            </div>
            </section>
        </main>
        <footer class="pie"> 
            <div class="contactos_text">
                <nav class="nav_footer">
                    <ul>
                        <il><a href="index.php"> Inicio</a> </il><br>
                        <il><a href="#clb_intro">   El Club</a> </il><br>
                        <il><a href="#cate"> Categorías</a> </il><br>
                        <il><a href="#produc"> Productos</a> </il>
                    </ul>
                </nav>
                <section class="contac">
                <h2 class="contactos">
                    CONTACTOS
                </h2>
                    <nav class="l_contactos">
                        <?php
                        $footer="SELECT * FROM `footer`";
                        $footer_r=mysqli_query($conn, $footer);
                        while($footer_mostrar=mysqli_fetch_assoc($footer_r) ){  ?>
                        <ul>
                            <il><a class="fas fa-envelope" hrfe="<?php echo $footer_mostrar['f_correo'] ?>"> <?php echo $footer_mostrar['f_correo'] ?></a> </il><br>
                            <il><a class="fab fa-facebook-f" hrfe="<?php echo $footer_mostrar['f_facebook'] ?>">   <?php echo $footer_mostrar['f_facebook'] ?></a> </il><br>
                            <il><a class="fab fa-instagram" hrfe="<?php echo $footer_mostrar['f_instagram'] ?>"> <?php echo $footer_mostrar['f_instagram'] ?></a> </il><br>
                            <il><a class="fab fa-whatsapp" hrfe="<?php echo $footer_mostrar['f_whatsapp'] ?>"> <?php echo $footer_mostrar['f_whatsapp'] ?></a> </il>
                        </ul>
                        <?php } ?>
                    </nav>
                </section>
            </div>
        </footer>
    <script src="https://kit.fontawesome.com/8dda978b9e.js" crossorigin="anonymous"></script>
    <script src="js/galeria.js"></script>
</body>
</html>