class Ticket {
    constructor({cost,siteOnly,costOfHouse,color,bankMortageValue}){
        this.cost = cost;
        this.rent = {
            siteOnly: siteOnly,
            "1House": siteOnly+1000,
            "2House":(siteOnly+1000)*2,
            "3House":((siteOnly+1000)*2)+(siteOnly+1000),
            "hotel":(((siteOnly+1000)*2)+(siteOnly+1000))+1000
        }
        this.costOfHouse = costOfHouse;
        this.costOfHotel = costOfHouse;
        this.bankMortageValue = bankMortageValue || costOfHouse/2;
        this.color = color;
        this.developed = true;
    }
}
let TICKETS = {
    "india":new Ticket({ cost:4500, siteOnly:550, costOfHouse:5500, color:'blue'}),
    "canada":new Ticket({ cost:4000, siteOnly:400, costOfHouse:4000, color:'yellow'}),
    "france":new Ticket({ cost:2500, siteOnly:300, costOfHouse:2500, color:'brown'}),
    "iraq":new Ticket({ cost:5000, siteOnly:500, costOfHouse:5000, color:'green'}),
    "singapore":new Ticket({ cost:3000, siteOnly:300, costOfHouse:3000, color:'blue'}),
    "germany":new Ticket({ cost:3500, siteOnly:400, costOfHouse:3500, color:'brown'}),
    "japan":new Ticket({ cost:2500, siteOnly:250, costOfHouse:2500, color:'blue'}),
    "italy":new Ticket({ cost:3500, siteOnly:200, costOfHouse:2000, color:'brown'}),
    "railways":{ cost:9500, rent:1500, bankMortageValue:5000, 
        description:"if you are owner of roadways the rent is $2500" },
    "waterways":{ cost:9500,rent:1400, bankMortageValue:2000, 
        description:"if you are owner of satellite the rent is $2200" },
    "petroleum":{ cost:5500,rent:500, bankMortageValue:5000, 
        description:"if you are owner of roadways the rent is $2500" },
    "roadways":{ cost:3500, rent:800,bankMortageValue:1800, 
        description:"if you are owner of railways the rent is $1500" },
    "satellite":{ cost:2000, rent:500,bankMortageValue:1250, 
        description:"if you are owner of waterways the rent is $1000" },
    "airways":{ cost:10500, rent:1500,bankMortageValue:5500, 
        description:"if you are owner of petroleum the rent is $2500" },
    "iran":new Ticket({ cost:2500, siteOnly:300, costOfHouse:2500, color:'green'}),
    "england":new Ticket({ cost:2500, siteOnly:700, costOfHouse:7000, 
        bankMortageValue:3500, color:'brown'}),
    "china":new Ticket({ cost:4500, siteOnly:450, costOfHouse:4500, color:'blue'}),
    "egypt":new Ticket({ cost:3200, siteOnly:300, costOfHouse:3200, 
        bankMortageValue:1500, color:'green'}),
    "switzerland":new Ticket({ cost:3500, siteOnly:700, costOfHouse:6500, 
        bankMortageValue:3300, color:'brown'}),
    "malaysia":new Ticket({ cost:1500, siteOnly:200, costOfHouse:1500, 
        bankMortageValue:800, color:'green'}),
    "brazil":new Ticket({ cost:2500, siteOnly:300, costOfHouse:2500, 
        bankMortageValue:1300, color:'yellow'}),
    "mexico":new Ticket({ cost:4000, siteOnly:900, costOfHouse:4000, 
        bankMortageValue:2000, color:'yellow'}),
    "usa":new Ticket({ cost:8500, siteOnly:1000, costOfHouse:8500, 
        bankMortageValue:5000, color:'yellow'}),
    "hongkong":new Ticket({ cost:2000, siteOnly:200, costOfHouse:2500, 
        bankMortageValue:1000, color:'blue'}),
    "saudiArabia":new Ticket({ cost:5500, siteOnly:600, bankMortageValue:2800,
        costOfHouse:5500, color:'blue'}),
    "australia":new Ticket({ cost:3300, siteOnly:400, bankMortageValue:2000, 
        costOfHouse:3300, color:'yellow'}),
}