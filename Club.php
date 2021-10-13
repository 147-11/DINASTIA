<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/Club.css">
    <title>EL CLUB</title>
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
                <a>EL CLUB</a>
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
    <main class="container_main">
    <?php   $club_page="SELECT * FROM `club_page`";
            $club_page_r=mysqli_query($conn, $club_page);
            $id_mision=0;
            while($club_page_mostrar=mysqli_fetch_assoc($club_page_r)){ 
            ?>
            <section class="club_mision" id="clb_mision">
                <div class="club_item">
                <?php if ($id_mision==0){ ?>
                    <div class="text_mision">
                        <h2 id="titulo_mision">
                        <?php echo $club_page_mostrar["titulo_club_page"] ?>
                        </h2>
                        <P class="parra_mision">
                        <?php echo $club_page_mostrar["descripcion_club_page"] ?>
                        </P>
                    </div>
                    <div class="mision_img">
                        <img src="<?php echo $club_page_mostrar["img_club_page"] ?>" alt="mision_img">
                    </div>
                    <?php } ?>
                </div>
            </section>

            <section class="club_vision" id="clb_vision">
                <div class="club_item2">
                <?php if ($id_mision==1){   ?>
                    <div class="text_vision">
                        <h2 id="titulo_vision">
                        <?php echo $club_page_mostrar["titulo_club_page"] ?>
                        </h2>
                        <P class="parra_vision">
                        <?php echo $club_page_mostrar["descripcion_club_page"] ?>   
                        </P>
                    </div>
                    <div class="vision_img">
                        <img src="<?php echo $club_page_mostrar["img_club_page"] ?>" alt="vision_img">
                    </div>
                    <?php }  ?>
                </div>
            </section>
            <?php 
            switch($id_mision){
                case 0:
                    $id_mision=1;
                     break;
                case 1:
                    $id_mision=2;
                    break;}
                }
                ?>
    
            <section class="Objetivos_contenedor">
                <div class="Objetivos_Texto">
                <?php   $club_page="SELECT * FROM `club_page`";
            $club_page_r=mysqli_query($conn, $club_page);
            $id_mision=0;
            while($club_page_mostrar=mysqli_fetch_assoc($club_page_r)){ 
                if ($id_mision==2){
            ?>
                    <div class="obj_GEN">
                    
                        <h2 class="Obj_G"><?php echo $club_page_mostrar["titulo_club_page"] ?></h2>
                        <P class="Obj_G_parra">
                        <?php echo $club_page_mostrar["descripcion_club_page"] ?>
                        </P>
                    </div>
                    <?php } 
                    if ($id_mision==3){?>

                    <div class="obj_esp">
                        <h2 id="Obj_E"><?php echo $club_page_mostrar["titulo_club_page"] ?></h2>
                        <P class="Obj_E_parra">
                            <p class="list_objs">
                            <?php echo $club_page_mostrar["descripcion_club_page"] ?>
                         </p>
                        </P>  
                    </div>
                    <?php }
                switch($id_mision){
                    case 0:
                        $id_mision=1;
                         break;
                    case 1:
                        $id_mision=2;
                        break;
                        case 2:
                            $id_mision=3;
                            break;
                        case 3:
                            $id_mision=4;
                             break;}
                        } ?>
                </div>
            </section>

            
            <section class="Historia_contenedor">
            <div class="content_histo">
            <?php   $club_page="SELECT * FROM `club_page`";
            $club_page_r=mysqli_query($conn, $club_page);
            $id_mision=0;
            while($club_page_mostrar=mysqli_fetch_assoc($club_page_r)){ 
                if($id_mision==4){
            ?>
                <div class="hitoria_text">
                
                    <h2 id="titulito">
                    <?php echo $club_page_mostrar["titulo_club_page"] ?>
                    </h2>
                    <p id="parrafo_histo">
                    <?php echo $club_page_mostrar["descripcion_club_page"] ?>
                    </p>
                    <?php }
            switch($id_mision){
                case 0:
                    $id_mision=1;
                     break;
                case 1:
                    $id_mision=2;
                    break;
                    case 2:
                        $id_mision=3;
                        break;
                    case 3:
                        $id_mision=4;
                         break;
                    case 4:
                        $id_mision=5;
                        break;}
                    }
                    ?>
                </div>
                
                <?php   $club_page="SELECT * FROM `club_page`";
            $club_page_r=mysqli_query($conn, $club_page);
            $id_mision=0;
            while($club_page_mostrar=mysqli_fetch_assoc($club_page_r)){ 
                if($id_mision==4){
            ?>
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
                </div>
                
            </div>
            
            </section>
            <?php }
            switch($id_mision){
                case 0:
                    $id_mision=1;
                     break;
                case 1:
                    $id_mision=2;
                    break;
                    case 2:
                        $id_mision=3;
                        break;
                    case 3:
                        $id_mision=4;
                         break;
                    case 4:
                        $id_mision=5;
                        break;}
                    }
                    ?>

            <section class="PoliticasBien_contenedor">
            <?php   $club_page="SELECT * FROM `club_page`";
            $club_page_r=mysqli_query($conn, $club_page);
            $id_mision=0;
            while($club_page_mostrar=mysqli_fetch_assoc($club_page_r)){ 
                if ($id_mision==5){
            ?>
                <div class="PoliticasBien_Texto">
                    <div class="politica">
                        <h2 class="PoliticasBien_suptitulo">
                        <?php echo $club_page_mostrar["titulo_club_page"] ?>
                        </h2>
                        <P class="PoliticasBien_parrafo">
                        <?php echo $club_page_mostrar["descripcion_club_page"] ?>
                        </P>
                    </div>
                    <div class="btn-ins">
                        <h2 class="primera_clase">!Tu primera clase Gratis! </h2>
                        <a href="incribete_ya">Inscribete YA</a>
                    </div>
                </div>
                <?php } 
                    switch($id_mision){
                        case 0:
                            $id_mision=1;
                             break;
                        case 1:
                            $id_mision=2;
                            break;
                            case 2:
                                $id_mision=3;
                                break;
                            case 3:
                                $id_mision=4;
                                 break;
                            case 4:
                                $id_mision=5;
                                break;
                            case 5:
                                $id_mision=6;
                                break;   
                                }
                        }
                    ?>
            </section>
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
