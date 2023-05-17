
<meta charset="utf-8"> 
<?php
$subject="Запрос на прайс-лист с сайта ПРОД-АЛЬЯНС";
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['name']))			{$name		= $_POST['name'];		if ($name == '')	{unset($name);}}
if (isset($_POST['email']))		    {$email		= $_POST['email'];		if ($email == '')	{unset($email);}}
// if (isset($_POST['text']))			{$text			= $_POST['text'];		if ($text == '')	{unset($text);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}
//стирание треугольных скобок из полей формы
/* комментарий */
if (isset($name) ) {
$name=stripslashes($name);
$name=htmlspecialchars($name);
}
if (isset($email) ) {
$email=stripslashes($email);
$email=htmlspecialchars($email);
}
// if (isset($text) ) {
// $text=stripslashes($text);
// $text=htmlspecialchars($text);
// }
// адрес почты куда придет письмо
$address="1996_maxim@mail.ru";
// текст письма 
$note_text="Тема : $subject \r\nИмя : $name \r\n Email : $email";
//  \r\n Дополнительная информация : $text";

if (isset($name)  &&  isset ($sab) ) {
mail($address,$subject,$note_text,"Content-type:text/plain; windows-1251"); 
// сообщение после отправки формы
    
echo "<p style='color:green;'>Уважаемый(ая) <b style='color:red;'>$name</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b style='color:red;'> $email</b>.</p>";
}

?>