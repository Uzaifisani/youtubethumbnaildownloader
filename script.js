
function urlgrabber()
{
	var inputText = document.getElementById("url").value;
	var isShortYoutube = inputText.search("youtu.be");
	var isLongYoutube = inputText.search("youtube");
	if (isShortYoutube < 0 && isLongYoutube < 0) 
	{
    return "Not Found";
	}
	if (isLongYoutube > 0) 
    {
      console.log("longyoutube");
    
	// https://www.youtube.com/watch?v=nCeYawQZYRc
     var indexOfEqual=inputText.search("=");
     console.log(indexOfEqual);
     var code=inputText.slice(indexOfEqual+1);
     return code
    }
    if(isShortYoutube > 0)
    {
		console.log("shortyoutube");
		// https://youtu.be/nCeYawQZYRc
		var indexOfSlash=inputText.lastIndexOf("/");
		console.log(indexOfSlash);
		var scode=inputText.slice(indexOfSlash+1);
		return scode
		console.log(inputText);
	}
}

function fetchImage()
{
	var vCode=urlgrabber();
	var htmlCode;
	if(vCode==="Not Found")
	{
     htmlCode=`<div class="alert alert-danger">
     <h2>Enter valid url</h2></div>`;
	}
    else
    {	
	htmlCode = `<div>
	<img src="https://img.youtube.com/vi/${vCode}/0.jpg" alt="Youtube thumbnail" class="img-thumbnail"></br>
    <button  type="button" class="btn btn-info" onclick="window.open(href='https://img.youtube.com/vi/${vCode}/maxresdefault.jpg')">Full HD Image</button>
    <button type="button" class="btn btn-info" onclick="window.open('https://img.youtube.com/vi/${vCode}/hqdefault.jpg')">HD Image</button>
    <button type="button" class="btn btn-info" onclick="window.open(href='https://img.youtube.com/vi/${vCode}/mqdefault.jpg')">360p Image</button>
    </br></br>
    <button onclick="location.reload();" type="button" class="btn btn-success"">Fetch Again</button>
    </div>`

	}
	document.getElementById("img").innerHTML=htmlCode;
}
