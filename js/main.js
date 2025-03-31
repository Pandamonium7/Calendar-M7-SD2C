
let main =  document.createElement("main");
let liTag = "";

document.body.appendChild(main);

const allMain =  document.querySelectorAll("main");



let d = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let crntYear = d.getFullYear();
let crntDay = d.getDay();
let crntMonth = d.getMonth(); 

let ldayofMonth = new Date(crntYear,crntMonth + 1, 0).getDate();

for (let index = 1; index <= ldayofMonth; index++) {
  liTag += `<li> ${index} </li>`;
}



allMain[1].innerHTML = `<div> 
            <h3>${months[crntMonth]}, ${crntYear}</h3>   
                <button>&larr;</button>
                <button>&rarr;</button>

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






console.log(ldayofMonth);

/*const createEle = () =>  {
    const main = document.createElement("main");
   // const div = document.createElement('div');
   // const ul = document.createElement('ul');



}

createEle();
/*const createCalendar = () => {

}

createCalendar();
//console.log(months[crntMonth]);

var arr = ["ul", "li", "strong", "em", "u"]

let el = arr.reduceRight((el, n) => {
  let d = document.createElement(n)
  d.appendChild(el)
  return d
}, document.createTextNode("Text Here"))

document.getElementById('container').appendChild(el)

 */