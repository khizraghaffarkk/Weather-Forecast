        const search_input=document.querySelector(".search input");
        const search_btn=document.querySelector(".search button");
        const imgtag=document.querySelector(".weather .wea-img");
        document.querySelector(".error").style.display="none";
        // let imgsrc=imgtag.src;
        const api_url="https://api.openweathermap.org/data/2.5/weather?";
        const api_key="4fd5f2a6049d90813f2b39ace4c13b81";
        const unit= "metric"

        search_btn.addEventListener("click",()=>{
            const cityv= search_input.value;
            checkfun(cityv);
            console.log(search_input.value);
        })

        async function checkfun(city){
            const response= await fetch(api_url+`&appid=${api_key}`+`&q=${city}`+`&units=${unit}`);
            if(response.status==404){
                document.querySelector(".weather").style.display="none";
                document.querySelector(".error").style.display="block";
            }
            const data= await response.json(response);
            document.querySelector(".weather h1").innerHTML=Math.round(data.main.temp) + "°C";
            document.querySelector(".weather h2").innerHTML=data.name;
            document.querySelector(".humidity .humval").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind .windval").innerHTML=data.wind.speed + " km/h";

            if(data.weather[0].main=="Clouds"){
                imgtag.src="images/clouds.png";
            }
            else if(data.weather[0].main=="Clear"){
                imgtag.src="images/clear.png";
            }
            else if(data.weather[0].main=="Drizzle"){
                imgtag.src="images/drizzle.png";
            }
            else if(data.weather[0].main=="Mist"){
                imgtag.src="images/mist.png";
            }
            else if(data.weather[0].main=="Rain"){
                imgtag.src="images/rain.png";
            }
            else if(data.weather[0].main=="Snow"){
                imgtag.src="images/snow.png";
            }
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
            console.log(data);
        }