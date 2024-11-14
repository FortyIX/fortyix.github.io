<html>

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
        margin-bottom: 20px;
    }

    .nav-bar-default {
        display:block;
        margin-bottom: 20px;
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
    .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            width: 100px;
            padding: 20px;
            text-align: left;
        }
    .card h1 {
            font-size: 24px;
            margin: 10px 0;
        }
  .card h3 {
            font-size: 18px;
            color: #555;
            margin: 5px 0;}
  .container {
        margin-top: 50px; margin-bottom: 50px; width: 80%; margin: 0 auto;
        }
    @media only screen and (max-width: 600px) {
        .nav-bar{
          width: 20%;
          margin: 0 auto;
          /* overflow-x:scroll; */
        }

        .nav-bar-default{
          display:none;
          margin-bottom: 20px;
        }

        .nav-bar-mobile{
          display:block;
          margin-bottom: 20px;
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
        display:none;

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
    .container {
        margin-top: 10px; margin-bottom: 10px; width: 100%;
        margin-left: 0px; margin-right: 0px;
      }

  }

  </style>
  <div class="container">

  <nav class="nav-bar-default">
    <a class="nav-item" href="/" onclick="startTyper()">Home</a>
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

# Writing
Nothing yet.

<footer style="font-size:12px; text-align:center; bottom:10px; width:100%;">(c) 2024 Fu Zhang. Icons by <a href="https://icons8.com/">Icons8</footer>
</div>
</html>