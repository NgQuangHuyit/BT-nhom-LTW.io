document.addEventListener("DOMContentLoaded", function() {
    function saveLoginData() {
        var name = document.getElementById('name').value;
        var dob = document.getElementById('dob').value;
        var studentId = document.getElementById('CCCD').value;
        var className = document.getElementById('diachi').value;
  
        localStorage.setItem('name', name);
        localStorage.setItem('dob', dob);
        localStorage.setItem('CCCD', studentId);
        localStorage.setItem('diachi', className);
  
        document.getElementById('name').value = '';
        document.getElementById('dob').value = '';
        document.getElementById('CCCD').value = '';
        document.getElementById('diachi').value = '';
  
        var loginForm = document.getElementById('loginForm');
        loginForm.style.display = 'none';
  
        var quizContainer = document.getElementById('quizContainer');
        quizContainer.style.display = 'block';
  
        return false;
      }

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



})