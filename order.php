<?php

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: info@doclewedding.ru' . "\r\n";


$body = '
  <div style="background-color:#f6e3bf">
	<table cellpadding="0" cellspacing="0" border="0" width="682" style="margin:0 30px;background-color:#fff;">
	  <tr>
	    <td style="padding: 53px 0 16px 0;text-align: right;vertical-align: top;" width="190">
	      <div style="font-family:Times,serif;font-size: 20px;line-height: 18px;color: #1d1d1d;margin: 0 0 6px 0;">
	        +7 (495) 665-52-39
	      </div>
	    </td>
	    <td style="padding: 31px 0 9px 80px;text-align: center;vertical-align: top;">
	      <img src="http://test.renart.ru/layout/dolce/images/logo-letter.png" alt=""/>
	    </td>
	    <td style="padding: 51px 33px 22px 0;text-align: right;vertical-align: top;width: 217px;">
	      <a href="mailto:info@doclewedding.ru" style="font-family: Georgia,serif;font-size: 14px;color: #7d5d21;">info@doclewedding.ru</a>
	      </td>
	    </td>
	  </tr>
	  <tr>
	    <td colspan="3">
	      <div style="font-family: Georgia,serif;font-size: 26px;line-height: 28px;color: #cda659;margin: 0px 30px 13px 30px;text-transform: uppercase;border-top: 1px solid #f8ebd2;padding: 34px 0 0 0;">
	        Спасибо за заказ!
	      </div>
	      <div style="font-family: Georgia,serif;font-size: 22px;line-height: 24px;color: #1d1d1d;margin: 0 30px 16px 30px;">
	        Детали заказа
	      </div>
	      <div style="border: 2px solid #efd39e;padding: 27px 24px;margin: 0 30px 50px 30px;">
	      	<table cellpadding="0" cellspacing="0" border="0">
';

if ($_POST['kind']) {
  $body.='
  
      <tr>
        <td style="font-size:14px;line-height:15px;color:#97948f;vertical-align:top;padding:2px 66px 7px 0;white-space:nowrap;">Тип заявки:</td>
        <td style="color:#272625;font-size:17px;line-height:18px;vertical-align:top;padding:0 0 8px 0;">'.$_POST['kind'].'</td>
      </tr> 
  
  ';
}

if ($_POST['name']) {
  $body.='
  
      <tr>
        <td style="font-size:14px;line-height:15px;color:#97948f;vertical-align:top;padding:2px 66px 7px 0;white-space:nowrap;">Ваше имя:</td>
        <td style="color:#272625;font-size:17px;line-height:18px;vertical-align:top;padding:0 0 8px 0;">'.$_POST['name'].'</td>
      </tr>  
  
  ';
}
        
if ($_POST['phone']) {
  $body.='
  
      <tr>
        <td style="font-size:14px;line-height:15px;color:#97948f;vertical-align:top;padding:2px 66px 7px 0;white-space:nowrap;">Ваш телефон:</td>
        <td style="color:#272625;font-size:17px;line-height:18px;vertical-align:top;padding:0 0 8px 0;">'.$_POST['phone'].'</td>
      </tr>  
  
  ';
}
        
if ($_POST['email']) {
  $body.='
  
      <tr>
        <td style="font-size:14px;line-height:15px;color:#97948f;vertical-align:top;padding:2px 66px 7px 0;white-space:nowrap;">Ваш E-mail:</td>
        <td style="color:#272625;font-size:17px;line-height:18px;vertical-align:top;padding:0 0 8px 0;">'.$_POST['email'].'</td>
      </tr>  
  
  ';
}

if ($_POST['date']) {
  $body.='
  
      <tr>
        <td style="font-size:14px;line-height:15px;color:#97948f;vertical-align:top;padding:2px 66px 7px 0;white-space:nowrap;">Дата мероприятия:</td>
        <td style="color:#272625;font-size:17px;line-height:18px;vertical-align:top;padding:0 0 8px 0;">'.$_POST['date'].'</td>
      </tr>  
  
  ';
}


if ($_POST['time']) {
  $body.='
  
      <tr>
        <td style="font-size:14px;line-height:15px;color:#97948f;vertical-align:top;padding:2px 66px 7px 0;white-space:nowrap;">Удобное время для звонка:</td>
        <td style="color:#272625;font-size:17px;line-height:18px;vertical-align:top;padding:0 0 8px 0;">'.$_POST['time'].'</td>
      </tr>  
  
  ';
}

if ($_POST['message']) {
  $body.='
  
      <tr>
        <td style="font-size:14px;line-height:15px;color:#97948f;vertical-align:top;padding:2px 66px 7px 0;white-space:nowrap;">Ваш комментарий:</td>
        <td style="color:#272625;font-size:17px;line-height:18px;vertical-align:top;padding:0 0 8px 0;">'.$_POST['message'].'</td>
      </tr>  
  
  ';
}

$body.='

          </table>
	      </div>
	    </td>
	  </tr>
	  <tr>
	    <td colspan="3" style="color: #272625;font-family: Georgia,serif;font-style: italic;padding: 24px 0;font-size: 13px;
text-align: center;background: #272625;">
	      <img src="http://test.renart.ru/layout/dolce/images/logo-letter-footer.png"/>
	    </td>
	  </tr>
	  <tr>
	    <td colspan="3">
	      <table cellpadding="0" cellspacing="0" border="0" style="width: 682px;">
	        <tr>
	        	<td style="background: #272625;padding: 10px 0 34px 0;vertical-align: top;text-align: right;width: 163px;"><img src="http://test.renart.ru/layout/dolce/images/bullet-1.png" alt=""/></td>
	        	<td style="color: #fff;font-family: Georgia,serif;padding: 7px 0 30px 0;font-size: 10px;text-align: center;background: #272625;text-transform: uppercase;">
	        	  &copy; 2005-2013. dolce wedding. Все права защищены.
	        	</td>
	        	<td style="background: #272625;padding: 10px 0 34px 0;vertical-align: top;width: 163px;"><img src="http://test.renart.ru/layout/dolce/images/bullet-1.png" alt=""/></td>
	        </tr>
	      </table>
	    </td>
	  </tr>
	</table>
</div>

';

// Отправка письма пользователю, если указан email

if ($_POST['email']) {
  mail($_POST['email'], $_POST['subject'], $body, $headers);
}

// Отправка письма администратору

var_dump(mail('f.glukhov@gmail.com', $_POST['subject'], $body, $headers));
// var_dump(mail('test@bolshoyjack.ru', $_POST['subject'], $body, $headers));
// var_dump(mail('antontuzlukov@ya.ru', $_POST['subject'], $body, $headers));
// mail('antontuzlukov@gmail.ru', $_POST['subject'], $body, $headers);

  
//echo $body;

?>