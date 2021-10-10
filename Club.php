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
                <li><a href="index.html"><b>INICIO</b></a></li>
                <li><a href="Club.html" id="club"><b>EL CLUB</b></a></li>
                <li><a href="index.html#cate"><b>CATEGORÍAS</b></a></li>
                <li><a href="index.html#produc"><b>PRODUCTOS</b></a></li>
            </ul>
        </nav>
    </header>
    <section class="banner">
        <img src="img/LOLOGO BLANCO.png" id="logo_img" alt="loguito">
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
            <section class="club_mision" id="clb_mision">
                <div class="club_item">
                    <div class="text_mision">
                    <?php
                    $club_page="SELECT * FROM `club_page`";
                    $club_page_r=mysqli_query($conn, $club_page);
                    $id_mision=0
                    while($club_page_mostrar=mysqli_fetch_assoc($club_page_r)){
                        if ($id_mision==0){
                    ?>
                        <h2 id="titulo_mision">
                        <?php echo $club_page_mostrar["titulo_club_page"] ?>
                        </h2>
                        <P class="parra_mision">
                        <?php echo $club_page_mostrar["descripcion_club_page"] ?>
                        </P>
                        <?php $id++;} } ?>
                    </div>
                    <div class="mision_img">
                        <img src="<?php echo $club_page_mostrar["descripcion_club_page"] ?>" alt="mision_img">
                    </div>
                </div>
            </section>

            <section class="club_vision" id="clb_vision">
                <div class="club_item2">
                    <div class="text_vision">
                        <h2 id="titulo_vision">
                            VISIÓN
                        </h2>
                        <P class="parra_vision">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quam quibusdam dolores et libero consectetur, eveniet porro velit. Amet animi obcaecati quas autem maxime ipsum odit molestias praesentium voluptatibus aspernatur?
                    </P>
                    </div>
                    <div class="vision_img">
                        <img src="img/default.png" alt="vision_img">
                    </div>
                </div>
            </section>

            <section class="Objetivos_contenedor">
                <div class="Objetivos_Texto">
                    <div class="obj_GEN">
                        <h2 class="Obj_G">OBJETIVO GENERAL</h2>
                        <P class="Obj_G_parra">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora qui optio temporibus vitae corporis sequi, accusamus perferendis id vel voluptatibus fugit magni, earum nam? Architecto et rem iste autem fuga.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloribus unde sed optio, tempore magnam aliquam dolorem cupiditate facilis corporis facere et nulla. Exercitationem sit perspiciatis temporibus mollitia in animi?
                        </P>
                    </div>
                    <div class="obj_esp">
                        <h2 id="Obj_E">OBJETIVOS ESPECIFICOS</h2>
                        <P class="Obj_E_parra">
                            <ul class="list_objs">
                                <li>
                                   <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur est iure similique harum velit!
                                   </p>
                                </li>
                                <li>
                                    <p>
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur est iure similique harum velit!
                                    </p>
                                 </li>
                                 <li>
                                    <p>
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur est iure similique harum velit!
                                    </p>
                                 </li>
                            </ul>
                        </P>
                    </div>
                </div>
            </section>

            <section class="Historia_contenedor">
            <div class="content_histo">
                <div class="hitoria_text">
                    <h2 id="titulito">
                        HISTORIA
                    </h2>
                    <p id="parrafo_histo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto fuga quo quidem provident vel voluptas impedit aperiam molestias atque. Recusandae, aliquam. Doloremque corporis animi perspiciatis. Sit dolor maxime quod.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eum reiciendis fuga aliquam porro ducimus alias nesciunt? In similique asperiores odio ipsa veniam, minus itaque quisquam quod, hic harum laborum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur eveniet deleniti suscipit illum ducimus sequi, recusandae laboriosam aliquid cupiditate optio deserunt quibusdam aliquam consectetur consequatur esse ipsa? Officiis, optio.
                    </p>
                </div>
                <section class="galeria">
                    <h2 class="galeria_tittle" id="gale">
                        GALERIA
                    </h2>
                    <div class="galeria__content" id="content_imgs">
                        <div class="galeria__slide">
                            <img class="galeria__img" src="img/dos.jpg" alt="segunda">
                        </div>
        
                        <div class="galeria__slide">
                            <img class="galeria__img" src="img/tres.jpg" alt="tercera">
                        </div>
        
                        <div class="galeria__slide">
                            <img class="galeria__img" src="img/uno.jpg" alt="primera">
                        </div>
        
                        <div class="galeria__buttons">
                            <button class="galeria__btn--left" href="#imagen3">
                                <img src="img/left.png">
                            </button>
                            <button class="galeria__btn--right" href="#imagen2">
                                <img src="img/right.png">
                            </button>
                        </div>
                    </div>
                </section>
                </div>
            </div>
            </section>

            <section class="PoliticasBien_contenedor">
                <div class="PoliticasBien_Texto">
                    <div class="politica">
                        <h2 class="PoliticasBien_suptitulo">
                            POLITICAS DE BIENESTAR
                        </h2>
                        <P class="PoliticasBien_parrafo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias at doloribus consectetur architecto tenetur rerum, unde cum tempore deserunt enim, necessitatibus fugiat corporis soluta reiciendis ullam, odio cumque a?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro et voluptatum temporibus rem laboriosam,  adipisci molestiae assumenda non delectus, similique commodi sed maiores, libero facilis nam debitis quo natus!
                        </P>
                    </div>
                    <div class="btn-ins">
                        <h2 class="primera_clase">!Tu primera clase Gratis! </h2>
                        <a href="incribete_ya">Inscribete YA</a>
                    </div>
                </div>
            </section>
        </main>
        
        <footer class="pie"> 
            <div class="contactos_text">
                <nav class="nav_footer">
                    <ul>
                        <il><a href="index.html">Inicio</a> </il><br>
                        <il><a href="Club.html">El Club</a> </il><br>
                        <il><a href="index.html#cate"> Categorías</a> </il><br>
                        <il><a href="index.html#produc"> Productos</a> </il>
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
    <script src="js/galeria.js"></script>
</body>
</html>
