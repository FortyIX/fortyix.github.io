<html>
<body>
  <nav class="nav-bar-default">
    <a class="nav-item" href="/">Home</a>
    <a class="nav-item" href="/pages/hello">Intro</a>
    <a class="nav-item" href="/pages/career">Career</a>
    <a class="nav-item current-page" href="/pages/writing">Writing</a>
  </nav>


  <nav class="nav-bar-mobile">
    <a class="nav-item-opener" onclick="showCloseMenu()">Menu</a>
    <a class="nav-item-mobile" href="/">Home</a>
    <a class="nav-item-mobile" href="/pages/hello">Intro</a>
    <a class="nav-item-mobile" href="/pages/career">Career</a>
    <a class="nav-item-mobile current-page" href="/pages/writing">Writing</a>
  </nav>

</body>

<style>

    .nav-item {
        margin-right: 20px;
        font-size: 18px;
        text-decoration: none;
        display:inline-block;
    }
    .nav-item:hover {
        margin-right: 20px;
        font-size: 18px;
        text-decoration: underline;
        text-decoration-thickness: 3px;
         display:inline-block;

    }  
    .nav-bar-mobile {
        display:none;
    }

    .nav-bar-default {
        display:block;
    }


    .current-page {
        font-weight: bold;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        display:inline-block;
    }

    .nav-item-opener {
        font-size: 20px;
        cursor:pointer;
        text-decoration: none;
        display:none;
    }

    

    @media only screen and (max-width: 600px) {
        .nav-bar{
          width: 20%;
          margin: 0 auto;
          /* overflow-x:scroll; */
        }

        .nav-bar-default{
          display:none;
        }

        .nav-bar-mobile{
          display:block;
        }

        .nav-item-mobile{
        margin-top: 15px;
        font-size: 30px;
        text-decoration: none;
        display:none;
       }

      .nav-item-mobile:hover {
        margin-right: 20px;
        font-size: 30px;
        text-decoration: underline;
        text-decoration-thickness: 3px;
         display:block;

    }
    .current-page {
        font-size: 30px;
        font-weight: bold;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        display:none;
    }

    .nav-item-opener {
        font-size: 30px;
        cursor:pointer;
        text-decoration: none;
        display: block;
    }

  }


</style>

## Writing

Nothing yet.

<footer style="font-size:12px; text-align:center; bottom:10px; width:100%;">(c) 2024 Fu Zhang. Icons by <a href="https://icons8.com/">Icons8</footer>
</html>