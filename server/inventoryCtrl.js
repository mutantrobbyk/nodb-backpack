const inventoryItems = [
    {
        id: 1,
        item: 'Klymit 20 Bag',
        description: 'Super warm sleeping bag, lightweight, packable.  Synthetic down.',
        price: 220,
        category: 'sleep',
        weight: 3,
        image: 'https://www.klymit.com/pub/media/catalog/product/cache/small_image/320x380/beff4985b56e3afdbeabfc89641a4582/k/l/klymit_oversize_20_copy_copy.jpg',
        inpack: false
    },
    {
        id: 2,
        item:  'Tent',
        description: 'Wilderness Technology 1.5 man super lightweight tent with waterproof sidewalls',
        price: 200,
        category: 'sleep',
        weight: 3,
        image: 'https://recreationoutlet.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/w/t/wt_airlight_ul2_open_front_1.jpg',
        inpack: false
    },
    {
        id: 3,
        item: 'Klymit Sleeping Pad',
        description: 'Static V regular length inflatable sleeping pad',
        price: 55,
        category: 'sleep',
        weight: 1,
        image: 'https://www.klymit.com/pub/media/catalog/product/cache/small_image/320x380/beff4985b56e3afdbeabfc89641a4582/a/r/armoredv_whitebackground.png',
        inpack: false
    },
    {
        id: 4,
        item: 'Jetboil',
        description: 'Jetboil cooking stove',
        price: 100,
        category: 'food',
        weight: 1,
        image: 'https://jetboil.johnsonoutdoors.com/sites/johnsonoutdoors-store/files/assets/images/10/1/1097716_primary/1097716_primary.png',
        inpack: false
    },
    {
        id: 5,
        item: 'Spotting Scope',
        description: 'Vortex razor HD spotting scope',
        price: 1700,
        category: 'optics',
        weight: 4,
        image: 'https://op1.0ps.us/365-240-ffffff/opplanet-vortex-razor-hd-85mm-angled-spotting-scope-rzr-main.jpg',
        inpack: false
    },
    {
        id: 6,
        item: 'Tripod',
        description: 'Vortex summit tripod',
        price: 130,
        category: 'optics',
        weight: 2,
        image: 'https://cdn.shopify.com/s/files/1/0785/3853/products/SHL257.jpeg?v=1510698577',
        inpack: false
    },
    {
        id: 7,
        item: 'Water Filter',
        description: 'Sawyer mini water filter',
        price: 20,
        category: 'hydration',
        weight: 1,
        image: 'https://www.ems.com/on/demandware.static/-/Sites-vestis-master-catalog/default/dw69699745/product/images/1308/794/1308794/1308794_915_alt2.jpg',
        inpack: false
    },
    {
        id: 8,
        item: 'Rifle',
        description: 'Browning A-bolt gold medallion 30-06',
        price: 1200,
        category: 'weapon',
        weight: 7,
        image: 'https://www.browning.com/content/dam/browning/product/firearms/rifles/x-bolt/white-gold/Browning%20X-Bolt%20White%20Gold%20Medallion%20-%20035235226_D1%20(1).jpg/_jcr_content/renditions/original.img.jpg',
        inpack: false
    },
    {
        id: 9,
        item: 'Bow',
        description: 'PSE Archery 70lb single cam compound bow',
        price: 400,
        category: 'weapon',
        weight: 5,
        image: 'https://media.mwstatic.com/product-images/880x660/Primary/314/314243.jpg',
        inpack: false
    },
    {
        id: 10,
        item: 'Range Finder',
        description: 'Vortex Ranger 1800 rangefinder',
        price: 350,
        category: 'optics',
        weight: 1,
        image: 'https://www.ammoland.com/wp-content/uploads/2012/02/Vortex-Ranger-1000-Rangefinder.jpg',
        inpack: false
    },
]
let id = 11
module.exports = {
getItems (req, res) {
    res.status(200).send(inventoryItems)
},
addItem (req, res) {
    req.body.id = id++
    inventoryItems.push(req.body)
    res.status(200).send(inventoryItems)
},
updateItem (req, res) {

    const {id} = req.params
    const {price, inpack} = req.body
    const index = inventoryItems.findIndex(el => (
        el.id === +id
    ))
    if(inpack == true) {
        inventoryItems[index].inpack = true
    } else if (inpack == false) {
        inventoryItems[index].inpack = false
    }else {
        inventoryItems[index].price = price
    }
    res.status(200).send(inventoryItems)
},
deleteItem (req, res) {
    const {id} = req.params
    const index = inventoryItems.findIndex(el => (
        el.id === +id
    ))
    inventoryItems.splice(index, 1)
    res.status(200).send(inventoryItems)
},
searchItem (req, res) {
    let search = inventoryItems.filter(el => (
        el.item.toLowerCase() === req.query.item.toLowerCase()
    ))
    res.status(200).send(search)
}
}