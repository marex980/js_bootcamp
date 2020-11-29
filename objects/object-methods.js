 let restaurant = {
     name: "MDEV",
     guestCapacity: 75,
     guestCount: 0,
     checkAviability: function(partySize){
         let seatsLeft = this.guestCapacity - this.guestCount
         return partySize <= seatsLeft
     },
     seatParty: function(guestCount){
        this.guestCount += guestCount
    },
     removeParty: function (guestCount){
        this.guestCount -= guestCount
     }
 }


restaurant.seatParty(72)
console.log(restaurant.checkAviability(4))
//restaurant.removeParty(5)
//console.log(restaurant.checkAviability(4))

//console.log(restaurant)
