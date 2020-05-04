$.getJSON("movie-detail.json",function(data){
    var ids = localStorage.getItem("id")
    var items = [];
    $.each(data, function(key, val) {
        if(ids == val.id) {
            $("#title").append(val.title +' | Descfilm')
            $("#tabel").append(
                '<tr>'+
                    '<td rowspan="2"><img src="img/'+val.img+'" width="125px"></td>'+
                    '<td class="text-uppercase"><h2>'+val.title +'</h2></td>'+
                '</tr>'+
                '<tr>'+
                    '<td>'+val.synopsisshort+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td><h5>Genre</h5></td>'+
                    '<td>'+val.genre+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td><h5>Language</h5></td>'+
                    '<td>'+val.language+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td><h5>Runtime</h5></td>'+
                    '<td>'+val.runtime+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td><h5>Producer</h5></td>'+
                    '<td>'+val.producer+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td><h5>Director</h5></td>'+
                    '<td>'+val.director+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td><h5>Distributor</h5></td>'+
                    '<td>'+val.distributor+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td><h5>Year</h5></td>'+
                    '<td>'+val.year+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td><h5>Rating</h5></td>'+
                    '<td>'+val.rating+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td><h5>Casts</h5></td>'+
                    '<td>'+val.casts+'</td>'+
                '</tr>'
            );
            $("#yutub").append(
                '<iframe src="'+val.videourl+'" frameborder="0" allowfullscreen></iframe>'
            );
            $("#line1").append(val.synopsisline1);
            $("#line2").append(val.synopsisline2);
        }	
    });
});