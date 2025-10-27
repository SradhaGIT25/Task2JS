function getTicketPrice(age){
    let ticketPrice=0;
    if(age<=13){
        ticketPrice="$10";
    }
    else if(age>=13 && age<=59){
        ticketPrice="$20";
    }
    else{
        ticketPrice="$15";
    }
    console.log(ticketPrice);
}
getTicketPrice(11);
getTicketPrice(13);
getTicketPrice(14);
getTicketPrice(59);
getTicketPrice(61);