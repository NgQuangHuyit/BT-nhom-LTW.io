document.addEventListener("DOMContentLoaded", function() {
      var questions = [
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: true
        },
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: true
        },
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: true
        },
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: true
        },
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: true
        },
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: false
        },
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: true
        },
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: true
        },
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: false
        },
        {
            type: 'T-F',
            question: ' dung hay sai',
            answer: true
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiChoices',
            question: 'Chon dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: 'dap an a'
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: 'multiAnswers',
            question: 'Chon cac dap an dung',
            choices: ['dap an a', 'dap an b', 'dap an c', 'dap an d'],
            answer: ['dap an a', 'dap an d']
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
        {
            type: "typing", 
            question: "Tra loi cau hoi",
            answer: "Dap an"
        },
    ]
    var questionsContainer = document.getElementById("questionsContainer")
    questions.forEach(function(question, index) {
        const ques = document.createElement("div")
        ques.classList.add("question")
        if (question.type === 'T-F') {
            ques.innerHTML
            ques.innerHTML = `
                        <p>Câu ${index + 1}: ${question['question']}</p>
                        <input type="radio" name="question1" id="question1True" value="true">
                        <label for="question1True">Đúng</label>
                        <input type="radio" name="question1" id="question1False" value="false">
                        <label for="question1False">Sai</label>
            `
            questionsContainer.appendChild(ques)
        }
        if (question.type === 'multiChoices') {
            ques.innerHTML
            ques.innerHTML = `
                <p>Câu ${index+1}: ${question['question']}</p>
                <input type="radio" name="question${index+1}" id="question${index + 1}Choice1" value="${question.choices[0]}">
                <label for="question14Choice1">${question.choices[0]}</label>
                <input type="radio" name="question${index+1}" id="question${index + 1}Choice2" value="${question.choices[1]}">
                <label for="question14Choice2">${question.choices[1]}</label>
                <input type="radio" name="question${index+1}" id="question${index + 1}Choice3" value="${question.choices[2]}">
                <label for="question14Choice3">${question.choices[2]}</label>
                <input type="radio" name="question${index+1}" id="question${index + 1}Choice4" value="${question.choices[3]}">
                <label for="question14Choice4">${question.choices[3]}</label>
            `
            console.log(question.choices[0])
            questionsContainer.appendChild(ques)
        }

        if (question.type === 'multiAnswers') {
            ques.innerHTML
            ques.innerHTML = `
            <p>Câu ${index+1}: ${question['question']}</p>
            <input type="checkbox" name="question${index+1}" id="question${index + 1}Choice1" value="${question.choices[0]}">
            <label for="question14Choice1">${question.choices[0]}</label>
            <input type="checkbox" name="question${index+1}" id="question${index + 1}Choice2" value="${question.choices[1]}">
            <label for="question14Choice2">${question.choices[1]}</label>
            <input type="checkbox" name="question${index+1}" id="question${index + 1}Choice3" value="${question.choices[2]}">
            <label for="question14Choice3">${question.choices[2]}</label>
            <input type="checkbox" name="question${index+1}" id="question${index + 1}Choice4" value="${question.choices[3]}">
            <label for="question14Choice4">${question.choices[3]}</label>
            `
            questionsContainer.appendChild(ques)
        }
        if (question.type === 'typing') {
            ques.innerHTML
            ques.innerHTML = `
                <p>Câu ${index}: ${question.question}</p>
                <input type="text" name="question${index}">
            `
            questionsContainer.appendChild(ques)
        } 

    })
})