
// GET CITY INPUT INFO AND UPDATE NAME VALUE 

function getWeather () {
    const cityInput = document.getElementById('city-input');
    const cityName = document.getElementById('city-Name');
    cityName.innerHTML = cityInput.value;
    
    localStorage.setItem("City",cityInput.value);

// LOCAL STORAGE 


// DISPLAY DAYS OF THE WEEK AFTER 'TODAY'

    var date2 = dayjs().add(1,'day').format('dddd');
    var date3 = dayjs().add(2,'day').format('dddd');
    var date4 = dayjs().add(3,'day').format('dddd');
    var date5 = dayjs().add(4,'day').format('dddd');

    const date2El = document.getElementById('date2');
    date2El.textContent = date2;
    const date3El = document.getElementById('date3');
    date3El.textContent = date3;
    const date4El = document.getElementById('date4');
    date4El.textContent = date4;
    const date5El = document.getElementById('date5');
    date5El.textContent = date5;




// UPDATES EACH INDIVIDUAL CARD BY ITS CORRESPONDING ID NAME

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityInput.value+'&appid=07c8d1e85bf89680f48a4f02d1c2e6e4&units=imperial')
.then(respose => respose.json())
.then (data =>{

    for (i=0;i<5;i++){
        document.getElementById('day' +(i+1)+'Temp').innerHTML= Number(data.list[i].main.temp).toFixed(0)+'°F';
    }
    for (i=0;i<5;i++){
        document.getElementById('day' +(i+1)+'Wind').innerHTML='Wind: ' +Number(data.list[i].wind.speed).toFixed(1)+' mph';
    }
    for (i=0;i<5;i++){
        document.getElementById('day' +(i+1)+'Hum').innerHTML='Hum: ' +Number(data.list[i].main.humidity).toFixed(1)+'%';
    }
    for (i=0;i<5;i++){
        document.getElementById('img' +(i+1)).src='http://openweathermap.org/img/wn/'+ data.list[i].weather[0].icon+'@2x'+'.png';
    }
    console.log(data)
})

.catch(error => alert('ERROR'))
}
