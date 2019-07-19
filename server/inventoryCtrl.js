const inventoryItems = [
    {
        id: 1,
        item: 'Klymit 20 Bag',
        description: 'Super warm sleeping bag, lightweight, packable.  Synthetic down.',
        price: 220,
        category: 'sleep',
        weight: 3.1,
        image: 'https://www.klymit.com/pub/media/catalog/product/cache/small_image/320x380/beff4985b56e3afdbeabfc89641a4582/k/l/klymit_oversize_20_copy_copy.jpg',
        inpack: false
    },
    {
        id: 2,
        item: 'Wilderness Technology Tent',
        description: '1.5 man super lightweight tent with waterproof sidewalls',
        price: 200,
        category: 'sleep',
        weight: 2.8,
        image: 'https://recreationoutlet.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/w/t/wt_airlight_ul2_open_front_1.jpg',
        inpack: false
    },
    {
        id: 3,
        item: 'Klymit Sleeping Pad',
        description: 'Static V regular length inflatable sleeping pad',
        price: 55,
        category: 'sleep',
        weight: 1.4,
        image: 'https://www.klymit.com/pub/media/catalog/product/cache/small_image/320x380/beff4985b56e3afdbeabfc89641a4582/a/r/armoredv_whitebackground.png',
        inpack: false
    },
    {
        id: 4,
        item: 'Jetboil',
        description: 'Jetboil cooking stove',
        price: 100,
        category: 'food',
        weight: .8,
        image: 'https://jetboil.johnsonoutdoors.com/sites/johnsonoutdoors-store/files/assets/images/10/1/1097716_primary/1097716_primary.png',
        inpack: false
    }
]
let id = 5
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
    // console.log(req.params, req.body)
    const {id} = req.params
    const {price} = req.body
    const index = inventoryItems.findIndex(el => (
        el.id === +id
    ))

    inventoryItems[index].price = price
    res.status(200).send(inventoryItems)
},
deleteItem (req, res) {
    const {id} = req.params
    const index = inventoryItems.findIndex(el => (
        el.id === +id
    ))
    inventoryItems.splice(index, 1)
    res.status(200).send(inventoryItems)
}
}