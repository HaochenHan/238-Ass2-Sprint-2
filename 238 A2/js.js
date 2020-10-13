 $(function(){
                $("#image").click(function(){
            $("#uploadfile").click();
            })
            $("#uploadfile").change(function(){
 
                var files=$(this)[0].files[0];    //Get file information


                if(files)
                {
                    var reader=new FileReader();  // Using FileReader
                    reader.onload=function(evt){   
                        $("#image").attr('src',evt.target.result)  //Binding the SRC of img tag as dataurl


                    }
                reader.readAsDataURL(files); //Read file as dataurl (Base64)


                }
                else{
                    alert("Upload Fail");
                }
            })
            })


             $(function(){
                $("#image").click(function(){
            $("#uploadfile").click();
            })
            $("#uploadfile").change(function(){
 
                var files=$(this)[0].files[0];    //Get file information
                if(files)
                {
                    var reader=new FileReader();  //Using FileReader
                    reader.onload=function(evt){   
                        $("#image").attr('src',evt.target.result)  //Binding the SRC of img tag as dataurl
                    }
                reader.readAsDataURL(files); //Read file as dataurl (Base64)


                }
                else{
                    alert("Upload file");
                }
            })
            })

             
              $(function(){
                $("#image").click(function(){
            $("#uploadfile").click();
            })
            $("#uploadfile").change(function(){
 
                var files=$(this)[0].files[0];    //Get file information
                if(files)
                {
                    var reader=new FileReader();  //Using FileReader
                    reader.onload=function(evt){   
                        $("#image").attr('src',evt.target.result)  //Binding the SRC of img tag as dataurl
                    }
                reader.readAsDataURL(files); //Read file as dataurl (Base64)
                }
                else{
                    alert("Upload file");
                }
            })
            })
