document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
  //1
  {
  let button = document.querySelector("[data-js='t1-btn']")
  let color = document.querySelector("[data-js='t1-hex']")
  button.addEventListener('click', (e) => {
    let randomfullnumber = "#"
    for (i = 0; i < 3;++i){
      let random = Math.round(Math.random() * 255).toString(16);
      randomfullnumber += random
    }
    button.style.backgroundColor = `${randomfullnumber}`
    color.textContent = `${randomfullnumber}`
  })
  }
  //2
  {
  let text = document.querySelector("[data-js='t2-input']")
  let numbercol = document.querySelector("[data-js='t2-count']")
  let col = 0
  text.addEventListener('input', (e) =>{
    console.log(e)
    if (e.data != null){
      col++
    } else {
      col--
    }
    numbercol.textContent = `${col}`
  })
  }
  //3
  {
  let inputfortext = document.querySelector("[data-js='t3-input']")
  let addbutton = document.querySelector("[data-js='t3-add']")
  let list = document.querySelector("[data-js='t3-list']")
  addbutton.addEventListener('click', (e) =>{
    let li = document.createElement('li')
    li.textContent = `${inputfortext.value}`
    if (inputfortext.value != 0){
      list.append(li)
    }
  })
  }
  //4
  {
    let buttonminus = document.querySelector("[data-js='t4-minus']")
    let buttonplus = document.querySelector("[data-js='t4-plus']")
    let buttonreset = document.querySelector("[data-js='t4-reset']")
    let buttonout = document.querySelector("[data-js='t4-out']")
    let shet = 0
    buttonminus.addEventListener('click', (e) =>{
      shet--
      buttonout.textContent = `${shet}`
    })
    buttonplus.addEventListener('click', (e) =>{
      shet++
      buttonout.textContent = `${shet}`
    })
    buttonreset.addEventListener('click', (e) =>{
      shet = 0
      buttonout.textContent = `${shet}`
    })
  }
  //5
  {
    buttonopen = document.querySelector("[data-js='t5-open']")
    let modal = document.querySelector("[data-js='t5-modal']")
    let backdrop = document.querySelector("[data-js='t5-backdrop']")
    let buttoclose = document.querySelector("[data-js='t5-close']")
    buttonopen.addEventListener('click', (e) =>{
      modal.removeAttribute('hidden')
    })
    backdrop.addEventListener('click', (e) =>{
      modal.toggleAttribute('hidden')
    })
    buttoclose.addEventListener('click', (e) =>{
      modal.toggleAttribute('hidden')
    })
    document.addEventListener('keydown', (e) => {
      if (e.key = 'Escape'){
        modal.hidden = true
      }
    })
  }
  //6
  {
    let taba = document.querySelector("[data-tab='a']")
    let tabb = document.querySelector("[data-tab='b']")
    let tabc = document.querySelector("[data-tab='c']")
    let panea = document.querySelector("[data-pane='a']")
    let paneb = document.querySelector("[data-pane='b']")
    let panec = document.querySelector("[data-pane='c']")
    taba.addEventListener('click', (e) =>{
      taba.classList.add('is-active')
      tabb.classList.remove('is-active')
      tabc.classList.remove('is-active')
      panea.classList.add('is-active')
      paneb.classList.remove('is-active')
      panec.classList.remove('is-active')
    })
    tabb.addEventListener('click', (e) =>{
      taba.classList.remove('is-active')
      tabb.classList.add('is-active')
      tabc.classList.remove('is-active')
      panea.classList.remove('is-active')
      paneb.classList.add('is-active')
      panec.classList.remove('is-active')
    })
    tabc.addEventListener('click', (e) =>{
      taba.classList.remove('is-active')
      tabb.classList.remove('is-active')
      tabc.classList.add('is-active')
      panea.classList.remove('is-active')
      paneb.classList.remove('is-active')
      panec.classList.add('is-active')
    })
  }
  //7
  {
  let text = document.querySelector("[data-js='t7-input']")
  let button = document.querySelector("[data-js='t7-run']")
  let outfield = document.querySelector("[data-js='t7-out']")
  button.addEventListener('click', (e) =>{
    let reversetext = ""
    for (i = text.value.length-1; i >= 0; i--){
      reversetext += text.value[i]
    }
    outfield.textContent = `${reversetext}`
  })
  }
  //8
  {
  let firstfield = document.querySelector("[data-js='t8-a']")
  let secondfield = document.querySelector("[data-js='t8-b']")
  let buttonplus = document.querySelector("[data-js='t8-add']")
  let buttonmult = document.querySelector("[data-js='t8-mul']")
  let outfield = document.querySelector("[data-js='t8-out']")
  buttonplus.addEventListener('click', (e) =>{
    if (firstfield.value != "" && secondfield.value != ""){
      outfield.textContent = `${Number(`${firstfield.value}`) + Number(`${secondfield.value}`)}`
    } else {
      outfield.textContent = "NaN"
    }
  })
  buttonmult.addEventListener('click', (e) =>{
    if (firstfield.value != "" && secondfield.value != ""){
      outfield.textContent = `${Number(`${firstfield.value}`) * Number(`${secondfield.value}`)}`
    } else {
      outfield.textContent = "NaN"
    }
  })
  }
  //9
  {
  let buttonvizion = document.querySelector("[data-js='t9-toggle']")
  let text = document.querySelector("[data-js='t9-text']")
  buttonvizion.addEventListener('click', (e) => {
    if (buttonvizion.textContent == "Скрыть") {
      text.hidden = true
      buttonvizion.textContent = "Показать"
    } else {
      text.hidden = false
      buttonvizion.textContent = "Скрыть"
    }
  })
  }
  //10
  {
  let range = document.querySelector("[data-js='t10-range']")
  let out = document.querySelector("[data-js='t10-out']")
  let box = document.querySelector("[data-js='t10-box']")
  range.addEventListener('input', (e)=>{
    out.textContent = `${range.value}px`
    box.style.height = `${range.value}px`
    box.style.width = `${range.value}px`
  })
  }
  //11
  {
  let seconds = document.querySelector("[data-js='t11-seconds']")
  let start = document.querySelector("[data-js='t11-start']")
  let stop = document.querySelector("[data-js='t11-stop']")
  let out = document.querySelector("[data-js='t11-out']")
  let interval
  let timer = 0
  function delay (){
    if (timer == 0){
      clearInterval(interval)
    }
    out.textContent = `${timer--}`
  }
  start.addEventListener('click', (e)=>{
    timer = Number(seconds.value)
    console.log(timer)
    interval = setInterval(delay,1000)
  })
  stop.addEventListener('click', (e)=>{
    clearInterval(interval)
  })
  }
  //12 
  {
  let plus = document.querySelector("[data-js='t12-plus']")
  let label = document.querySelector("[data-js='t12-label']")
  let bar = document.querySelector("[data-js='t12-bar']")
  let count = 0
  plus.addEventListener('click', (e)=>{
    if (count < 100){
      count += 10
      label.textContent = `${count}%`
      bar.style.width = `${count}%`
    }
  })
  }
  //13
  {
  let input = document.querySelector("[data-js='t13-input']")
  let out = document.querySelector("[data-js='t13-out']")
  document.addEventListener('keydown', (e) =>{
    if (e.key == 'Escape'){
      out.textContent = "нажат Escape"
      input.blur()
    }
    if (e.key == 'k' && e.ctrlKey == true){
      out.textContent = "нажат Control + K"
      input.value = ''
    }
  })
  }
  //14
  {
  let next = document.querySelector("[data-js='t14-next']")
  let out = document.querySelector("[data-js='t14-out']")
  let list = 
  function randText(){

  }
  next.addEventListener('click', (e) =>{

  })
  }
});
