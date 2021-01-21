

function kilometerToMeter(kilometer) {

    //Convert kilometer to meter(Calculation)
    if(kilometer>0){
           var Meter=kilometer*1000;
           return Meter;
    }
    else{
        console.log("Error! Distance cannot be negative.")
    }    
}

//var result=kilometerToMeter(10);
//console.log(result); 

function budgetCalculator(watchNum,phoneNum,laptopNum) {
    var watchPrice=50;
    var phonePrice=100;
    var laptopPrice=500;

    //Calculation of  budget.
    if(watchNum>0 && phoneNum>0 && laptopNum>0)
    {
        var TotalCost=((watchNum*watchPrice)+(phoneNum*phonePrice)+(laptopNum*laptopPrice));
        return TotalCost;
    }
    else{
        console.log("Error! Enter the right information. ")
    }
}

//var result1=budgetCalculator(2,1,0);
//console.log(result1);

function hotelCost(numberOfDay) {

    //Calculation of Hotel Cost.
    if(numberOfDay>0)
    {
        if(numberOfDay>0 && numberOfDay<=10)
        {
            var totalCost = (numberOfDay*100);
            return totalCost;
        }

        else if (numberOfDay>10 && numberOfDay<=20)
        {
            var totalCost = ( (10*100) + ((numberOfDay-10)*80) );
            return totalCost;
        }
        else
        {
            var totalCost = ( (10*100) + (10*80) + ((numberOfDay-20)*50) );
            return totalCost;
        }
    }

    else
    {
        console.log("Error! Enter the right information ");
    }
}
//var result = hotelCost(20);
//console.log(result);




function megaFriend(arr) {
 var MegaFriend = "";
  for (var i = 0; i < arr.length; i++) {
    if (MegaFriend.length < arr[i].length) {
        MegaFriend = arr[i];
    }
  }
  return MegaFriend;
}
var arr=['FaysalMahmud', 'akib', 'mahin']
console.log(megaFriend(arr));