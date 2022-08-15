const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries = countries =>{
    //  console.log(countries);
    const allCountriesHTML = countries.map(country=>getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(''); 
}


 const getCountryHTML = country =>{
    return `
    <div class="card">
    <img class="image" title="${country.name.official}" src="${country.flags.png}" /> 
    <h1 class="card-title">Name: ${country.name.common}</h1>
    <p class="card-subtitle">Capital: ${country.capital}</p>
    <h5 class="card-subtitle">Official: ${country.name.official}</h5>
    </div>
    `
} 


loadCountries();