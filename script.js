function odliczanie()
	{
		var dzisiaj = new Date();//obiekt Date 
		
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		var rok = dzisiaj.getFullYear();
		var milisekundy = dzisiaj.getTime();
		
		var end = new Date("06/25/2021");//data wydarzenia
		var endDzien = end.getDate();
		var endMiesiac = end.getMonth()+1;
		var endRok = end.getFullYear();
		var milisekundy2 = end.getTime();
		
		var pozostalo = milisekundy2 - milisekundy; //obliczamy ile milisekund pozostało do wydarzenia
		var dni = Math.floor(pozostalo/86400000); //obliczamy liczbe dni do wydarzenia
		
	
		
		document.getElementById("aktualnaData").innerHTML = "Aktualna data: "+dzien+"/"+miesiac+"/"+rok; 
		document.getElementById("dataWydarzenia").innerHTML = "Data wydarzenia do którego obliczamy liczbę dni: "+endDzien+"/"+endMiesiac+"/"+endRok;
		document.getElementById("dniDoWydarzenia").innerHTML ="Do wydarzenia pozostało: "+ dni;
		 
	}

	function inputDate()
	{
		var data = window.prompt("Podaj datę (DD/MM/YYYY): ");
		data = data.toString();
		var dzien = data[0]+data[1];
		var miesiac = data[3]+data[4];
		var rok = data[6]+data[7]+data[8]+data[9];
		var milisekund = dzien * 86400000 + rok * 31556952000;
		var dzienLuty;
		if((rok%4==0)&&(rok%100!=0)) dzienLuty = 29;
		else dzienLuty = 28;
		switch(miesiac)
		{
			case 01:
				milisekund = milisekund + 2678400000;
				break;
			case 02:
				milisekund = milisekund + dzienLuty * 86400000;
				break;
			case 03:
				milisekund = milisekund + 2678400000;
				break;
			case 04:
				milisekund = milisekund + 2592000000;
				break;
			case 05:
				milisekund = milisekund + 2678400000;
				break;
			case 06:
				milisekund = milisekund + 2592000000;
				break;
			case 07:
				milisekund = milisekund + 2678400000;
				break;
			case 08:
				milisekund = milisekund + 2678400000;
				break;
			case 09:
				milisekund = milisekund + 2592000000;
				break;
			case 10:
				milisekund = milisekund + 2678400000;
				break;
			case 11:
				milisekund = milisekund + 2592000000;
				break;
			case 12:
				milisekund = milisekund + 2678400000;
				break;

		}
		var Ndzisiaj = new Date();//obiekt Date 
		
		var dzienTeraz = dzisiaj.getDate();
		var miesiacTeraz = dzisiaj.getMonth()+1;
		var rokTeraz = dzisiaj.getFullYear();
		var milisekundyTeraz = dzisiaj.getTime();
		var iloscDni = Math.floor((milisekundyTeraz-milisekund)/86400000)
		document.getElementById("aktualnaData").innerHTML = "Aktualna data: "+dzienTeraz+"/"+miesiacTeraz+"/"+rokTeraz; 
		document.getElementById("dataWydarzenia").innerHTML = "Data wydarzenia do którego obliczamy liczbę dni: "+dzien+"/"+miesiac+"/"+rok;
		document.getElementById("dniDoWydarzenia").innerHTML ="Do wydarzenia pozostało: "+ iloscDni;
	}
	
	// - 719496 - 28

	switch(miesiac)
		{
			case "01":
				milisekund+=31*86400000;
				break;
			case "02":
				milisekund+=dzienLuty*86400000;
				break;
			case "03":
				milisekund+=31*86400000;
				break;
			case "04":
				milisekund+=30*86400000;
				break;
			case "05":
				milisekund+=31*86400000;
				break;
			case "06":
				milisekund+=30*86400000;
				break;
			case "07":
				milisekund+=31*86400000;
				break;
			case "08":
				milisekund+=31*86400000;
				break;
			case "09":
				milisekund+=30*86400000;
				break;
			case "10":
				milisekund+=31*86400000;
				break;
			case "11":
				milisekund+=30*86400000;
				break;
			case "12":
				milisekund+=31*86400000;
				break;
		}