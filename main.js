var images =[
    "https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6",
    "https://image.shutterstock.com/z/stock-vector-happy-cute-teen-girl-daughter-cartoon-1042275829.jpg",
    "https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg",
    "https://cdn2.vectorstock.com/i/1000x1000/50/61/cartoon-business-man-cartoon-character-young-male-vector-15325061.jpg"
    
    ];
    var names=[
    "Alia Singh",
    "Liya Singh",
    "Ranveer Singh",
    "Rocky Singh"
    ];
    var i = 0;
    function update() {
        i++; 
     var Numbers_of_family_members_in_array=3;
    if (i >Numbers_of_family_members_in_array)
    {
    i=0;    
    }
    
    var updatedimage=images[i];
    var updatedname=names[i];
    document.getElementById("AliaBhatt").src = updatedimage;

    document.getElementById("family_member_name").innerHTML=updatedname;
    
}