const main = document.createElement("main");
document.body.appendChild(main);

let liTag = "";

const allMain = document.querySelectorAll("main");

let d = new Date();
let crntYear = d.getFullYear();
let crntMonth = d.getMonth();



getCalendar = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  let fwdayofMonth = new Date(crntYear, crntMonth, 1).getDay(); //first weekday of current month
  let ldayofMonth = new Date(crntYear, crntMonth + 1, 0).getDate(); //last day digit current month 28-30-31
  let lwdayofMonth = new Date(crntYear, crntMonth, ldayofMonth).getDay(); //last weekday of current month
  let ldayofPrevMonth = new Date(crntYear, crntMonth, 0).getDate(); //last day digit of prev month

  //console.log(ldayofPrevMonth);

  for (let i = fwdayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${ldayofPrevMonth - i + 1}</li>`
  }

  for (let i = 1; i <= ldayofMonth; i++) {
    let isToday =
      i === d.getDate() &&
        crntMonth === new Date().getMonth() &&
        crntYear === new Date().getFullYear()
        ? ' class="active"'
        : "";

    liTag += `<li${isToday}>${i}</li>`;
  }

  for (let i = lwdayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lwdayofMonth + 1}</li>`
  }


  /* array indice change to 0 after mockup */
  allMain[0].innerHTML = `<div> 
                  <h3>${months[crntMonth]}, ${crntYear}</h3>   
                      <button id="previous">&larr;</button>
                      <button id="next">&rarr;</button>

              </div>

              <ul>
                  <li>Su</li>
                  <li>Mo</li>
                  <li>Tu</li>
                  <li>We</li>
                  <li>Th</li>
                  <li>Fr</li>
                  <li>Sa</li>
              </ul>
              <ul>
                ${liTag}
              </ul>
      `;



  const allBtn = document.querySelectorAll("#previous, #next");

  allBtn.forEach(item => {
    item.addEventListener('click', e => {
      const btnId = e.target.id;

      if (btnId === 'previous' && crntMonth === 0) {
        crntYear--;
        crntMonth = 11;
      } else if (btnId === 'next' && crntMonth === 11) {
        crntYear++;
        crntMonth = 0;
      } else {
        crntMonth = (btnId === 'next') ? crntMonth + 1 : crntMonth - 1;
      }

      d = new Date(crntYear, crntMonth, new Date().getDate());
      crntYear = d.getFullYear();
      crntMonth = d.getMonth();
      liTag = "";

      getCalendar();
    })
  })
}

getCalendar();





