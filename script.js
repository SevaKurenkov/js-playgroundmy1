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
  let list = ["нельзя кинуть камень в волка, но можно кинуть волка в камень", 
    "волк не кусает волка, но может поцарапать его мнением", "волк думает, что он пастух, пока не наступает ночь",
     "овца мечтает стать волком, но волк не мечтает стать овцой", "волк не воет на луну, луна воет от волка",
      "иногда волк приходит в овечьей шкуре, но чаще овца — в волчьей", "волка ноги кормят, а язык наказывает",
       "волк не тот, кто воет, а тот, кто молчит в засаде", "если волк долго смотрит в бездну, бездна начинает бояться",
        "волк знает, что овца не станет волком, но овца об этом не догадывается", "старый волк не учит молодого, молодой сам учит старого",
         "волк не боится охотника, охотник боится волка внутри себя", "волк может притвориться собакой, но кость выдаст",
          "волк выбирает одиночество не потому, что сильный, а потому что устал от стаи",
           "овцы считают волков жестокими, пока не узнают, что творят пастухи", "волк не спрашивает разрешения войти в лес",
            "волк умирает так же, как и живет — молча", "волк не помнит зла, он помнит голод", "волк не воет от боли, он воет от тишины",
             "волк прощает, но не забывает, а овца забывает, но не прощает", "волк не хочет быть человеком, человек хочет быть волком",
              "волк — это не тот, кто ест мясо, а тот, кто не ест траву", "волк никогда не спит, он просто закрывает глаза",
               "волк не крадет, он берет своё", "волк не боится капкана, он боится, что капкан не щелкнет", "волк приходит не тогда, когда голоден, а когда устал ждать",
                "волк не знает слова «надо», он знает слово «хочу»", "волк не убегает от опасности, он убегает к ней", 
                "волк не верит в чудеса, он сам чудо", "волк не любит, когда его гладят, даже если это ласка", "волк не смотрит назад, там уже никого нет",
                 "волк не завидует собаке, собаке нечего дать", "волк не охотится ради забавы, забава охотится на волка",
                  "волк не помнит своих жертв, жертвы помнят его", "волк не выбирает вожака, вожак выбирает себя", 
                  "волк не знает границ, границы знают его", "волк не боится смерти, смерть боится волка", "волк не воет в одиночестве, одиночество воет в нем",
                   "волк не ищет легкой добычи, легкая добыча сама ищет волка", "волк не меняет шкуру, шкура меняет его", "волк не терпит лжи, ложь не терпит волка",
                    "волк не учит выживать, он учит не умирать", "волк не защищает стаю, стая защищает волка", "волк не мстит, он просто ждет", "волк не плачет, даже когда внутри всё воет",
                     "волк не просит помощи, помощь просится к нему", "волк не тоскует по дому, его дом — тоска", "волк не помнит добра, он помнит, кто его сделал", "волк не знает усталости, усталость знает его",
                      "волк не бежит за зайцем, заяц бежит от волка", "волк не играет по правилам, он играет на выживание", "волк не жалеет о прошлом, прошлое жалеет о нем", "волк не боится холода, холод боится его дыхания",
                       "волк не нуждается в одобрении, одобрение нуждается в волке", "волк не верит словам, он верит следам", "волк не спит с открытыми глазами, он видит сны наяву", "волк не любит, когда его сравнивают с собакой, даже если собака — друг",
                        "волк не прощает предательства, он его не замечает", "волк не знает, что он сильный, он просто не знает слабости", "волк не думает о завтра, завтра думает о нем", "волк не помнит обид, обиды помнят его", "волк не ищет справедливости, он ищет равновесие", "волк не убегает от бури, он идет сквозь неё", "волк не выбирает путь, путь выбирает его", "волк не знает, что такое «слишком поздно», для него всегда вовремя", "волк не считает добычу, он считает дни без неё", "волк не ждет награды, награда — это следующий рассвет", "волк не боится темноты, темнота боится его глаз", "волк не знает одиночества в стае, он знает стаю в одиночестве", "волк не воет, чтобы его услышали, он воет, чтобы услышать себя", "волк не меняет своих привычек, привычки меняют его", "волк не станет есть с руки, даже если рука не кусается", "волк не знает, что он хищник, он просто не умеет быть травоядным", "волк не помнит, сколько ему лет, он помнит, сколько зим", "волк не завидует льву, льву нечего дать, кроме гривы", "волк не боится быть непонятым, он боится быть понятым неправильно", "волк не идет на свет, свет идет к нему, когда гаснет костер", "волк не верит в дружбу с человеком, но человек верит в дружбу с волком", "волк не учит своих детей охотиться, он учит их не стать добычей", "волк не знает жалости, жалость знает его слабость", "волк не терпит суеты, суета терпит его спокойствие", "волк не ищет виноватых, виноватые сами находят волка", "волк не помнит, где его дом, его дом там, где он оставил след", "волк не воет на луну, луна отражает его вой", "волк не знает предела, предел — это когда кончаются силы", "волк не боится высоты, он боится только падения", "волк не ждет весны, весна ждет, когда он проснется", "волк не понимает шуток, его жизнь — не шутка", "волк не просит есть, он берет, когда голоден", "волк не считает чужих овец, он считает своих", "волк не знает уюта, уют — это клетка без прутьев", "волк не боится быть битым, он боится быть поглаженным", "волк не помнит, как он стал волком, он всегда им был", "волк не умеет лгать, он умеет молчать", "волк не видит разницы между днем и ночью, он видит разницу между жертвой и охотником", "волк не знает, что он свободен, он просто не знает цепей", "волк не ищет легких путей, легкие пути ведут в капкан", "волк не боится волков из других стай, он боится себя вчерашнего", "волк не воет просто так, просто так не бывает", "волк не умирает от старости, он умирает, когда перестает быть волком"]
  function randText(){
    let random = Math.floor(Math.random() * 100)
    return list[random]
  }
  next.addEventListener('click', (e) =>{
    out.textContent = `${randText()}`
  })
  }
  //15
  {
    let coords = document.querySelector("[data-js='t15-coords']")
    let area = document.querySelector("[data-js='t15-area']")
    let item = document.querySelector("[data-js='t15-item']")
    let drag = false
    let offsetX, offsetY;
    item.addEventListener('mousedown', (e) =>{
      drag = true
    })
    area.addEventListener('mousemove', (e) =>{
      if (drag == true){
        console.log(e)
        let rect = item.getBoundingClientRect();
        offsetX = e.clientX;
        offsetY = e.clientY;
        item.style.left = `${offsetX}px`
        item.style.top = `${offsetY}px`
      }
    })
    area.addEventListener('mouseup', (e) =>{
      drag = false
    })
  }
  //16
  {
    let animate = document.querySelector("[data-js='t16-animate']")
    let box = document.querySelector("[data-js='t16-box']")
    animate.addEventListener('click', (e) =>{
      box.classList.add('task16')
    })
  }
  //17
  {
    let area = document.querySelector("[data-js='t17-area']")
    function randombox(){
      let div = document.createElement('div')
      div.style.position = 'absolute';
      div.style.width = `${100}px`
      div.style.height = `${100}px`
      div.style.background = `#${111}`
      let maxX = Math.max(0,area.clientWidth - 100)
      let maxY = Math.max(0,area.clientHeight - 100)
      div.style.left = `${Math.floor(Math.random() * maxX)}px`
      div.style.top = `${Math.floor(Math.random() * maxY)}px`
      area.append(div)
    }
    setInterval(randombox,1000)
  }
  //18
  {
    let area = document.querySelector("[data-js='t18-area']")
    function randombox(){
      let div = document.createElement('div')
      div.style.position = 'absolute';
      div.style.width = `75px`
      div.style.height = `75px`
      div.style.background = `#111`
      let maxX = Math.max(0,area.clientWidth)
      let maxY = Math.max(0,area.clientHeight - 100)
      div.style.left = `${maxX}px`
      div.style.top = `${Math.floor(maxY/2)}px`
      let leftkol = maxX
      area.append(div)
      requestAnimationFrame(() => toleft(div, leftkol))
    }

    function toleft(div, leftkol){
      div.style.left = `${leftkol--}px`
      if (parseInt(div.style.left) <= -100){
        div.remove()
      }
      requestAnimationFrame(() => toleft(div, leftkol))
    }

    setInterval(randombox,1000)
  }

  //19
  {
      {
    let area = document.querySelector("[data-js='t19-area']")
    function randombox(){
      let div = document.createElement('div')
      div.style.position = 'absolute';
      div.style.width = `75px`
      div.style.height = `75px`
      div.style.background = `#111`
      let maxX = Math.max(0,area.clientWidth)
      let maxY = Math.max(0,area.clientHeight - 100)
      div.style.left = `${maxX}px`
      div.style.top = `${Math.floor(Math.random() * maxY)}px`
      let leftkol = maxX
      area.append(div)
      requestAnimationFrame(() => toleft(div, leftkol))
    }

    function toleft(div, leftkol){
      div.style.left = `${leftkol = leftkol - 3}px`
      if (parseInt(div.style.left) <= -100){
        div.remove()
      }
      requestAnimationFrame(() => toleft(div, leftkol))
    }

    setInterval(randombox,1500)
  }
  }

  //20
  {
    let area = document.querySelector("[data-js='t20-area']")
    let scoreout = document.querySelector("[data-js='t20-score']")
    let score = 0
    function randombox(){
      let div = document.createElement('div')
      div.style.position = 'absolute';
      div.style.width = `75px`
      div.style.height = `75px`
      div.style.background = `#111`
      let maxX = Math.max(0,area.clientWidth)
      let maxY = Math.max(0,area.clientHeight - 100)
      div.style.left = `${maxX}px`
      div.style.top = `${Math.floor(Math.random() * maxY)}px`
      let leftkol = maxX
      area.append(div)
      requestAnimationFrame(() => toleft(div, leftkol))
      div.addEventListener('click', (e) =>{
        score++
        scoreout.textContent = `${score}`
        div.remove()
      })
    }

    function toleft(div, leftkol){
      div.style.left = `${leftkol = leftkol - 3}px`
      if (parseInt(div.style.left) <= -100){
        div.remove()
      }
      requestAnimationFrame(() => toleft(div, leftkol))
    }

    setInterval(randombox,1500)
  }
  

  //21
  {
    let area = document.querySelector("[data-js='t21-area']")
    let scoreout = document.querySelector("[data-js='t21-score']")
    let livesout = document.querySelector("[data-js='t21-lives']")
    let gameover = document.querySelector("[data-js='t21-game-over']")
    let restart = document.querySelector("[data-js='t21-restart']")
    function randombox(){
      let div = document.createElement('div')
      div.style.position = 'absolute';
      div.style.width = `75px`
      div.style.height = `75px`
      div.style.background = `#111`
      let maxX = Math.max(0,area.clientWidth)
      let maxY = Math.max(0,area.clientHeight - 100)
      div.style.left = `${maxX}px`
      div.style.top = `${Math.floor(Math.random() * maxY)}px`
      area.append(div)
      div.addEventListener('click', (e) =>{
        score++
        scoreout.textContent = score
        div.toggleAttribute('hidden')
      })
      requestAnimationFrame(() => toleft(div))
    }

    function toleft(div){
      if (parseInt(div.style.left) <= -100){
        div.remove()
        if (div.hidden == false){
          lives--
          livesout.textContent = lives
        }
      } 
      else 
      {
        if (lives != 0){
          div.style.left = `${parseInt(div.style.left)- 3}px`
          requestAnimationFrame(() => toleft(div))
        }
      }
      if (lives == 0){
        div.remove()
        clearInterval(interval)
        gameover.removeAttribute('hidden')
      }
    }

    let interval = setInterval(randombox,1500)
    let score = 0
    let lives = 3
    restart.addEventListener('click', (e) =>{
      gameover.toggleAttribute('hidden')
      score = 0
      scoreout.textContent = score
      lives = 3
      livesout.textContent = lives
      interval = setInterval(randombox,1500)
    })
  }
});
