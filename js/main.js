function submitAnswer(){
	var tick = document.getElementsByClassName('answer1')
	var choose = document.getElementsByClassName('answer2')
	var select = document.getElementsByClassName('answer3')
	var result = document.getElementById('result')

	var array = []

	var answer1, answer2, answer3

	for(i = 0; i < tick.length; i++){
		if(tick[i].checked){
			answer1 = tick[i].value
			array.push(answer1)
		}
	}console.log(array)
	

	if(answer1 == undefined ){
		result.className = 'failure'
		result.textContent = 'You forgot to answer question1.'
		return
	}
	console.log('answer1: ' + answer1)

	for(i = 0; i < choose.length; i++){
		if(choose[i].selected){
			answer2 = choose[i].value
			array.push(answer2)
		}
	}console.log(array)

	if(answer2 == ""){
		result.className = 'failure'
		result.textContent= 'you forgot to answer question2.'
		return
	}
	console.log('answer2: ' + answer2)

	for(i = 0; i < select.length; i++){
		if(select[i].checked){
			answer3 = select[i].value
			array.push(answer3)
		}
	}console.log(array)
	result.className = 'success'
	result.textContent = 'You answered all three questions. Congratulations!!'

	if(answer3 == undefined){
		result.className = 'failure'
		result.textContent = 'you forgot to answer question3'
		return
	}
	
	console.log('answer3: ' + answer3)
	console.log('current survey answers: ' + answer1 + ' ' + answer2 + ' ' + answer3)
}

document.getElementById('submit').addEventListener('click', submitAnswer, false)





