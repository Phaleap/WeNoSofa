function viewDetails(name, description, price, image){
    const params = new URLSearchParams({
        name:name,
        description:description,
        price:price,
        image:image
    })
    window.location.href = `details.html?${params.toString()}`
}