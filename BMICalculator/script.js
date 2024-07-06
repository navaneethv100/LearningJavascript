const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const comment = document.querySelector('#comment')

    let bmi = 0;

    if(height === ' ' || height <= 0 || isNaN(height)){
        results.innerHTML = `Incorrect height, enter correct Height`
    }
    else if(weight === ' ' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Incorrect weight, enter correct Weight`
    }
    else{
        bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }

    if(bmi <= 18.6){
        comment.innerHTML = `You are underweight, please gain weight`
    }else if(bmi > 18.6 && bmi <= 24.9){
        comment.innerHTML = `You weight is in Normal range, Kudos :)`
    } else{
        comment.innerHTML = `You are overweight, please reduce weight`
    }
    

});