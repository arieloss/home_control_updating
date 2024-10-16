if (!!window.EventSource) { 
    var source = new EventSource('/events'); 
    source.addEventListener('toggleState', function(e) { 
        let jsonData = JSON.parse(e.data); 
        let element = document.getElementById('btn' + (jsonData.id + 1)); 
        if (jsonData.status) { 
            element.innerHTML = 'OFF'; 
            element.className = 'button2'; 
        } else { 
            element.innerHTML = 'ON'; 
            element.className = 'button'; 
        } 
    }, false); 
}