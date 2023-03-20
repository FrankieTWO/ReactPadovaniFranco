const products = [
    {id:'1',
    name:'Adrenaline Booster',
    price: '3200',
    category: 'Cyberware',
    img: 'https://static.wikia.nocookie.net/cyberpunk/images/d/de/StaminaRegenBooster_Icon_CP2077.png',
    stock: 10,
    description:'This cyberware implant will restore stamina by providing a constant flow of adrenaline to the circulatory system.'},
    {
    id:'2',
    name:'Syn-Lungs',
    price: '800',
    category: 'Cyberware',
    img: 'https://static.wikia.nocookie.net/cyberpunk/images/a/a0/IronLungs_Icon_CP2077.png',
    stock: 5,
    description:'This Syn-Lungs are Synthetic tissues designed to increase functional lung tissue surface area. '},
    {
    id:'3',
    name:'Satori',
    price: '8500',
    category: 'Katana',
    img: 'https://static.wikia.nocookie.net/cyberpunk/images/a/a9/Katana_Saburo.png',
    stock: 1,
    description:'Property of Saburo Arasaka. An antique weapon forged in the first half of the 20th century that has not dulled a day.'},
    {
    id:'4',
    name:'Arasaka Nowaski',
    price: '8500',
    category: 'Weapons',
    img: 'https://static.wikia.nocookie.net/cyberpunk/images/0/06/Masamune_Arasaka_2020.png',
    stock: 200,
    description:'The Nowaksi is a large but powerful, 3-round burst-fire assault rifle. It has a slow fire rate, but has incredible stability and recoil control.'},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
    
