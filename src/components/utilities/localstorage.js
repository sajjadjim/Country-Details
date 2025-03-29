// # Steps we can use the Data Store in Local File 
const getFromLocalStorage = () =>{
    const storedString =localStorage.getItem('country_name')

    if(storedString){
        const storedCountryName = JSON.parse(storedString)
        return storedCountryName;
    }
    return []
}

const saveCountryNameLocalStorage = (country_name) =>{
const countryNameStringConverted = JSON.stringify(country_name)
localStorage.setItem(country_name,countryNameStringConverted)
}

const addCountryNameLocalStorage = (cca3) =>{
    const country_name = getFromLocalStorage()
    const newCountryName = [...country_name , cca3]
    saveCountryNameLocalStorage(newCountryName)
}
export {addCountryNameLocalStorage as addCountry , getFromLocalStorage as getCountry}