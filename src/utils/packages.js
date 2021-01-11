export const package_types = [
    'Envelope',
    'Parcel',
    'Soft',
    'Freezed'
]

export const package_status = [
    'WITH SUPLIER',
    'AT GREEN MILE HUB',
    'REBUNDLING',
    'ON FLEET',
    'DELIVERED',
]

export const packageToCard=(card)=>{
    return {
        column_id:card.status,
        card:{
            id:card.id,
            name:card.name ,
            type:package_types[card.type],
            size:card.size,
            to:card.to
        }
    }
}

export const packagesToCards = (_packages)=> {
    const columns =[]
    package_status.forEach((elem , index) => {
        const column ={
            id:index+1, 
            title:elem,
            cards:_packages.filter((_package)=>_package.status==index+1).map((elem)=>{
                return packageToCard(elem).card
            }),
        }
     
        columns.push(column)
    });
    return {
        columns
    }
}