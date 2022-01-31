<!doctype html>

<style>
 textarea{ position: absolute;
  top: 107px;
  width: 25%;
  height: 90px;
  left: 9px;
}
</style>


<div class="main">
<h1> WWW-Navigator mit PHP</h1>
<form method="post">
        <select name="top_thema">
            <option style="position: absolute;top: 81px; " value="We_App">We_App</option>
            <option style="position: absolute;top: 81px;width: 5%;position: absolute;top: 81px;width: 5%;left: 132px;" value="Aufgaben">Aufgaben</option>
        </select>
        <select name="sub_thema">
        </select>
        <textarea name="content"></textarea>
        <input type="submit" value="Submit">
</form>
</div>
<?PHP
$datei = './content.json';
$contents = file_get_contents( $datei );
$json = json_decode( $contents, true );
?>
<script>
    let json = <?PHP echo json_encode( $json ) ?>;
    let sub_thema = document.querySelector('select[name="sub_thema"]');
    let top_thema = document.querySelector('select[name="top_thema"]');
    let content = document.querySelector('textarea[name="content"');
        top_thema.addEventListener('click', e => {
        content.innerHTML = "";
        for(let i = sub_thema.options.length-1; i >= 0; i--){ sub_thema.options[i] = null;}          
       
	   Object.keys( json[ e.target.value ] ).forEach( key => {
            let newOption = document.createElement('option');
            newOption.value = key;
            newOption.innerText = key;
            sub_thema.appendChild( newOption ); });
    });
    sub_thema.addEventListener('click', e => {
        if(json[top_thema.value][sub_thema.value]) 
		{content.innerHTML = json[top_thema.value][sub_thema.value];}
         else {content.innerHTML = "";}});


</script>

<?PHP

if ( isset($_POST[ 'top_thema' ]) && isset($_POST[ 'sub_thema' ]) && isset($_POST[ 'content' ]) ){
    $top_thema = $_POST[ 'top_thema' ];
	$content = $_POST[ 'content' ];
    $sub_thema = $_POST[ 'sub_thema' ];

        $json[ $top_thema ][ $sub_thema ] = $content;
        if ( file_put_contents( $datei, json_encode( $json, true )) ){
            echo "<script>alert('Erfolgreich gespeichert!')</script>";
            header("Refresh:0");
        }
}
?>
 