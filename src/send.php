<?php
header("Access-Control-Allow-Origin: *");
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $userText = $_POST['message'];

    // Load Composer's autoloader
    require 'php-mailer/Exception.php';
    require 'php-mailer/PHPMailer.php';
    require 'php-mailer/SMTP.php';

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    if ($_SERVER['HTTP_REFERER'] === "http://localhost:3000/globix") {
        try {                     // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'communicationwithteam@gmail.com';                     // SMTP username
            $mail->Password   = 'm162mPk55a=B';                               // SMTP password
            $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        
            //Recipients
            $mail->setFrom('communicationwithteam@gmail.com');
            $mail->addAddress('dmikhaylov7@gmail.com'); 
            $mail->addReplyTo('communicationwithteam@gmail.com'); 
            // Add a recipient
            
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Новая заявка сайта';
            $mail->Body    = "Имя пользователя ${userName}, его почта ${userEmail}, его вопрос ${userText}";
        
            if($mail->send()) {
                echo "ok";
            } else { 
                echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
            }
        } catch (Exception $e) {
            echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
        }
    }



