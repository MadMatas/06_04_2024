document.getElementById('forma').addEventListener('submit', (e) =>{
    e.preventDefault();
});

      
    let submitButton = () =>{
        let kintamasis = document.getElementById('task').value;
        let newTask = document.createElement('li');
        newTask.innerHTML += `<input type="checkbox" id="check" class=""><p class="check">${kintamasis}</p>`;
        document.getElementById('result').appendChild(newTask);
    }



    document.getElementById('result').addEventListener('change', (event) =>{
        event.preventDefault;
        event.target.closest('li').classList.toggle('lined');
    

    })
    
