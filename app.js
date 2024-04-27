const quetions = [{
  'que': 'Which of the following is markup language ?' ,
  'a': 'HTML' ,
  'b': 'CSS' ,
  'c': 'JAVASCRIPT' ,
  'd': 'PHP' ,
  'correct': 'a'
},
{
    'que': 'What is an Array in Java?' ,
    'a': 'A collection of elements with different types ' ,
    'b': 'A collection of elements with the same type' ,
    'c': 'A resizable data structure ' ,
    'd': 'A container for storing key-value pairs ' ,
    'correct': 'a'
  },
  {
    'que': 'What is the process at the most detailed level of the data flow diagrams known as?' ,
    'a': 'interfaces' ,
    'b': 'data flow' ,
    'c': 'function premitives' ,
    'd': 'transform transiction' ,
    'correct': 'c'
  },
  {
    'que': 'How do you declare an array in Java?' ,
    'a': 'int[] ; ' ,
    'b': ' int arr[]; ' ,
    'c': 'int arr; ' ,
    'd': 'Array<int> arr;' ,
    'correct': 'b'
  },
  {
    'que': 'Which method is used to copy one array into another in Java? ' ,
    'a': 'copy() ' ,
    'b': 'clone()' ,
    'c': 'System.arraycopy()' ,
    'd': 'Arrays.copy()' ,
    'correct': 'c'
  }
]

let index = 0 ;
let total = quetions.length;
let wrong = 0 ,
right = 0 ;
const queBox = document.getElementById("queBox")
const optionInput = document.querySelectorAll(".options")


const loadQuetion = ()=>{
    if(index===total) {
        return endQuiz()
    }

    reset();
    const data = quetions[index]
    // console.log(data);
    queBox.innerText = `${index+1}) ${data.que}`
    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d
}

//logic for ans check 

const submitQuiz = ()=>{
    const data = quetions[index];
    const ans = getAnswer()

// logic for to check either option is select or not or give alert 

    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }
    

    if (ans === data.correct) {
        right++ ;
    }else{
        wrong++ ;
    }
    index++ ; 
    loadQuetion(); // logic for next quetion 
    return
}

const getAnswer = ()=>{
    let answer ;    
    optionInput.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer ;
}

const reset = ()=>{
    optionInput.forEach(
        (input) =>{
            input.checked = false ;
        }
    )
}

const endQuiz = ()=>{
    document.getElementById("box").innerHTML = 
    `<h3>Thank you for playing Quiz</h3>
    <h2>${right} / ${total} are correct </h2>`
}

loadQuetion();