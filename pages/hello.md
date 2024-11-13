<html>
<body>
  <nav class="nav-bar-default">
    <a class="nav-item" href="/" onclick="runTyper()">Home</a>
    <a class="nav-item current-page" href="/pages/hello">Intro</a>
    <a class="nav-item" href="/pages/career">Career</a>
    <a class="nav-item" href="/pages/writing">Writing</a>
  </nav>


  <nav class="nav-bar-mobile">
    <a class="nav-item-opener" onclick="showCloseMenu()">Menu</a>
    <a class="nav-item-mobile" href="/">Home</a>
    <a class="nav-item-mobile current-page" href="/pages/hello">Intro</a>
    <a class="nav-item-mobile" href="/pages/career">Career</a>
    <a class="nav-item-mobile" href="/pages/writing">Writing</a>
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
            width: 300px;
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
            margin: 5px 0;

    .fact-squre{
        display: inline-block;

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

  }


</style>

# Greetings
> Hej means hello in Swedish. In case you are curious 😉.
<p style="font-size:18px; line-height:1.5; text-align:justify">Greetings from Fu Zhang,张辅 in chinese hanzi, or you may call me Jerry.  👋 I explore and research in the field of human-computer interactions with multidisciplinary experiences in computer science, electronic engineering and software engineering. I graduated from King's College London with a first BEng and a distinction MSc degree. Followed by a software engineer career at Huawei. I am currently employed in the Hong Kong Polytechnic University as a research assistant. 
</p>

<h4>Facts about me</h4>
<div class="fact-squre" style="display: flex; justify-content: space-around; flex-wrap: wrap;"> <!-- Use Flexbox -->
    <div class="card" style="flex: 1 0 300px; margin: 10px;"> <!-- Ensures a minimum width and margin -->
        <h1>😇 Personality type</h1>
        <h3><a style="color:purple" href="https://www.16personalities.com/profiles/56c82721b9666">Commander (ENTJ-A) ></a></h3>
    </div>
    <div class="card" style="flex: 1 0 300px; margin: 10px;"> <!-- Ensures a minimum width and margin -->
        <h1>⚽ Favorite football team </h1>
        <h3 style="color:darkred">Arsenal FC and Henan FC</h3>
    </div>
    <div class="card" style="flex: 1 0 300px; margin: 10px;"> <!-- Ensures a minimum width and margin -->
        <h1>🥳Favorite things</h1>
        <h3 style="color:darkblue">listening the rain, read books, and travel around</h3>
    </div>
      <div class="card" style="flex: 1 0 300px; margin: 10px;"> <!-- Ensures a minimum width and margin -->
        <h1>Favorite food 🍲</h1>
        <h3>Hotpot</h3>
    </div>
</div>

<h2> You may reach me at:</h2>

[![logo](https://img.icons8.com/doodle/64/linkedin--v2.png ':size=70x70')](https://www.linkedin.com/in/fuzhang049/) &nbsp;&nbsp;
[![logo](https://img.icons8.com/doodle/64/github--v1.png" ':size=70x70')]([/](https://github.com/nablafx)) &nbsp;&nbsp;

<h2>Contact me:</h2>

jerry-fu.zhang@polyu.edu.hk

!> No spam, please!
<footer style="font-size:12px; text-align:center; bottom:10px; width:100%;">(c) 2024 Fu Zhang. Icons by <a href="https://icons8.com/">Icons8</footer>
</html>