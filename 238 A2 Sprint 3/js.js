 $(function(){
                $("#image").click(function(){
            $("#uploadfile").click();
            })
            $("#uploadfile").change(function(){
 
                var files=$(this)[0].files[0];    //Get file details
                if(files)
                {
                    var reader=new FileReader();  //Open FileReader
                    reader.onload=function(evt){   //Occurs when the operation completes.
                        $("#image").attr('src',evt.target.result)  //Binding the URL of the IMC to the tag


                    }
                reader.readAsDataURL(files); //Read file as DataURL(base64)
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
 
                var files=$(this)[0].files[0];    //Get file details
                if(files)
                {
                    var reader=new FileReader();  //Open FileReader
                    reader.onload=function(evt){    //Occurs when the operation completes.
                        $("#image").attr('src',evt.target.result) //Binding the URL of the IMC to the tag
                    }
                reader.readAsDataURL(files); //Read file as DataURL(base64)
                }
                else{
                    alert("Upload fail");
                }
            })
            })

             
              $(function(){
                $("#image").click(function(){
            $("#uploadfile").click();
            })
            $("#uploadfile").change(function(){
 
                var files=$(this)[0].files[0];    //Get file details
                if(files)
                {
                    var reader=new FileReader();  //Open FileReader
                    reader.onload=function(evt){   //Occurs when the operation completes.
                        $("#image").attr('src',evt.target.result)   //Binding the URL of the IMC to the tag
                    
                    }
                reader.readAsDataURL(files); //Read file as DataURL(base64)
                }
                else{
                    alert("Upload fail");
                }
            })
            })