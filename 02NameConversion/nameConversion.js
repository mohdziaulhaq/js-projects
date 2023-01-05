let text = document.getElementById("text");
let button = document.getElementById("convert-btn");
button.addEventListener("click",()=>{
   
    let camelcase = toCamelCase(text.value);
    document.getElementById("camel-case").textContent = camelcase;
   
    let pascalcase = toPascalCase(text.value);
    document.getElementById("pascal-case").textContent = pascalcase;
   
    let snakecase = toSnakeCase(text.value);
    document.getElementById("snake-case").textContent = snakecase;
   
    let screamingsnakecase = toScreamingSnakeCase(text.value);
    document.getElementById("screaming-snake-case").textContent = screamingsnakecase;
   
    let kebabcase = toKebabCase(text.value);
    document.getElementById("kebab-case").textContent = kebabcase;

    let screamingkebabcase = toScreamingKebabCase(text.value);
    document.getElementById("screaming-kebab-case").textContent = screamingkebabcase;
   
})

let toCamelCase = (str) =>{
    return str.toLowerCase().
    replace(/[^a-zA-Z0-9]+(.)/g, (m,chr) => chr.toUpperCase());
}

let toPascalCase = (str)  => {
    if (/^[a-z\d]+$/i.test(str)) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str.replace(
      /([a-z\d])([a-z\d]*)/gi,
      (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    ).replace(/[^a-z\d]/gi, '');
}

let toSnakeCase = (str) =>{
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
           return acc.concat(val.toLowerCase());
        }, []);
        return snakeArr.join('_');
}

let toScreamingSnakeCase = (str) =>{
    const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
           return acc.concat(val.toUpperCase());
        }, []);
        return snakeArr.join('_');
}

let toKebabCase = string => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toLowerCase();

let toScreamingKebabCase = string => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toUpperCase();