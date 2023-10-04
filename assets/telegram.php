<?php
/* https://api.telegram.org/bot598xxxx25:AAFbxxxct_99vxxxxxxxxTExB-TxxM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */ 
// api.telegram.org/bot1198xxx29:AAxxxvzDVgpdMv9j-1pX83xxxxxxTwA/getUpdates,

// if(isset($_POST['info'])) {
    $info = $_POST['info'];
// } else {
//     $info = '-';
// }

    $phone = $_POST['phone'];

    $phone = $_POST['name']; if ($name == '') { $name = '-'; };
    $name = $_POST['name']; if ($name == '') { $name = '-'; };
    $email = $_POST['email']; if ($email == '') { $email = '-'; };

$token = "11xxxxxx9:AAxxxxxxxv9j-1pxxxxxxTwA";
$chat_id = "-4xxxx3xx6";

$arr = array(
    "Ім'я: " => $name,
    "Телефон: " => '+'.$phone,
    "Email: " => $email,
    "Інформація: " => $info,
);


foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
  
  if ($sendToTelegram) {
    header('Location: index.html');
  } else {
    echo "Error";
  }
?>