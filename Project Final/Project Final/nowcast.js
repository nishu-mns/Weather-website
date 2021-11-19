function current() {
    var i;
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = " --- "+newName.value+" --- ";


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=66c0a25f29581738dc32d4ee9737dcc2')
.then(response => response.json())
.then(data => {

    for(i = 0; i<6; i++){
        document.getElementById("time" + (i+1)).innerHTML = "Time: " + data.list[i].dt_txt;

    }
    for(i = 0; i<6; i++){
        document.getElementById("hr" + (i+1)).innerHTML = "Temperature " + Number(data.list[i].main.temp - 273.15).toFixed(1)+ "°C";
    }

    for(i = 0; i<6; i++){
        document.getElementById("humidity" + (i+1)).innerHTML = "Humidity: " + Number(data.list[i].main.humidity)+"%";
    }
    

     for(i = 0; i<6; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    for(i = 0; i<6; i++){
        document.getElementById("description" + (i+1)).innerHTML = "Description:  " + data.list[i].weather[0].description;
        const a=1,b=2,c=3,d=4,e=5,f=6;
        if(a==1){
        if(data.list[0].weather[0].description=='overcast clouds'){
            document.getElementById('day01').style.backgroundImage = "url('https://c.tenor.com/f14xUacYc1oAAAAd/storm-world-meteorological-day.gif')";
            
        }
        else if(data.list[0].weather[0].description=='broken clouds'){
            document.getElementById('day01').style.backgroundImage = "url('https://wxmanreno.files.wordpress.com/2016/05/clouds.gif')";    
        }
        else if(data.list[0].weather[0].description=='scattered clouds'){
            document.getElementById('day01').style.backgroundImage = "url('https://i.pinimg.com/originals/b3/5a/5e/b35a5e7f1c352cbcc0fb84e883734258.gif')";    
        }
        else if(data.list[0].weather[0].description=='clear sky'){
            document.getElementById('day01').style.backgroundImage = "url('https://64.media.tumblr.com/c4205bb1f4230f38c8e79b49055a9c67/b4d4f2e5ea6f4d8e-78/s640x960/a14a1b8f48c5d728c499c6ca9f2922003866bb63.gifv')";    
        }
        else if(data.list[0].weather[0].description=='few clouds'){
            document.getElementById('day01').style.backgroundImage = "url('https://www.ibm.com/case-studies/the-weather-company-ibm-cloud/static/TWC_Gif_640w.gif')";    
        }
        else if(data.list[0].weather[0].description=='light rain'){
            document.getElementById('day01').style.backgroundImage = "url('https://media3.giphy.com/media/vLi3T5m3RH45y/giphy.gif')";    
        }
        else if(data.list[0].weather[0].description=='moderate rain'){
            document.getElementById('day01').style.backgroundImage = "url('https://c.tenor.com/A7M4OXQrRLIAAAAC/rain-light.gif')";    
        }
        else if(data.list[0].weather[0].description=='heavy rain'){
            document.getElementById('day01').style.backgroundImage = "url('https://c.tenor.com/5sMqxZU0224AAAAd/heavy-rain-rainy-day.gif')";    
        }
        else if(data.list[0].weather[0].description=='thunderstrom'){
            document.getElementById('day01').style.backgroundImage = "url('https://c.tenor.com/40TzQtV84U4AAAAC/lightning-thunder.gif')";    
        }
    }
    if(b==2){
         if(data.list[1].weather[0].description=='overcast clouds'){
            document.getElementById('day02').style.backgroundImage = "url('https://c.tenor.com/f14xUacYc1oAAAAd/storm-world-meteorological-day.gif')";
            
        }
        else if(data.list[1].weather[0].description=='broken clouds'){
            document.getElementById('day02').style.backgroundImage = "url('https://wxmanreno.files.wordpress.com/2016/05/clouds.gif')";    
        }
        else if(data.list[1].weather[0].description=='scattered clouds'){
            document.getElementById('day02').style.backgroundImage = "url('https://i.pinimg.com/originals/b3/5a/5e/b35a5e7f1c352cbcc0fb84e883734258.gif')";    
        }
        else if(data.list[1].weather[0].description=='clear sky'){
            document.getElementById('day02').style.backgroundImage = "url('https://64.media.tumblr.com/c4205bb1f4230f38c8e79b49055a9c67/b4d4f2e5ea6f4d8e-78/s640x960/a14a1b8f48c5d728c499c6ca9f2922003866bb63.gifv')";    
        }
        else if(data.list[1].weather[0].description=='few clouds'){
            document.getElementById('day02').style.backgroundImage = "url('https://www.ibm.com/case-studies/the-weather-company-ibm-cloud/static/TWC_Gif_640w.gif')";    
        }
        else if(data.list[1].weather[0].description=='light rain'){
            document.getElementById('day02').style.backgroundImage = "url('https://media3.giphy.com/media/vLi3T5m3RH45y/giphy.gif')";    
        }
        else if(data.list[1].weather[0].description=='moderate rain'){
            document.getElementById('day02').style.backgroundImage = "url('https://c.tenor.com/A7M4OXQrRLIAAAAC/rain-light.gif')";    
        }
        else if(data.list[1].weather[0].description=='heavy rain'){
            document.getElementById('day02').style.backgroundImage = "url('https://c.tenor.com/5sMqxZU0224AAAAd/heavy-rain-rainy-day.gif')";    
        }
        else if(data.list[1].weather[0].description=='thunderstrom'){
            document.getElementById('day02').style.backgroundImage = "url('https://c.tenor.com/40TzQtV84U4AAAAC/lightning-thunder.gif')";    
        }}
        if(c==3){
            if(data.list[2].weather[0].description=='overcast clouds'){
               document.getElementById('day03').style.backgroundImage = "url('https://c.tenor.com/f14xUacYc1oAAAAd/storm-world-meteorological-day.gif')";
               
           }
           else if(data.list[2].weather[0].description=='broken clouds'){
               document.getElementById('day03').style.backgroundImage = "url('https://wxmanreno.files.wordpress.com/2016/05/clouds.gif')";    
           }
           else if(data.list[2].weather[0].description=='scattered clouds'){
               document.getElementById('day03').style.backgroundImage = "url('https://i.pinimg.com/originals/b3/5a/5e/b35a5e7f1c352cbcc0fb84e883734258.gif')";    
           }
           else if(data.list[2].weather[0].description=='clear sky'){
               document.getElementById('day03').style.backgroundImage = "url('https://64.media.tumblr.com/c4205bb1f4230f38c8e79b49055a9c67/b4d4f2e5ea6f4d8e-78/s640x960/a14a1b8f48c5d728c499c6ca9f2922003866bb63.gifv')";    
           }
           else if(data.list[2].weather[0].description=='few clouds'){
            document.getElementById('day03').style.backgroundImage = "url('https://www.ibm.com/case-studies/the-weather-company-ibm-cloud/static/TWC_Gif_640w.gif')";    
        }
        else if(data.list[2].weather[0].description=='light rain'){
            document.getElementById('day03').style.backgroundImage = "url('https://media3.giphy.com/media/vLi3T5m3RH45y/giphy.gif')";    
        }
        else if(data.list[2].weather[0].description=='moderate rain'){
            document.getElementById('day03').style.backgroundImage = "url('https://c.tenor.com/A7M4OXQrRLIAAAAC/rain-light.gif')";    
        }
        else if(data.list[2].weather[0].description=='heavy rain'){
            document.getElementById('day03').style.backgroundImage = "url('https://c.tenor.com/5sMqxZU0224AAAAd/heavy-rain-rainy-day.gif')";    
        }
        else if(data.list[2].weather[0].description=='thunderstrom'){
            document.getElementById('day03').style.backgroundImage = "url('https://c.tenor.com/40TzQtV84U4AAAAC/lightning-thunder.gif')";    
        }
      }   
           if(d==4){
            if(data.list[3].weather[0].description=='overcast clouds'){
               document.getElementById('day04').style.backgroundImage = "url('https://c.tenor.com/f14xUacYc1oAAAAd/storm-world-meteorological-day.gif')";
               
           }
           else if(data.list[3].weather[0].description=='broken clouds'){
               document.getElementById('day04').style.backgroundImage = "url('https://wxmanreno.files.wordpress.com/2016/05/clouds.gif')";    
           }
           else if(data.list[3].weather[0].description=='scattered clouds'){
               document.getElementById('day04').style.backgroundImage = "url('https://i.pinimg.com/originals/b3/5a/5e/b35a5e7f1c352cbcc0fb84e883734258.gif')";    
           }
           else if(data.list[3].weather[0].description=='clear sky'){
               document.getElementById('day04').style.backgroundImage = "url('https://64.media.tumblr.com/c4205bb1f4230f38c8e79b49055a9c67/b4d4f2e5ea6f4d8e-78/s640x960/a14a1b8f48c5d728c499c6ca9f2922003866bb63.gifv')";    
           }
           else if(data.list[3].weather[0].description=='few clouds'){
            document.getElementById('day04').style.backgroundImage = "url('https://www.ibm.com/case-studies/the-weather-company-ibm-cloud/static/TWC_Gif_640w.gif')";    
        }
        else if(data.list[3].weather[0].description=='light rain'){
            document.getElementById('day04').style.backgroundImage = "url('https://media3.giphy.com/media/vLi3T5m3RH45y/giphy.gif')";    
        }
        else if(data.list[3].weather[0].description=='moderate rain'){
            document.getElementById('day04').style.backgroundImage = "url('https://c.tenor.com/A7M4OXQrRLIAAAAC/rain-light.gif')";    
        }
        else if(data.list[3].weather[0].description=='heavy rain'){
            document.getElementById('day04').style.backgroundImage = "url('https://c.tenor.com/5sMqxZU0224AAAAd/heavy-rain-rainy-day.gif')";    
        }
        else if(data.list[3].weather[0].description=='thunderstrom'){
            document.getElementById('day04').style.backgroundImage = "url('https://c.tenor.com/40TzQtV84U4AAAAC/lightning-thunder.gif')";    
        }}
           if(e==5){
            if(data.list[4].weather[0].description=='overcast clouds'){
               document.getElementById('day05').style.backgroundImage = "url('https://c.tenor.com/f14xUacYc1oAAAAd/storm-world-meteorological-day.gif')";
               
           }
           else if(data.list[4].weather[0].description=='broken clouds'){
               document.getElementById('day05').style.backgroundImage = "url('https://wxmanreno.files.wordpress.com/2016/05/clouds.gif')";    
           }
           else if(data.list[4].weather[0].description=='scattered clouds'){
               document.getElementById('day05').style.backgroundImage = "url('https://i.pinimg.com/originals/b3/5a/5e/b35a5e7f1c352cbcc0fb84e883734258.gif')";    
           }
           else if(data.list[4].weather[0].description=='clear sky'){
               document.getElementById('day05').style.backgroundImage = "url('https://64.media.tumblr.com/c4205bb1f4230f38c8e79b49055a9c67/b4d4f2e5ea6f4d8e-78/s640x960/a14a1b8f48c5d728c499c6ca9f2922003866bb63.gifv')";    
           }
           else if(data.list[4].weather[0].description=='few clouds'){
            document.getElementById('day05').style.backgroundImage = "url('https://www.ibm.com/case-studies/the-weather-company-ibm-cloud/static/TWC_Gif_640w.gif')";    
        }
        else if(data.list[4].weather[0].description=='light rain'){
            document.getElementById('day05').style.backgroundImage = "url('https://media3.giphy.com/media/vLi3T5m3RH45y/giphy.gif')";    
        }
        else if(data.list[4].weather[0].description=='moderate rain'){
            document.getElementById('day05').style.backgroundImage = "url('https://c.tenor.com/A7M4OXQrRLIAAAAC/rain-light.gif')";    
        }
        else if(data.list[4].weather[0].description=='heavy rain'){
            document.getElementById('day05').style.backgroundImage = "url('https://c.tenor.com/5sMqxZU0224AAAAd/heavy-rain-rainy-day.gif')";    
        }
        else if(data.list[4].weather[0].description=='thunderstrom'){
            document.getElementById('day05').style.backgroundImage = "url('https://c.tenor.com/40TzQtV84U4AAAAC/lightning-thunder.gif')";    
        }}
           if(f==6){
            if(data.list[5].weather[0].description=='overcast clouds'){
               document.getElementById('day06').style.backgroundImage = "url('https://c.tenor.com/f14xUacYc1oAAAAd/storm-world-meteorological-day.gif')";    
           }
           else if(data.list[5].weather[0].description=='broken clouds'){
               document.getElementById('day06').style.backgroundImage = "url('https://wxmanreno.files.wordpress.com/2016/05/clouds.gif')";    
           }
           else if(data.list[5].weather[0].description=='scattered clouds'){
               document.getElementById('day06').style.backgroundImage = "url('https://i.pinimg.com/originals/b3/5a/5e/b35a5e7f1c352cbcc0fb84e883734258.gif')";    
           }
           else if(data.list[5].weather[0].description=='clear sky'){
               document.getElementById('day06').style.backgroundImage = "url('https://64.media.tumblr.com/c4205bb1f4230f38c8e79b49055a9c67/b4d4f2e5ea6f4d8e-78/s640x960/a14a1b8f48c5d728c499c6ca9f2922003866bb63.gifv')";    
           }
           else if(data.list[5].weather[0].description=='few clouds'){
            document.getElementById('day06').style.backgroundImage = "url('https://www.ibm.com/case-studies/the-weather-company-ibm-cloud/static/TWC_Gif_640w.gif')";    
        }
        else if(data.list[5].weather[0].description=='light rain'){
            document.getElementById('day06').style.backgroundImage = "url('https://media3.giphy.com/media/vLi3T5m3RH45y/giphy.gif')";    
        }
        else if(data.list[5].weather[0].description=='moderate rain'){
            document.getElementById('day06').style.backgroundImage = "url('https://c.tenor.com/A7M4OXQrRLIAAAAC/rain-light.gif')";    
        }
        else if(data.list[5].weather[0].description=='heavy rain'){
            document.getElementById('day06').style.backgroundImage = "url('https://c.tenor.com/5sMqxZU0224AAAAd/heavy-rain-rainy-day.gif')";    
        }
        else if(data.list[5].weather[0].description=='thunderstrom'){
            document.getElementById('day06').style.backgroundImage = "url('https://c.tenor.com/40TzQtV84U4AAAAC/lightning-thunder.gif')";    
        }}
    
    }

    for(i = 0; i<6; i++){
        document.getElementById("wind" + (i+1)).innerHTML = "Wind Speed:  " + data.list[i].wind.speed+"km/h";
    }


})
.catch(err => alert("The city do not exist."))
}
$(document).ready(function() {

    var active1 = false;
    var active2 = false;
    var active3 = false;
    var active4 = false;
  
      document.querySelector('.parent2').addEventListener('click',function(){
      
      if (!active1) $(this).find('.test1').css({'background-color': 'gray', 'transform': 'translate(0px,125px)'});
      else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
       if (!active2) $(this).find('.test2').css({'background-color': 'gray', 'transform': 'translate(60px,105px)'});
      else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
        if (!active3) $(this).find('.test3').css({'background-color': 'gray', 'transform': 'translate(105px,60px)'});
      else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
        if (!active4) $(this).find('.test4').css({'background-color': 'gray', 'transform': 'translate(125px,0px)'});
      else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
      active1 = !active1;
      active2 = !active2;
      active3 = !active3;
      active4 = !active4;
        
      });
  });



