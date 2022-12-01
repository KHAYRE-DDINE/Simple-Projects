function choice() {
    let body = document.querySelector("body");
    let selectList = document.querySelectorAll("select");
    let paragraph = document.querySelector("p");
    selectList.forEach((e) => {
      e.onclick = function all() {
        if (e.className === "font-family") {
          let fontFamilyJs = e.options[e.selectedIndex].value
          paragraph.style.fontFamily = fontFamilyJs
          console.log(fontFamilyJs)
        }
        if (e.className === "color") {
          let colors = e.options[e.selectedIndex].value
          paragraph.style.color = colors
          console.log(colors)
        }
         if (e.className === "background-paragraph") {
           let backgrounds = e.options[e.selectedIndex].value
          paragraph.style.background = backgrounds
          console.log(backgrounds)
        }
        
        if (e.className === "background-body") {
          let backgroundBody = e.options[e.selectedIndex].value
          body.style.background = backgroundBody
          console.log(backgroundBody)
        }
         if (e.className === "font-size") {
          let fontSizeJs = e.options[e.selectedIndex].value
          paragraph.style.fontSize = fontSizeJs + "px"
          console.log(fontSizeJs)
        }
      };
    });
  }
  
  choice();