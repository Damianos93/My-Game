let vaderImg = document.querySelector("#hero")
let officerImg = document.querySelector("#officer")
let jabba = document.createElement("img")
jabba.src = "./images/jabba.gif"
let emperor= document.createElement("img")
emperor.src="./images/emperoris.gif"
let gameArea=document.getElementById("gameArea")
gameArea.append(emperor)
emperor.style.position="relative"
emperor.style.left= "80rem";
function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top -20 ||
        aRect.top > bRect.top + bRect.height - 20 ||
        aRect.left + aRect.width < bRect.left  - 20||
        aRect.left > bRect.left + bRect.width - 20
    );
}

function moveUp(person) {
    let topPosition = window.getComputedStyle(person).getPropertyValue('top')
    if (person.style.top === "0px") {
        return
    } else {
        if (person === vaderImg) {
            let position = parseInt(topPosition)
            position -= 17
            person.style.top = `${position}px`
        }
        else {
            let position = parseInt(topPosition)
            position -= 30
            person.style.top = `${position}px`
        }
    }
}

function moveDown(person) {
    let topPosition = window.getComputedStyle(person).getPropertyValue('top')
    if ((fromPxToNumber(person.style.top) + person.height) >= window.innerHeight) {
        position = 0;
        person.style.top = `${position}px`
        return
    } else {
        if (person === vaderImg) {
            let position = parseInt(topPosition)
            position += 17
            person.style.top = `${position}px`
        }
        else {
            let position = parseInt(topPosition)
            position += 35
            person.style.top = `${position}px`
        }
    }
}
function fromPxToNumber(pixel) {
    return parseInt(pixel.split("px")[0])
}
function moveRight(person) {
    let leftPosition = window.getComputedStyle(person).getPropertyValue('left')
    if ((fromPxToNumber(person.style.left) + person.width) >= window.innerWidth) {
        return
    } else {
        if (person === vaderImg) {
            let position = parseInt(leftPosition)
            position += 17
            person.style.left = `${position}px`
        }
        else {
        let position = parseInt(leftPosition)
        position += 30
        person.style.left = `${position}px`
        }
    }

}

function moveLeft(person) {
    let leftPosition = window.getComputedStyle(person).getPropertyValue('left')
    if (person.style.left <= "0px") {
        return
    } else {
        if (person === vaderImg) {
            let position = parseInt(leftPosition)
            position -= 17
            person.style.left = `${position}px`
        }
        else {
        let position = parseInt(leftPosition)
        position -= 30
        person.style.left = `${position}px`
        }
    }
}


function moveVader(event) {
    switch (event.key) {
        case "ArrowUp":
            event.preventDefault()
            moveUp(vaderImg)
            break;
        case "ArrowDown":
            event.preventDefault()
            moveDown(vaderImg)
            break;
            
        // case "ArrowRight":
        //     event.preventDefault()
        //     moveRight(vaderImg)
        //     vaderImg.style.transform = "scale(1,1)"
        //     break;
        // case "ArrowLeft":
        //     event.preventDefault()
        //     moveLeft(vaderImg)
        //     vaderImg.style.transform = "scale(-1,1)"
        //     break;
            case " ":
                event.preventDefault()
                throwCookie()

              
        default:
            break;
    }
    
    if (isTouching(createCookieElement(), emperor)) {
        alert("choked")
        moveOff(officerImg)
        // officerImg.setAttribute("src", "./images/jabba.gif")

}
}

function moveOfficer(event) {
    switch (event.key) {
        case "w":
            event.preventDefault()
            moveUp(emperor)
            break;
        case "s":
            event.preventDefault()
            moveDown(emperor)
            break;
        // case "d":
        //     event.preventDefault()
        //     moveRight(emperor)
        //     // emperor.style.transform = "scale(1,1)"

        //     break;
        // case "a":
        //     event.preventDefault()
        //     moveLeft(emperor)
            // emperor.style.transform = "scale(-1,1)"

            case "q":
                event.preventDefault()
                throwLightning()
                break;

        default:
            break;
    }

}

window.addEventListener("keydown", moveVader)
window.addEventListener("keydown", moveOfficer)


function moveOff(officerImg) {
    let randomX = Math.floor(Math.random() * window.innerHeight)
    let randomY = Math.floor(Math.random() * window.innerWidth)


    officerImg.style.left = `${randomX}px`;
    officerImg.style.top = `${randomY}px`;
}
// let mover=0;
// function requests(){
//     vaderImg.style.left = `${mover}px`;
//     mover++;

//     requestAnimationFrame(requests)
// }

function throwCookie() {
    let cookie = createCookieElement()
    gameArea.appendChild(cookie)
    let cookieThrow = new Audio('./music/wooooosh.wav')
    cookieThrow.play()
    moveCookie(cookie)
    // cookieThrow.pause()
  }
  
  
  function createCookieElement() {
    let xPosition = parseInt(window.getComputedStyle(vaderImg).getPropertyValue('left'))
    let yPosition = parseInt(window.getComputedStyle(vaderImg).getPropertyValue('top'))
    let newCookie = document.createElement('img')
    newCookie.src = 'images/cookie.png'
    newCookie.classList.add('cookie')
    newCookie.style.left = `${xPosition}px`
    newCookie.style.top = `${yPosition - 10}px`
    return newCookie;
  }
  
  
  function moveCookie(cookie) {
    let cookieInterval = setInterval(() => {
      let xPosition = parseInt(cookie.style.left)
    
      if (xPosition === window.innerWidth - 200) {
        cookie.remove()
      } else {
        cookie.style.left = `${xPosition + 4}px`
      }
    }, 1)
  }



function throwCookie() {
    let cookie = createCookieElement()
    gameArea.appendChild(cookie)
    let cookieThrow = new Audio('./music/wooooosh.wav')
    cookieThrow.play()
    moveCookie(cookie)
    // cookieThrow.pause()
  }
  
  
  function createCookieElement() {
    let xPosition = parseInt(window.getComputedStyle(vaderImg).getPropertyValue('left'))
    let yPosition = parseInt(window.getComputedStyle(vaderImg).getPropertyValue('top'))
    let newCookie = document.createElement('img')
    newCookie.src = 'images/cookie.png'
    newCookie.classList.add('cookie')
    newCookie.style.left = `${xPosition}px`
    console.log(xPosition)
    newCookie.style.top = `${yPosition - 10}px`
    return newCookie;
  }
  
  
  function moveCookie(cookie) {
    let cookieInterval = setInterval(() => {
      let xPosition = parseInt(cookie.style.left)
   
      if (xPosition === window.innerWidth - 200) {
        cookie.remove()
        clearInterval(cookieInterval)
      } else {
        cookie.style.left = `${xPosition + 4}px`
      }
    }, 1)
  }

  ///////////


  function throwLightning() {
    let light = createLightElement()
    gameArea.appendChild(light)
    let lightThrow = new Audio('./music/wooooosh.wav')
    lightThrow.play()
    moveLightning(light)
    // cookieThrow.pause()
  }
  
  
  function createLightElement() {
    let xPosition = parseInt(window.getComputedStyle(emperor).getPropertyValue('right'))
    let yPosition = parseInt(window.getComputedStyle(emperor).getPropertyValue('top'))
    let newLight = document.createElement('img')
    newLight.src = './images/lights.gif'
    newLight.classList.add('light')
    newLight.style.right = `${xPosition}px`
    newLight.style.top = `${yPosition - 10}px`
    return newLight;
  }
  
  
  function moveLightning(light) {
    let lightInterval = setInterval(() => {
      let xPosition = parseInt(light.style.right)
    //   let monsters = document.querySelectorAll(".officer")
    //   monsters.forEach(monster => {
    //     if (checklightCollision(light, monster)) {
    //       let explosion = new Audio('audio/explosion.m4a')
    //       explosion.play()
    //       monster.src = "images/explosion.png"
    //       monster.classList.remove("monster")
    //       monster.classList.add("dead-monster")
    //       scoreCounter.innerText = parseInt(scoreCounter.innerText) + 100
    //     }
    //   })
      if (xPosition === window.innerWidth) {
        light.remove()
      } else {
        light.style.right = `${xPosition + 4}px`
      }
    }, 1)
  }