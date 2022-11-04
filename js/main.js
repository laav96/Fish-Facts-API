document.querySelector('button').addEventListener('click', getFetch)


function getFetch() {
    const url = `https://www.fishwatch.gov/api/species`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let random = Math.floor(Math.random() * data.length)
        document.querySelector('img').src = data[random]["Species Illustration Photo"].src
        document.querySelector('h3').innerText = data[random]["Species Name"]
        document.querySelector('h4').innerHTML = data[random]["Health Benefits"]
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// I am passionate about web devlopment and JavaScript looking to gain hands-on experience, lookign for unpaid internships. 