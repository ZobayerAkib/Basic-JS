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




function budgetCalculator(numOfWatch,numOfPhone,numOflaptop) {
    var watchPrice=50;
    var phonePrice=100;
    var laptopPrice=500;

    //Calculation of  budget.
    if(numOfWatch>0 && numOfPhone>0 && numOflaptop>0)
    {
        var TotalCost=((numOfWatch*watchPrice)+(numOfPhone*phonePrice)+(numOflaptop*laptopPrice));
        return TotalCost;
    }
    else{
        console.log("Error! Enter the right information. ")
    }
}



function hotelCost(numberOfDay) {

    //Calculation of Hotel Cost.
    if(numberOfDay>0)
    {
        if(numberOfDay>0 && numberOfDay<=10)
        {
            //For 1st 10 days hotel cost is 100 

            var totalCost = (numberOfDay*100);
            return totalCost;

        }

        else if (numberOfDay>10 && numberOfDay<=20)
        {   
            //For 1st 10 days hotel cost is 100 
            //For 11th day to 20th day hotel cost is 80

            var totalCost = ( (10*100) + ((numberOfDay-10)*80) );
            return totalCost;

        }
        else
        {   
            //For 1st 10 days hotel cost is 100 
            //For 11th day to 20th day hotel cost is 80
            //For 21th day to nth day hotel cost is 50

            var totalCost = ( (10*100) + (10*80) + ((numberOfDay-20)*50) );
            return totalCost;
        }
    }

    else
    {
        console.log("Error! Enter the right information ");
    }
}




function megaFriend(arr) {

 //initialize a variable to store the longest word   
 var MegaFriend = "";

  for (var i = 0; i < arr.length; i++) {

    if (MegaFriend.length < arr[i].length) {

        MegaFriend = arr[i];

    }
  }
  return MegaFriend;
}

var arr=['Karim', 'Rahimuddin', 'Takrim'] //storing some name as string in arr variable
