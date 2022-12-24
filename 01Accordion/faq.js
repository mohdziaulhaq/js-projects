const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

function showFaq() {
  let button = document.querySelectorAll(".show_btn");
  button.forEach((element)=>{

    element.addEventListener('click',()=>{ 
      if(element.parentElement.nextElementSibling.className=="hidden"){
        
        element.parentElement.nextElementSibling.removeAttribute("class")
        element.textContent = "-";
      }
      else {
        element.parentElement.nextElementSibling.classList.add("hidden");
        element.textContent = "+";
      }
      
     })
  })
}

function createFaq() {
  let accordian_body =  document.querySelector(".accordian_body");
  
  faqData.forEach((data)=>{
    let faq = document.createElement("div");
    faq.classList.add('faq');

    let header = document.createElement("div");
    header.classList.add("faq_header");
    
    let q = document.createElement('h3');
    q.textContent = data.question;

    let btn = document.createElement("button");
    btn.textContent = "+";
    btn.classList.add("show_btn");

    header.append(btn);
    header.append(q);

    let a = document.createElement('p');
    a.textContent = data.answer;
    a.classList.add("hidden");

    faq.append(header);
    faq.append(a);

    accordian_body.append(faq);
    console.log(faq);
  })
  
}

createFaq();
showFaq();