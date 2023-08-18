if (/Mobi/.test(navigator.userAgent) === true) location.replace('mobile/index.html')

  function SearchQuery(val) {
    document.getElementById("searchButton").href = "https://www.google.co.uk/search?q=" + val;
  }

  function buttonClick(){
    document.getElementById("searchBox").value = "";
  }
  
        document.onclick = hideMenu;
        document.oncontextmenu = rightClick;
  
        function hideMenu() {
            document.getElementById(
                "contextMenu").style.display = "none"
        }
  
        function rightClick(e) {
            e.preventDefault();
  
            if (document.getElementById(
                "contextMenu").style.display == "block")
                hideMenu();
            else {
                var menu = document
                    .getElementById("contextMenu")
                      
                menu.style.display = 'block';
                menu.style.left = e.pageX + "px";
                menu.style.top = e.pageY + "px";
            }
        }

    function showDiscordWindow() {
      new WinBox({
        title: "Discord",
        icon: "icons/discross.png",
        class: "eclipsemono",
        x: "center",
        y: "center",
        width: "50%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        url: "https://discross.rc24.xyz",
      });
    }
    
    function showWeather() {
      new WinBox({
        title: "Weather",
        icon: "icons/wttr.png",
        class: "eclipsemono",
        x: "center",
        y: "center",
        width: "20%",
        height: "20%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        url: "https://wttr.in/",
      });
    }

    function showTelegram() {
      new WinBox({
        title: "Telegram",
        icon: "icons/telegram_small.png", // SVG version also uploaded (/Telegram.svg) but idk if its gonna work
        class: "eclipsemono",
        x: "center",
        y: "center",
        width: "60%",
        height: "60%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        url: "https://web.telegram.org/?legacy=1/im#/im",
      });
    }
    function showDualWindow() {
      new WinBox({
        title: "Dual",
        class: ["no-min", "eclipsemono"],
        x: "center",
        y: "center",
        width: "75%",
        height: "75%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        url: "https://envywebos.github.io",
      });
    }

function showVidsTest() {
      new WinBox({
        title: "VidsTest",
        class: "eclipsemono",
        x: "center",
        y: "center",
        width: "50%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        url: "apps/vidstest.html",
      });
    }
    
    function manageDual() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "left",
        y: "bottom",
        width: "100%",
        height: "17%",
        header: 0,
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("teresadual").cloneNode(true),
      });
    }
    
    function setWallpaper() {
      document.body.style.backgroundImage = 'url("' + document.querySelector(".winbox #newid").value + '")';
    }
    
    function commwp1() {
      document.body.style.backgroundImage = 'url("' + 'pack.jpg' + '")';
    }
    
    function showzonelogon() {
      new WinBox({
        title: "Sign into Zone",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "center",
        y: "center",
        width: "30%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        url: "https://example.com",
      });
    }
    
    function shownewsearch() {
      new WinBox({
        title: "Search results",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "left",
        y: "bottom",
        width: "50%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        url: "https://example.com",
      });
    }
    
    function summongamehub() {
      new WinBox({
        title: "Gaming",
        icon: "icons/game.png",
        class: "eclipsemono",
        x: "center",
        y: "center",
        width: "50%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        url: "apps/gamehub.html",
      });
    }

    function widgetinit() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "center",
        y: "center",
        width: "30%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("teresadrei").cloneNode(true),
      });
    }
    
    function showall() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-title", "eclipsemono"],
        x: "center",
        y: "center",
        width: "30%",
        height: "20%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("teresaplus").cloneNode(true),
      });
    }

    function urlbox() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "center",
        y: "center",
        width: "25%",
        height: "25%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("urlbox").cloneNode(true),
      });
    }
    
    function imgbox() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "center",
        y: "center",
        width: "25%",
        height: "25%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("imgbox").cloneNode(true),
      });
    }
    
    function community() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "center",
        y: "center",
        width: "25%",
        height: "25%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("communitywall").cloneNode(true),
      });
    }
    
    function showlocallogon() {
      new WinBox({
        title: "Create a local account",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "center",
        y: "center",
        width: "30%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("makeitlocal").cloneNode(true),
      });
    }
    
    function showCock() {
      new WinBox({
        title: "Clock",
        icon: "icons/clock.png",
        class: "eclipsemono",
        x: "center",
        y: "center",
        width: "15%",
        height: "14%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("clock").cloneNode(true),
      });
    }
    
    function showlog() {
      new WinBox({
        title: "Changelog",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "center",
        y: "center",
        width: "50%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("log").cloneNode(true),
      });
    }
    
    function showmore() {
      new WinBox({
        title: "Advanced information",
        class: ["eclipsemono"],
        x: "center",
        y: "center",
        width: "50%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("more").cloneNode(true),
      });
    }
    
    function showSettingsWindow() {
      new WinBox({
        title: "Control Panel",
        icon: "icons/setting.png",
        class: "eclipsemono",
        x: "center",
        y: "center",
        width: "50%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("cc").cloneNode(true),
      });
    }

    function showAboutWindow() {
      new WinBox({
        title: "About this PC",
        class: ["no-max", "no-min", "eclipsemono"],
        x: "center",
        y: "center",
        width: "25%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("about").cloneNode(true),
      });
    }

    function displaypanel() {
      new WinBox({
        title: "Display options",
        class: ["no-max", "no-min", "eclipsemono"],
        x: "center",
        y: "center",
        width: "25%",
        height: "40%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("ccdisplay").cloneNode(true),
      });
    }
    
    function userpanel() {
      new WinBox({
        title: "User options",
        class: ["no-max", "no-min", "eclipsemono"],
        x: "center",
        y: "center",
        width: "25%",
        height: "50%",
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("ccuser").cloneNode(true),
      });
    }

    function showBooWindow() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "left",
        y: "bottom",
        width: "10%",
        height: "29%",
        header: 0,
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("Teresa").cloneNode(true),
      });
    }
    
    function showSearch() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "left",
        y: "bottom",
        width: "100%",
        height: "40%",
        header: 0,
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        url: "apps/search.html",
      });
    }
    
    function shownoti() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "right",
        y: "bottom",
        width: "15%",
        height: "30%",
        header: 0,
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("TeresaZwei").cloneNode(true),
      });
    }
    
    function showmark() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "right",
        y: "bottom",
        width: "20%",
        height: "100%",
        header: 0,
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("TeresaMark").cloneNode(true),
      });
    }
    
    function showerror() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "right",
        y: "bottom",
        width: "20%",
        height: "35%",
        header: 0,
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("err").cloneNode(true),
      });
    }

function timeUpdate() {
  // 24-hour time example
  let x = new Date();
  let hours = x.getHours().toString().padStart(2, '0'); // 18
  let minutes = x.getMinutes().toString().padStart(2, '0'); // 37
  let seconds = x.getSeconds().toString().padStart(2, '0'); // 01
  let timeString = `${hours}:${minutes}:${seconds}` // 18:37:01
  let element = document.getElementById('clock'); // assuming <... id="clock" ...>
  element.innerText = timeString;
}
timeUpdate();
setInterval(timeUpdate, 1000); // 1000ms -> 1 second delay

// Main window section over
// Widget section start under this line

    function widgeterror() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "right",
        y: "top",
        width: "20%",
        height: "15%",
        header: 0,
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("err").cloneNode(true),
      });
    }
    
    function widgetgallery() {
      new WinBox({
        title: " ",
        class: ["no-max", "no-min", "no-title", "eclipsemono"],
        x: "right",
        y: "top",
        width: "10%",
        height: "15%",
        header: 0,
        top: 0,
        right: 0,
        bottom: 35,
        left: 0,
        mount: document.getElementById("widgallery").cloneNode(true),
      });
    }
