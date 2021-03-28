var booklist=[
[1,"CRC","Circe","Madeline Miller","Fantasy","Available"],
[2,"HML","Hamlet","William Shakespeare","Drama","Available"],
[3,"LOP","Life of Pi","Yann Martel","Action and Adventure","Available"],
[4,"LW","Little Women","Louisa May Alcott", "Classics", "Available"],
[5,"THG3","Mockingjay","Suzanne Collins","Dystopia","Available"],
[6,"ASH","The Adventures of Sherlock Holmes","Sir Arthur Conan Doyle","Detective and Mystery","Available"],
[7,"TCP","The Collected Poems","Sylvia Plath","Poetry","Available"],
[8,"HHH","The Haunting of Hill House","Shirley Jackson","Horror","Available"],
[9,"3M","The Three Musketeers","Alexandre Dumas", "Action and Adventure","Available"],
[10,"TMB","Three Men in a Boat","Jerome K. Jerome","Humour","Available"]
];

var startdate=["","","","","","","","","",""];
var endingdate=["","","","","","","","","",""];

var admin=["ADMIN","mypass"];

var users=[
["user1","pass1"],
["user2","pass2"]
];

var displist=new Array();

var ucount=2;
var currstate="";
var rentbooks=new Array();
var retnum;

/*
function putit()
{
	displist=[];
	document.getElementById("listtab").innerHTML="<tr><th>Sl.No.</th><th>Code</th><th>Book Name</th><th>Author</th><th>Category</th><th>Status</th><th>Starting Date</th><th>Ending Date</th></tr>";
	for(var i=0;i<booklist.length;i++)
	{
		if(booklist[i][5]!='Available'&&document.getElementById("sigstat").innerHTML!="Admin")
			continue;
		var str="<tr name='bookrow'><td>"+booklist[i][0]+"</td><td>"+booklist[i][1]+"</td><td>"+booklist[i][2]+"</td><td>"+booklist[i][3]+"</td><td>"+booklist[i][4]+"</td><td name='bstat'>"+booklist[i][5]+"</td><td name='stadate'></td><td name='enddate'></td>";
		if(document.getElementById("sigstat").innerHTML!="Admin")
			str+='<td><input type="checkbox" name="book" value="1"/></td>';
		str+="</tr>";
		displist.push(booklist[i]);
		document.getElementById("listtab").innerHTML+=str;
	}
}*/

function putit()
{
	displist=[];
	if(document.getElementById("sigstat").innerHTML=="Admin")
	{
		document.getElementById("listtab").innerHTML="<tr><th>Sl.No.</th><th>Code</th><th>Book Name</th><th>Author</th><th>Category</th><th>Status</th><th>Starting Date</th><th>Ending Date</th></tr>";
		for(var i=0;i<booklist.length;i++)
		{
		var str="<tr name='bookrow'><td>"+booklist[i][0]+"</td><td>"+booklist[i][1]+"</td><td>"+booklist[i][2]+"</td><td>"+booklist[i][3]+"</td><td>"+booklist[i][4]+"</td><td name='bstat'>"+booklist[i][5]+"</td><td name='stadate'>";
		if(startdate[i]!=0)
			str+=startdate[i];
		str+="</td><td name='enddate'>";
		if(endingdate[i]!=0)
			str+=endingdate[i];
		str+="</td></tr>";
		document.getElementById("listtab").innerHTML+=str;
		}
	}
	else
	{
		document.getElementById("listtab").innerHTML="<tr><th>Sl.No.</th><th>Code</th><th>Book Name</th><th>Author</th><th>Category</th><th></th></tr>";
		for(var i=0;i<booklist.length;i++)
		{
			if(booklist[i][5]=='Available')
			{
				var str="<tr name='bookrow'><td>"+booklist[i][0]+"</td><td>"+booklist[i][1]+"</td><td>"+booklist[i][2]+"</td><td>"+booklist[i][3]+"</td><td>"+booklist[i][4]+"</td><td><input type='checkbox' name='book' value='1'/></td></tr>";
				displist.push(booklist[i]);
				document.getElementById("listtab").innerHTML+=str;
			}
		}
	}
}
	
function puttit()
{
	for(var i=0;i<displist.length;i++)
	{
		if(document.getElementById(displist[i][1]).checked)
		{
		var str="<tr><td>"+displist[i][0]+"</td><td>"+displist[i][1]+"</td><td>"+displist[i][2]+"</td><td>"+displist[i][3]+"</td><td>"+displist[i][4]+"</td><td>"+displist[i][5]+"</td></tr>";
		document.getElementById("rnt").innerHTML+=str;
		rentbooks.push(displist[i]);
		}
	}
}

function sign()
{
	var check=0;
	var uname=document.getElementById("sname").value;
	var upass=document.getElementById("spass").value;
	if(uname==admin[0]&&upass==admin[1])
	{
		alert("WELCOME ADMIN");
		document.getElementById("sigstat").innerHTML="Admin";
		check=1;
		putit();
	}
	else
	{
		check=-1;
		for(var i=0;i<ucount;i++)
		{
			if(uname==users[i][0])
				check=i;
		}
		if(check<0)
		{
			alert("No such account is there");
			document.getElementById("sname").value="";
			document.getElementById("spass").value="";
		}
		if(upass==users[check][1])
		{
			alert("Welcome, "+uname);
			document.getElementById("sigstat").innerHTML=uname;
			check=-10;
		}
		if(check!=-10)
			check=0;
		else
			check=1;
	}
	if(check==1)
	{
		document.getElementById("sighead").innerHTML="Sign-Out";
		document.getElementById("sname").disabled=true;
		document.getElementById("spass").disabled=true;
		document.getElementById("sigbut").innerHTML='<input type="button" value="Sign-Out" onclick="signout()" />';
		retguidance();
	}
}

function signout()
{
	document.getElementById("sighead").innerHTML="Sign-In";
	document.getElementById("sname").disabled=false;
	document.getElementById("spass").disabled=false;
	document.getElementById("sigstat").innerHTML="Not Signed In";
	document.getElementById("sname").value="";
	document.getElementById("spass").value="";
	document.getElementById("sigbut").innerHTML='<input type="button" value="Sign-In" onclick="sign()" />';
	var str='<h2>Here, the return of borrowed books can be scheduled.</h2><br><label>Enter Number of Books to be returned : </label><input type="number" id="retbnum" /><input type="button" value="Next" onclick="retbooks()"/><p id="pararet1"></p><table id="rettab" border="1" cellpadding="5" cellspacing="0"></table><br><br><p id="pararetrn1"></p><table id="rnt" cellpadding="5" cellspacing="0" border="2"></table><p id="parartrn2"></p>';
	document.getElementById("retcelladded").innerHTML=str;
	putit();
	retguidance();
}

function listchange()
{
	var stat=document.getElementById("sigstat").innerHTML;
	if(stat=="Not Signed In")
		alert("You have to sign in as Admin to be able to make changes to the list");
	else
	{
		if(stat!="Admin")
			alert("Only Admin can make changes");
		else
		{
			alert("You can make changes!!!");
		}
	}
} 

function rent()
{
	var arr=document.getElementsByName("book"),x=["1","abc"];
//	alert(arr.length);
	for(var i=0;i<arr.length;i++)
	{
		document.getElementsByName("book")[i].id=displist[i][1];
		document.getElementsByName("bookrow")[i].id="b"+displist[i][1];
		if(document.getElementById(displist[i][1]).checked)
			x.push(displist[i][1]);
	}
	document.getElementById("pararent1").innerHTML="You are checking for these books - <br>";
	puttit();
	var str='Starting date : <input type="date" id="stdate" /><br><br>Finishing date : <input type="date" id="endate" /><br><br><input type="button" value="Submit" onclick="verify()"/>';
	document.getElementById("pararent2").innerHTML=str;
}

function verify()
{
	var start=document.getElementById("stdate").value;
	var end=document.getElementById("endate").value;
	if(end<start)
	{
		alert("ERROR : Invalid date entry");
		return;
	}
	if(end==0||start==0)
	{
		alert("Enter the dates");
		return;
	}


	/*
	var sarr=document.getElementsByName("stadate");
	var earr=document.getElementsByName("enddate"),check=0;
	for(var i=0;i<sarr.length;i++)
	{
		if((document.getElementById(booklist[i][1]).checked)&&((sarr[i].innerHTML!="")))
			check=1;
	}
	if(check==1)
		alert("Problem");
	else*/


		//alert(rentbooks+" one");
		var us=document.getElementById("sigstat").innerHTML;
			if(us=="Not Signed In"||us=="Admin")
			{
				if(us=="Admin")
					alert("You are the admin! You cannot be a customer...");
				else
					alert("Please sign in first");
				return;
			}
		//alert(rentbooks+" two");
		for(var i=0;i<rentbooks.length;i++)
		{
			booklist[rentbooks[i][0]-1][5]="Taken by "+document.getElementById('sigstat').innerHTML;
		//	displist[rentbooks[i][0]-1][5]="Taken by "+document.getElementById('sigstat').innerHTML;
			startdate[rentbooks[i][0]-1]=start;
			endingdate[rentbooks[i][0]-1]=end;
		//	document.getElementsByName("bstat")[rentbooks[i][0]-1].innerHTML=booklist[rentbooks[i][0]-1][5];
		}
		//alert(rentbooks+" three");
		rentbooks=[];
		document.getElementById("pararent1").innerHTML="";
		document.getElementById("rnt").innerHTML="";
		document.getElementById("pararent2").innerHTML="";
		//alert("oj");
		var hor=Math.floor(Math.random()*10)+8
		alert("Your changes have been saved, and you should collect your books at " +hor+ ":00 on " +start);
		retguidance();
	
}

var retidentity;

function retbooks()
{
	var us=document.getElementById("sigstat").innerHTML;
	if(us=="Not Signed In"||us=="Admin")
	{
		if(us=="Admin")
			alert("You are the admin! You cannot be a customer...");
		else
			alert("Please sign in first");
		return;
	}
	else
		retidentity=us;
	retnum=document.getElementById("retbnum").value;
	var i;
	document.getElementById("pararet1").innerHTML="Enter the codes of the books to be returned.";
	if(retnum<0)
		return;
	for(i=0;i<retnum;i++)
	{
		document.getElementById("pararet1").innerHTML+='<br><br><input type="text" name="returning" />';
	}
	document.getElementById("pararet1").innerHTML+='<br><br><input type="button" value="Next" onclick="checkreturn()"/>';
}

function checkreturn()
{
	var i,j;
	var retarr=new Array();
	retarr=document.getElementsByName("returning");
	var check=2,listarr=new Array();
	for(j=0;j<retnum;j++)
	{
		check=2;
		for(i=0;i<booklist.length;i++)
		{
			if((booklist[i][1]==retarr[j].value)&&(booklist[i][5]==("Taken by "+retidentity)))
			{
				//alert("Yes - "+booklist[i][2]);
				listarr.push(i);
				check=1;
			}
			else;
		}
		if(check==2)
		{
			check=0;
			break;
		}
	}
	if(check==0)
		alert("Please Enter Correct Values!");
	else
	{
		//alert(listarr);
		for(i=0;i<retnum;i++)
		{
			booklist[listarr[i]][5]="Available";
			startdate[listarr[i]]="";
			endingdate[listarr[i]]="";
		}
		retguidance();
		var str='<label>Enter the day on which you wish to submit the book(s) : <br><input type="date" id="subdate"/><br><br><input type="button" value="Return these books!" onclick="retbookfinal()"/>';
		document.getElementById("parartrn2").innerHTML=str;
	}
}

function retbookfinal()
{
	var time=Math.floor(Math.random()*10)+8;
	var subday=document.getElementById("subdate").value;
	alert("You may return your books at "+time+":00 on "+subday);
}

function retguidance()
{
	var sg=document.getElementById("sigstat").innerHTML;
	var i,count=0;
	if(sg=='Admin'||sg=='Not Signed In')
	{
		document.getElementById("rettabpara").innerHTML="";
		document.getElementById("retguide").innerHTML="";
		return;
	}
	else
	{
		document.getElementById("rettabpara").innerHTML="This is the list of books currently in your possession";
		document.getElementById("retguide").innerHTML="<tr><th>Sl.No.</th><th>Code</th><th>Book Name</th><th>Author</th><th>Category</th></tr>";
		//alert("entering");
		for(i=0;i<booklist.length;i++)
		{
//alert("Almost entered : "+booklist[i][5]);
			if(booklist[i][5]==("Taken by "+sg))
			{
				//alert("entered");
				count++;
				var str="<tr><td>" +booklist[i][0]+ "</td><td>" +booklist[i][1]+ "</td><td>" +booklist[i][2]+ "</td><td>" +booklist[i][3]+ "</td><td>" +booklist[i][4]+ "</td></tr>";
				//alert("Str : "+str);
				document.getElementById("retguide").innerHTML+=str;
			}
		}
		if(count==0)
		{
			document.getElementById("rettabpara").innerHTML="You do not have any book in your possession";
			document.getElementById("retguide").innerHTML="";	
		}
	}
}