<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Dati Server | TalagiWiki</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="Img/Icons/Logo.png">
		<link rel="stylesheet" type="text/css" href="Main.css"></link>
        <link rel="stylesheet" type="text/css" href="DarkModeButton.css"></link>
    </head>
<body>  
        <div class="wrapper">
            <img class="bg" src="Img/bg.png"></img>
            <div class="undertop"></div>
            <a href="Homepage.html"><img class="logo" src="Img/Icons/Logo.png"></img></a>

            <p class="top"><a href="Homepage.html" class="top">&nbspHOME&nbsp</a></p>
            <p class="top"><a href="Mappe.html" class="top">&nbspMAPPE&nbsp</a></p>
            <p class="top"><a href="Arts.html" class="top">&nbspARTS&nbsp</a></p>

            <div class="search-box">
                <div class="row">
                    <input class="search-bar" type="text" id="input-box" placeholder="Cerca" autocomplete="off">
                </div>
                <div class="result-box">
                   
                </div>
                <img class="search-lense" src="Img/Icons/Search.svg"></img>
            </div>

            <a href="login.html"><img class="login" src="Img/Icons/Profile.png"><img></a>
			
			<div class="login-contentBg">
				<div class="login-content">
					<p class="welcome" style="
                    font-size: 1.2rem;
                    text-align: left;
                    padding: 30px;
                    color: white;
                    height: 20px;
                    ">
                    Informazioni sul server:<bsssr><br>
                    Posizione: <?php echo $_SERVER['PHP_SELF'];?><br>
                    Nome del server: <?php echo $_SERVER['HTTP_HOST'];?><br>
                    Sistema operativo e Browser: <?php echo $_SERVER['HTTP_USER_AGENT'];?><br>
                    Porta del server: <?php echo $_SERVER['SERVER_PORT'];?><br>
                    Protocollo di trasmissione: <?php echo $_SERVER['SERVER_PROTOCOL'];?><br>
                    Momento della richiesta: <?php echo $_SERVER['REQUEST_TIME'];?><br>
                    Lingue accettate: <?php echo $_SERVER['HTTP_ACCEPT_LANGUAGE'];?><br>
                    </p>
				</div>
				
			</div>
            
            <div class="toggle-switch">
                <label class="switch-label">
                    <input type="checkbox" class="checkbox" id="darkModeSwitch">
                    <span class="slider"></span>
                </label>
            </div> 
            </div>
            
            <script src="Scripts/Autocomplete.js"></script>
            <script src="Scripts/Darkmode.js"></script>
            <script src="Scripts/ImageScroll.js" data-scroll-thresholds="0"></script>
        </div>
    
</p>
</body>
</html>