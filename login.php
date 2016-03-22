<HTML>

	<HEAD>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width" />
		<link rel="stylesheet" href="style.css">
		<TITLE> After login </TITLE>
	</HEAD>

    <BODY>
	
		<HEADER>
			<p><FONT size=4><CENTER><B>Hello and welcome to MyTask !
			Here you can manage your tasks and simplify your life !</p></B></CENTER></FONT>
		</HEADER>
		
        <?php
		$message='';
		if (isset($_POST['Password']) AND $_POST['Password'] == "Password" AND isset($POST['Login']) AND $_POST['Login']=="Login")
		{
			$message='Welcome. You are now connected. <a href="List.html">Click here to continue.</a>';
		}
		
		else
		{ 
			$message='Wrong password or login';
		}
		echo $message;
		?>
		
		<!--I add it because it didn't work-->
		<a href="list.html"> Keep  going </a>
		
	</BODY>
	
	<FOOTER>
		<p align="right">Website created by Aurore Berne.</p>
	</FOOTER>
</HTML>
	