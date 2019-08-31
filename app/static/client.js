var el = x => document.getElementById(x);

function prettifyResult(result) {
  const prettyResults = {
    p51: 'P-51 Mustang',
    p47: 'P-47 Thunderbolt',
    p38: 'P-38 Lightning',
    me109: 'Me109',
    fw190: 'Fw190',
    spitfire: 'Spitfire',
  };
  return prettyResults[result];
}

function showPicker() {
  el("file-input").click();
}

function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    el("image-picked").src = e.target.result;
    el("image-picked").className = "";
  };
  reader.readAsDataURL(input.files[0]);
}

function analyze() {
  var uploadFiles = el("file-input").files;
  if (uploadFiles.length !== 1) alert("Please select a file to analyze!");

  el("analyze-button").innerHTML = "Analyzing...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
    true);
  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function(e) {
    if (this.readyState === 4) {
      var response = JSON.parse(e.target.responseText);
      el("result-label").innerHTML = `Looks like a ${prettifyResult(response["result"])}!`;
    }
    el("analyze-button").innerHTML = "What Warbird?";
  };

  var fileData = new FormData();
  fileData.append("file", uploadFiles[0]);
  xhr.send(fileData);
}

