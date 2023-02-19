var names=new Array();
names[0]="Ambika";
names[1]="Bhargavi";
names[2]="Charan";
names[3]="jareen";
names[4]="Eswar";
names[5]="Falak";
names[6]="Gowri";
names[7]="Harsha";
names[8]="Indhu";
names[9]="Jyothi";
for(var i = 0; i < names.length; i++)
{
        if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
        {
            console.log("Goodbye "+ names[i])
        }  
        else
        {
            console.log("Hello "+ names[i])
        }    

}