// build the nav
let sections = document.querySelectorAll("section");
console.log(sections)
let text = [];
let Idarray = [];
for (const section of sections) {
    text.push(section.querySelector('h2').innerText);
    Idarray.push(section.id);
}

let navbar = document.getElementById('navbar__list');
let i = 0;
for (const TextElement of text) {
    const node = document.createElement("li");
    const node2 = document.createElement("a")
    node2.href = `#${Idarray[i]}`;
    node.appendChild(node2);
    node2.textContent = TextElement;
    node2.classList.add("menu__link");
    navbar.appendChild(node);
    i += 1;
}

// Scroll spy 

let navLinks = document.querySelectorAll("a.menu__link") 
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        console.log(top)
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id')


        if (top > offset && top < offset + height ) {
            navLinks.forEach (n => {
                console.log(id)
                console.log(offset)
                console.log(offset + height)
                n.classList.remove('active')
            })
            document.querySelector('a[href *= '+ id +']').classList.add('active')
        }
    })
}

