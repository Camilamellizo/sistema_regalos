<template>
<div class="container-footer text-white bg-red-900">
    <footer>
        <div class="logo-footer">
            <img src="" alt="">
        </div>
        <hr class="border border-green-700">

         <div class="redes-footer">
             <a href="#"><img src="../assets/iconofb.png" alt="" class="w-10 mr-2" ></a>
             <a href="#"><img src="../assets/iconinsta.png" alt="" class="w-10  mr-2"></a>
             <a href="#"><img src="../assets/google.png" alt="" class="w-10"></a>
        </div>
        <h4 class="text-white">2022 - Honcharova ,  Mellizo ,  Quevedo ,  Roca  -  Todos los Derechos Reservados</h4>
        <h4> _This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._</h4>
    </footer>
</div>

</template>

<script>
export default{
    name: 'fooTer'
}

</script>
<style>

.container-footer footer{
    max-width: 1200px;
    margin: auto;
}
.container-footer footer .logo-footer{
    text-align: center;
}
.container-footer footer .logo-footer img{
    width: 100px;
}
.container-footer footer .redes-footer{
display: flex;
justify-content: center;
margin-top: 20px;
}
.container-footer footer .redes-footer .icon-redes-footer{
font-size: 20px;
margin: 20px;
background: #EFEFEF;
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
color: #A2A2A2;
}
footer .redes-footer .fa-facebook-f:hover{
    background: #41579A;
    color: #fff;
    }
footer .redes-footer .fa-google-plus-g:hover{
    background: #DE4C34;
    color: #fff;
    }
footer .redes-footer .fa-instagram:hover{
    background: linear-gradient(to top right, #FCDE30, #E9712A,#D2313B,#AE4198, #7540A1,#5443AB);
    color: #fff;
    }

.container-footer h4{
    text-align: center;
    margin-top: 10px;
    font-weight: 500px;
}
</style>