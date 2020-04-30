$.getJSON("movie-detail.json",function(data){
    var test;
    var x = 0;
    var genre;
    var b = localStorage.getItem("secion");
    var search = localStorage.getItem("searchs");
    var result = new RegExp(search,"i");
    var items=[];
    $.each(data, function(key, val){
        genre = val.genre;
        switch (genre) {
            case "Comedy" : test = "#comedi";
                break;
            case "Adventure" : test = "#aventure";
                break;
            case "Action" : test = "#acion";
                break;
            default : 
                break;
        }
        if(b=="true") {
            test = "#searsi";
            x=1;
            document.getElementById("namasearch").innerHTML = "Search '" + search + "'";
        }
        if(x==0) {
            $(test).append(
                '<div class="col-md-4 mb-4 box-item" >'+
                    '<a class="box-link" data-toggle="modal" href="#portfolio1Modal'+val.id+'">'+
                        '<div class="box-hover">'+
                            '<div class="portfolio-hover-content">'+
                                '<i class="fa fa-plus fa-3x"></i>'+
                            '</div>'+
                        '</div>'+
                        '<img class="img-fluid" src="img/' +val.img+'" width="640px" height="426px">'+
                    '</a>'+
                    '<div class="portfolio-caption">'+
                        '<h4 style="text-align: center; color: white">'+val.title+'</h4>'+
                        '<p style="text-align: center; color: white">'+ val.year +'</p>'+
                    '</div>'+
                '</div>'
            );
            $("#page-top").append(
                '<div class="modal fade" id="portfolio1Modal'+val.id+'" tabindex="-1" role="dialog" aria-hidden="true">'+
                    '<div class="modal-dialog modal-dialog-centered" role="document">'+
                        '<div class="modal-content">'+
                            '<div class="modal-header">'+
                                '<h3 class="modal-title text-uppercase">'+val.title+'</h3>'+
                                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                                    '<span aria-hidden="true">&times;</span>'+
                                '</button>'+
                            '</div>'+
                            '<div class="modal-body">'+
                                '<div class="video-container">'+
                                    '<iframe width="853" height="480" src="'+val.videourl+'" frameborder="0" allowfullscreen></iframe>'+
                                '</div>'+
                                '<p style="text-align: justify;">'+val.synopsisshort+'</p>'+
                                '<div class="text-center">'+
                                    '<a href="detail.html">'+
                                        '<button class="btn btn-dark" style="background-color: maroon;" type="button" onclick="sends('+val.id+')">'+
                                            'Learn more'+
                                        '</button>'+
                                    '</a>'+
                                '</div>'+
                            '</div>'+
                          '</div>'+
                    '</div>'+
                '</div>'
            )
        }
        if((val.title).match(result)) {
            if(search!="") {
                $(test).append(
                    '<div class="col-md-4 mb-4 box-item" >'+
                        '<a class="box-link" data-toggle="modal" href="#portfolio1Modal'+val.id+'">'+
                            '<div class="box-hover">'+
                                '<div class="portfolio-hover-content">'+
                                    '<i class="fa fa-plus fa-3x"></i>'+
                                '</div>'+
                            '</div>'+
                            '<img class="img-fluid" src="img/' +val.img+'" width="640px" height="426px">'+
                        '</a>'+
                        '<div class="portfolio-caption">'+
                            '<h4 style="text-align: center; color: white">'+val.title+'</h4>'+
                            '<p style="text-align: center; color: white">'+ val.year +'</p>'+
                        '</div>'+
                    '</div>'
                );
                $("#page-top").append(
                    '<div class="modal fade" id="portfolio1Modal'+val.id+'" tabindex="-1" role="dialog" aria-hidden="true">'+
                        '<div class="modal-dialog modal-dialog-centered" role="document">'+
                            '<div class="modal-content">'+
                                '<div class="modal-header">'+
                                    '<h3 class="modal-title text-uppercase">'+val.title+'</h3>'+
                                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                                        '<span aria-hidden="true">&times;</span>'+
                                    '</button>'+
                                '</div>'+
                                '<div class="modal-body">'+
                                    '<div class="video-container">'+
                                        '<iframe width="853" height="480" src="'+val.videourl+'" frameborder="0" allowfullscreen></iframe>'+
                                    '</div>'+
                                    '<p style="text-align: justify;">'+val.synopsisshort+'</p>'+
                                    '<div class="text-center">'+
                                        '<a href="detail.html">'+
                                            '<button class="btn btn-dark" style="background-color: maroon;" type="button" onclick="sends('+val.id+')">'+
                                                'Learn more'+
                                            '</button>'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                              '</div>'+
                        '</div>'+
                    '</div>'
                )
            }
        }
    });
});