const btn = document.querySelector('.clock');
const txt = document.querySelector('.greeting');
const dt = new Date();
const server = "http://localhost:8000/clockInfo";

let currentTime = document.querySelector('.logtime');

btn.addEventListener('click', logTime);


function logTime() {
  userId = document.getElementById('loginId').value;
  let day = updateDate();

  if (btn.textContent === 'Clock in') {
    btn.textContent = 'Clock out';
    btn.style.backgroundColor = 'red';
    txt.textContent = `Goodbye`;
    clock = updateTime();
    currentTime.textContent = clock;
    userClock = `Clock-out: `+ clock; 
  }else if (btn.textContent === 'Clock') {
    btn.textContent = 'Clock in';
    btn.style.backgroundColor = 'green';
    txt.textContent = `Welcome`;
    clock = updateTime();
    currentTime.textContent = clock;
    userClock = `Clock-in: `+ clock; 
  }else {
    btn.textContent = 'Clock';
    btn.style.backgroundColor = '#111d63e3';
    txt.textContent = ``;
    currentTime.textContent = ``;
    
  }

    //fetch(url, config)
    //data = {title, body}
    const data = {userId, day, userClock};
    console.log(data);
    const config = {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(server, config)
    .then(function(response){
        return response.json()
    })
}

function getUsername() {
  // Send a GET request without any data to the server
  fetch(server, {method: "GET"})
  // Get the JSON data from the raw response
     .then(res => res.json())
  // Print the result
     .then(console.log)
     
}

function updateTime() {
    time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    
    return time;
}

function updateDate() {
  date = dt.getDate() + "-" + dt.getMonth() + "-" + dt.getFullYear();

  return date;
}